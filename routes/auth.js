const express = require("express")
const app = express()

const authController = require('../controllers/auth')

//express.Router() fungsinya ngebantu kita supaya routernya dibuat sesuai kategori
const user = express.Router()

user.post('/register', authController.register)


module.exports = {
    user
}