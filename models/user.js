const mongoose = require('mongoose')

Schema = mongoose.Schema;

// User Schema
const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true, // menambahkan createdAt dan updatedAt
    collection: 'users'
}) 

const User = mongoose.model('users', userSchema) 

module.exports = {
    User
}