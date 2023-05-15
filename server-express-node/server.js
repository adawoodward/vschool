// First Express Server
const express = require("express")
const app = express()
const {v4: uuidv4} = require('uuid')
// const uuid = require("uuid/v4")

// Middleware (for every request)
// app.use("/", express.json()) // Anytime a request comes to forward slash, it will fire this express JSON. 
app.use(express.json()) 

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