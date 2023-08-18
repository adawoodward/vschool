const express = require("express")
const app = express()
const morgan = require('morgan')
const {v4: uuidv4} = require('uuid')
const mongoose = require('mongoose')

app.use(express.json()) // Looks for a request body, and turns it into 'req.body'
app.use(morgan('dev')) // Logs requests to the console

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

mongoose.connect('mongodb://127.0.0.1:27017/makeupdb',{useNewUrlParser: true})
.then(()=> console.log("Connected to MongoDB"))
.catch(err => console.error(err));


// Routes //
app.use("/makeup", require("./routes/makeupRouter"))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(7300, () => {
    console.log("The server is running on Port 7300")
})