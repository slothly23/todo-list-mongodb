const { Todo } = require("../models/todo")

// tambah task baru
const addTodo = async (req, res) => {
    try {
        const { title, description } = req.body;

        const newTodoData = {
            title,
            description,
            isDone: false
        }

        await Todo.create(newTodoData);

        res.status(201).send({ message: 'Add todo success'})
    } catch (err) {
        console.log(err.message);
        res.status(500).send({ message: 'Internal server error'})
    }
}

// tampilkan semua task
const getTodo = async (req, res) => {
    try {
        const data = await Todo.find()

        res.status(200).send(data)
    } catch(err) {
        console.log(err.message)
        res.status(500).send({ message: 'internal server error' })
    }
}

// menampilkan detail sebuah task
const getDetailTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Todo.findById(id)

        res.status(200).send(data)
    } catch (err) {
        console.log(err.message);
        res.status(500).send({ message: 'internal server error' })
    }
}

module.exports = {
    addTodo,
    getTodo,
    getDetailTodo
}