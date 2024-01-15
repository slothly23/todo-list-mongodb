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

// cari satu task untuk edit
const updateTodo = async (req, res) => {
    try {
        const { title, description, isDone } = req.body;
        const { id } = req.params;

        const todoData = {
            title,
            description,
            isDone
        };

        await Todo.findByIdAndUpdate(id, todoData);

        res.status(201).send({ message: 'Update todo success' })
    } catch (err) {
        console.log(err.message);
        res.status(500).send({ message: 'Internal server error' })
    }
}

// hapus task
const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;

        await Todo.findByIdAndDelete(id)

        res.status(200).send({ message: 'Delete todo success' })
    } catch (err) {
        console.log(err.message);
        res.status(500).send({ message: 'Internal server error' })
    }
}

//hapus semua task
const deleteAllTodo = async (req, res) => {
    try {
        await Todo.deleteMany({});
        res.status(200).send({ message: 'All todo deleted'})
    } catch (err) {
        console.log(err.message);
        res.status(500).send({ message: 'Internal server error' })
    }
}

module.exports = {
    addTodo,
    getTodo,
    getDetailTodo,
    updateTodo,
    deleteTodo,
    deleteAllTodo
}