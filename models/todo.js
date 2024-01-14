const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title: {type: String, required: true},
    description: String,
    isDone: { type: Boolean, default: false}
}, {
    timestamps: true, // menambahkan createdAt dan updatedAt
    collection: 'todos'
}) 

const Todo = mongoose.model('todos', todoSchema) // model yang dibuat akan digunakan untuk mengolah crud todo

module.exports = {
    Todo
}