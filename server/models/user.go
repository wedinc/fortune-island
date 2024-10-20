package models

import (
	"gorm.io/gorm"
)

type User struct{
	gorm.Model
	UserModel UserModel
}

type UserModel struct{
	Name string
	Email string
	Password string
}
