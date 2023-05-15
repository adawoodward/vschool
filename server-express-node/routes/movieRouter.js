const express = require('express')
const movieRouter = express.Router()
const {v4: uuidv4} = require('uuid')

// Fake Data
const movies = [
    { title: "die hard", genre: "action", _id: uuidv4() },
    { title: "star wars IV", genre: "fantasy", _id: uuidv4() },
    { title: "lion king", genre: "fantasy", _id: uuidv4() },
    { title: "friday the 13th", genre: "horor", _id: uuidv4() }
]

//     // 1. Endpoing (mount path)
//     // 2. CallBack function
// // movieRouter.get("/movies", (req, res) => {
// movieRouter.get("/", (req, res) => {
//     // res.send("Hello World!")
//     // res.send({name: "joe", age: 20})
//     res.send(movies)
// })
//     // app.put()
//     // app.post()
//     // app.delete()
    
// movieRouter.post("/", (req, res) => {
//         // console.log(req)
//     const newMovie = req.body
//     newMovie._id = uuidv4()
//     movies.push(newMovie)
//     res.send( `Successfully added ${newMovie.title} to the database!` )
// })

movieRouter.route("/")
    .get((req, res) => {
        res.send(movies)
    })
    .post((req, res) => {
        // console.log(req)
        const newMovie = req.body
        newMovie._id = uuidv4()
        movies.push(newMovie)
        res.send( `Successfully added ${newMovie.title} to the database!` )
    })

module.exports = movieRouter