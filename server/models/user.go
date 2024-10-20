package models

import (
	"gorm.io/gorm"
)

type User struct{
	gorm.Model
	Name string `json:"name"`
	Email string `json:"email"`
	Password string `json:"password"`
}

type News struct {
	gorm.Model
	UserID uint `json:"userid"`
	Title string `json:"title"`
	Description string `json:"description"`
}
