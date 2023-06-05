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
    res.status(200)
    res.send(movies)
})

// Get One
movieRouter.get("/:movieId", (req, res, next) => {
    // console.log(req.params.movieId)
    const movieId = req.params.movieId
    const foundMovie = movies.find(movie => movie._id === movieId)
    // console.log(foundMovie)
    if (!foundMovie) {
        const error = new Error(`The item with id ${movieId} was not found.`)
        // res.send(error)
        res.status(500)
        return next(error) // call the next middleware in line and since we're passing an error it won't correspond to any other routes
    }
    // res.status(200)
    // res.send(foundMovie)
    res.status(200).send(foundMovie)
})

// Get by genre
movieRouter.get("/search/genre", (req, res) => {
    // console.log(req)
    const genre = req.query.genre
    if (!genre) {
        const error = new Error("You must provide a genre.")
        res.status(500)
        return next(error)
    }
    const filteredMovies = movies.filter(movie => movie.genre === genre)
    // res.send(filteredMovies)
    res.status(200).send(filteredMovies)
})

// Post One
movieRouter.post("/", (req, res) => {
    const newMovie = req.body
    newMovie._id = uuidv4()
    movies.push(newMovie)
    // res.send(`Successfully added ${newMovie.title} to the database!`)
    // res.send(newMovie) // so that we can send this newMovie in state and make it appear up on the DOM immediately
    res.status(201).send(newMovie)
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
    // res.send(updatedMovie)
    res.status(201).send(updatedMovie)
})


module.exports = movieRouter