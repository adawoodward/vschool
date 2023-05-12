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

// Fake Data
const movies = [
    { title: "die hard", genre: "action", _id: uuidv4() },
    { title: "star wars IV", genre: "fantasy", _id: uuidv4() },
    { title: "lion king", genre: "fantasy", _id: uuidv4() },
    { title: "friday the 13th", genre: "horor", _id: uuidv4() }
]

    // 1. Endpoing (mount path)
    // 2. CallBack function
app.get("/movies", (req, res) => {
    // res.send("Hello World!")
    // res.send({name: "joe", age: 20})
    res.send(movies)
})
// app.put()
// app.post()
// app.delete()

app.post("/movies", (req, res) => {
    // console.log(req)
    const newMovie = req.body
    newMovie._id = uuidv4()
    movies.push(newMovie)
    res.send( `Successfully added ${newMovie.title} to the database!` )
})

    // 1: PORT 2: CB (CALLBACK FUNCTION)
app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})