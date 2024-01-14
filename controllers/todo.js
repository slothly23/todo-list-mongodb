const { Todo } = require("../models/todo")

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

module.exports = {
    addTodo
}