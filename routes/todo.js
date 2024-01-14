const express = require("express")
const { addTodo } = require("../controllers/todo")
const app = express()

//express.Router() fungsinya ngebantu kita supaya routernya dibuat sesuai kategori
const todo = express.Router()

todo.post('/todos', addTodo);

module.exports = {
    todo
}