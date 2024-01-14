require('dotenv').config()

const express = require("express")
const app = express()

app.use(express.json())

app.listen(process.env.PORT, () => {
    console.log(`Listening to port: ${process.env.PORT}`);
} )

const mongoose = require('mongoose')
const { user } = require('./routes/auth')
const { todo } = require('./routes/todo')
const url = process.env.MONGODB_URI;

mongoose.connect(url)

const db = mongoose.connection

db.once('open', () => console.log('connected to mongoose'))

//routes
app.use(user);
app.use(todo)
