// First Express Server
const express = require("express")
const app = express()
const morgan = require('morgan')
const {v4: uuidv4} = require('uuid')
// const uuid = require("uuid/v4")

// Middleware (for every request)
// app.use("/", express.json()) // Anytime a request comes to forward slash, it will fire this express JSON. 
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

// Parses it, Takes the JSON, Turns into Javascript
// Looks for a request body, and turns it into "req.body"

// Fake Data
// const users = [
//     { name: "joe", age: 20 },
//     { name: "moe", age: 24 },
//     { name: "betty", age: 20 },
//     { name: "sarah", age: 20 },
//     { name: "mike", age: 20 }
// ]

app.use("/movies", require("./routes/movieRouter.js"))
app.use("/tvshows", require("./routes/tvshowRouter.js"))

    // 1: PORT 2: CB (CALLBACK FUNCTION)
app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})