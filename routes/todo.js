const express = require("express")
const { addTodo, getTodo, getDetailTodo, updateTodo, deleteTodo, deleteAllTodo } = require("../controllers/todo");
const { verifyToken } = require("../middlewares/auth");
const app = express()

//express.Router() fungsinya ngebantu kita supaya routernya dibuat sesuai kategori
const todo = express.Router()

todo.post('/todos', verifyToken, addTodo);
todo.get('/todos', verifyToken, getTodo);
todo.get('/todos/:id', verifyToken, getDetailTodo);
todo.patch('/todos/:id', verifyToken, updateTodo);
todo.delete('/todos/:id', verifyToken, deleteTodo);
todo.delete('/todos', verifyToken, deleteAllTodo);

module.exports = {
    todo
}