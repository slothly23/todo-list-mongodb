const express = require("express")
const { addTodo, getTodo } = require("../controllers/todo")
const app = express()

//express.Router() fungsinya ngebantu kita supaya routernya dibuat sesuai kategori
const todo = express.Router()

todo.post('/todos', addTodo);
todo.get('/todos', getTodo);

module.exports = {
    todo
}