package main

import (
	"fmt"
	"log"
	"os"
	"net/http"
	model "github.com/segnities007/fortune-island/server/models"

	"github.com/labstack/echo/v4"
	"github.com/joho/godotenv"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

func main(){
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

	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil{
		log.Fatal("failed to connect to database:", err)
	}

	log.Println("Connected to the database!")

	db.AutoMigrate(&model.User{})


	e := echo.New()

}

func routing(e *echo.Echo){
	e.POST("/create/user", createUser)
	e.GET("/get/user:id", )
}

func createUser(c echo.Context, ) error {
	name := c.FormValue("name")
	email := c.FormValue("email")
	password := c.FormValue("password")

	user := model.User{
		UserModel: model.UserModel{
			Name: name,
			Email: email,
			Password: password,
		}}


}

func createUserToDataBase(db *gorm.DB, ) error {

}
