package main

import (
	"fmt"
	"log"
	"os"
	"net/http"
	"strconv"

	model "github.com/segnities007/fortune-island/server/models"
	"github.com/labstack/echo/v4"
	"github.com/joho/godotenv"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var db *gorm.DB

func main() {
	if err := godotenv.Load(); err != nil {
		log.Fatalf("Error loading .env file: %v", err)
	}

	username := os.Getenv("DB_USERNAME")
	password := os.Getenv("DB_PASSWORD")
	host := os.Getenv("DB_HOST")
	dbname := os.Getenv("DB_NAME")

	dsn := fmt.Sprintf(
		"%s:%s@tcp(%s:3306)/%s?charset=utf8mb4&parseTime=True&loc=Local",
		username, password, host, dbname,
	)

	var err error
	db, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("failed to connect to database:", err)
	}

	log.Println("Connected to the database!")
	db.AutoMigrate(&model.User{})

	e := echo.New()
	routing(e)

	if err := e.Start(":8080"); err != nil {
		log.Fatalf("Error starting the server: %v", err)
	}
}

///

func routing(e *echo.Echo) {
	e.POST("/create/user", createUser)
	e.GET("/get/user/:id", getUser)
	e.POST("/create/news", createNews)
	e.GET("/get/news", getNews)
}

///

func getNews(c echo.Context) error {
	var news []model.News
	if err := db.Find(&news).Error; err != nil {
		return c.String(http.StatusNoContent, "failed getNews")
	}

	return c.JSON(http.StatusOK, news)
}

///

func createNews(c echo.Context) error {//完成
	id, err := strconv.Atoi(c.FormValue("id"))
	if err != nil {
		return c.String(http.StatusBadRequest, "failed to create news")
	}
	title := c.FormValue("title")
	description := c.FormValue("description")


	news := model.News{
		UserID: uint(id),
		Title: title,
		Description: description,
	}

	return db.Create(&news).Error
}

///

func getUser(c echo.Context) error {//完成
	id := c.FormValue("id")

	var user model.User
	result := db.First(&user, id)

	if result.Error != nil {
		return c.String(http.StatusNotFound, "Not exist the user having the id. or etc")
	}

	return c.JSON(http.StatusOK, user)
}

///

func createUser(c echo.Context) error { //完成
	name := c.FormValue("name")
	email := c.FormValue("email")
	password := c.FormValue("password")

	user := model.User{
		Name:     name,
		Email:    email,
		Password: password,
	}

	err := createUserToDataBase(user)
	if err != nil {
		return c.String(http.StatusInternalServerError, "Failed to create user")
	}

	return c.String(http.StatusOK, "User created successfully")
}

func createUserToDataBase(user model.User) error { // 完成
	return db.Create(&user).Error
}
