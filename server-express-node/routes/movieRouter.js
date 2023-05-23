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

// movieRouter.route("/")
//     .get((req, res) => {
//         res.send(movies)
//     })
//     .post((req, res) => {
//         // console.log(req)
//         const newMovie = req.body
//         newMovie._id = uuidv4()
//         movies.push(newMovie)
//         res.send( `Successfully added ${newMovie.title} to the database!` )
//     })

// Get All
movieRouter.get("/", (req, res) => {
    res.send(movies)
})

// Get One
movieRouter.get("/:movieId", (req, res) => {
    // console.log(req.params.movieId)
    const movieId = req.params.movieId
    const foundMovie = movies.find(movie => movie._id === movieId)
    res.send(foundMovie)
})

// Get by genre
movieRouter.get("/search/genre", (req, res) => {
    // console.log(req)
    const genre = req.query.genre
    const filteredMovies = movies.filter(movie => movie.genre === genre)
    res.send(filteredMovies)
})

// Post One
movieRouter.post("/", (req, res) => {
    const newMovie = req.body
    newMovie._id = uuidv4()
    movies.push(newMovie)
    res.send(`Successfully added ${newMovie.title} to the database!`)
})

// Delete One
movieRouter.delete("/:movieId", (req, res) => {
    const movieId = req.params.movieId
    const movieIndex = movies.findIndex(movie => movie._id === movieId)
    movies.splice(movieIndex, 1) // at the movieIndex remove 1 item
    res.send("Successfully deleted movie")
})

// Update One
movieRouter.put("/:movieId", (req, res) => {
    const movieId = req.params.movieId
    const movieIndex = movies.findIndex(movie => movie._id === movieId)
    const updatedMovie = Object.assign(movies[movieIndex], req.body)
    res.send(updatedMovie)
})


module.exports = movieRouter