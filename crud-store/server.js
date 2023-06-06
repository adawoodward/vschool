const express = require("express")
const app = express()
const morgan = require('morgan')
const {v4: uuidv4} = require('uuid')
const mongoose = require('mongoose')

app.use(express.json())
app.use(morgan('dev'))

app.use("/items", (req, res, next) => {
    console.log("THE ITEMS MIDDLEWARE WAS EXECUTED")
    next()
})

app.use("/items", (req, res, next) => {
    req.body = { name: "Ada" }
    next()
})

app.get("/items", (req, res, next) => {
    console.log("GET REQUEST RECIEVED")
    res.send(req.body)
})

mongoose.connect('mongodb://127.0.0.1:27017/inventorydb', {useNewUrlParser: true})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log(err))

app.use("/inventory", require("./routes/inventoryRouter.js"))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(9001, () => {
    console.log("The server is running on Port 9001")
})

