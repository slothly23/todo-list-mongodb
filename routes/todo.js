const express = require("express")
const { addTodo, getTodo, getDetailTodo, updateTodo, deleteTodo } = require("../controllers/todo")
const app = express()

//express.Router() fungsinya ngebantu kita supaya routernya dibuat sesuai kategori
const todo = express.Router()

todo.post('/todos', addTodo);
todo.get('/todos', getTodo);
todo.get('/todos/:id', getDetailTodo);
todo.patch('/todos/:id', updateTodo);
todo.delete('/todos/:id', deleteTodo);

module.exports = {
    todo
}