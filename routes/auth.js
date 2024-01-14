const express = require("express")
const { register, login } = require("../controllers/auth")
const app = express()

// const authController = require('../controllers/auth')

//express.Router() fungsinya ngebantu kita supaya routernya dibuat sesuai kategori
const user = express.Router()

user.post('/register', register)
user.post('/login', login)


module.exports = {
    user
}