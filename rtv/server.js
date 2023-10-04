const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const {expressjwt} = require('express-jwt')

process.env.SECRET

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect(
    'mongodb://localhost:27017/rtv',
    () => console.log('Connected to the DB')
)

app.use("/items", (req, res, next) => {
    console.log("THE ITEMS MIDDLEWARE WAS EXECUTED")
    next()
})

app.use("/items", (req, res, next) => {
    req.body = { name: "Rick" }
    next()
})

app.get("/items", (req, res, next) => {
    console.log("GET REQUEST RECIEVED")
    res.send(req.body)
})

// Routes //
app.use("/rtv", require("./routes/rtvRouter"))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(8300, () => {
    console.log("The server is running on Port 8300")
})