const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const { User } = require("../models/user")

// const userModel = require("../models/user")

const secret_key = process.env.JWT_TOKEN
const saltRounds = 10

// register new user
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

//user login
const login = async (req, res) => {
    try {
        const username = req.body.username
        const password = req.body.password
    
        const userInDB = await User.findOne({username: req.body.username});
    
        if(!userInDB) {
            return res.status(401).send('Username not found')
        }
    
        //membandingkan hash password dari database dengan text password
        const isPasswordMatch = await bcrypt.compare(password, userInDB.password)
        if(isPasswordMatch) {
            // Create a JWT token with user information
            const token = jwt.sign(username, secret_key)
        
            // Send the token to the user
            res.json({ token })
        } else {
            return res.status(401).send('Wrong password')
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).send({ message: 'Internal server error'})
    }
}

module.exports = {
    login,
    register
}