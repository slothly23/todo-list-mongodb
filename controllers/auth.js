const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const { User } = require("../models/user")


const saltRounds = 10

const register = async (req, res) => {
    try {
        const username = req.body.username
        const password = req.body.password

        const hashedPassword = bcrypt.hashSync(password, saltRounds)

        const newUser = {
            username,
            password: hashedPassword
        }

        await User.create(newUser);

        res.status(201).send('Success add data')
    } catch (err) {
        console.log(err.message);
        res.status(500).send({ message: 'Internal server error'})
    }
}

module.exports = {
    register
}