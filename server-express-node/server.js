// First Express Server
const express = require("express")
const app = express()
const morgan = require('morgan')
const {v4: uuidv4} = require('uuid')
const mongoose = require('mongoose')

// Middleware (for every request) //
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

// Connect to DB //                          // name of the databse you want to name it
// mongoose.connect('mongodb://localhoset:27017/moviesdb', 
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex: true,
//         useFindAndModify: false
//     },
//     () => console.log("Connected to the DB")
// )

// mongoose.connect("mongodb://localhost:27017/test-db", () => console.log('connected to database'))
//         .catch(error => console.log(error))

mongoose.connect('mongodb://127.0.0.1:27017/moviesdb',{useNewUrlParser: true})
.then(()=> console.log("Connected to MongoDB"))
.catch(err => console.error(err));


// Routes //
app.use("/movies", require("./routes/movieRouter.js"))
app.use("/tvshows", require("./routes/tvshowRouter.js"))


// Our Own Custon Error Handling Middleware that handles errors regardless of where they occur in our routs
// Error Handler //
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

// Server Listen //
    // 1: PORT 2: CB (CALLBACK FUNCTION)
app.listen(7220, () => {
    console.log("The server is running on Port 7220")
})