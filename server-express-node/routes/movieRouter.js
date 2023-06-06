const express = require('express')
const movieRouter = express.Router()
const Movie = require('../models/movie.js')
// const {v4: uuidv4} = require('uuid')

// Fake Data 
// const movies = [
//     { title: "die hard", genre: "action", _id: uuidv4() },
//     { title: "star wars IV", genre: "fantasy", _id: uuidv4() },
//     { title: "lion king", genre: "fantasy", _id: uuidv4() },
//     { title: "friday the 13th", genre: "horor", _id: uuidv4() }
// ]

//     // 1. Endpoint (mount path)
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
// movieRouter.get("/", (req, res) => {
//     res.status(200)
//     res.send(movies)
// })

// Old deprecated way //
// movieRouter.get("/", (req, res, next) => {
//     Movie.find((err, movies) => {
//         if(err) {
//             res.status(500)
//             return next(err)
//         }
//         return res.status(200).send(movies)
//     })
// })

// Get All //
movieRouter.get("/", (req, res, next) => {
    Movie.find()
    .then((movies) => res.status(200).send(movies))
    .catch((err) => {
        res.status(500)
        return next(err)
        })
})

// Get One
// movieRouter.get("/:movieId", (req, res, next) => {
//     // console.log(req.params.movieId)
//     const movieId = req.params.movieId
//     const foundMovie = movies.find(movie => movie._id === movieId)
//     // console.log(foundMovie)
//     if (!foundMovie) {
//         const error = new Error(`The item with id ${movieId} was not found.`)
//         // res.send(error)
//         res.status(500)
//         return next(error) // call the next middleware in line and since we're passing an error it won't correspond to any other routes
//     }
//     // res.status(200)
//     // res.send(foundMovie)
//     res.status(200).send(foundMovie)
// })


// Get by genre
// movieRouter.get("/search/genre", (req, res) => {
//     // console.log(req)
//     const genre = req.query.genre
//     if (!genre) {
//         const error = new Error("You must provide a genre.")
//         res.status(500)
//         return next(error)
//     }
//     const filteredMovies = movies.filter(movie => movie.genre === genre)
//     // res.send(filteredMovies)
//     res.status(200).send(filteredMovies)
// })

// Get by genre //
movieRouter.get("/search/genre", (req, res, next) => {
    Movie.find({genre: req.query.genre})
    .then((movies) => res.status(200).send(movies))
    .catch((err) => {
        res.status(500)
        return next(err)
    })
})

// Post One
// movieRouter.post("/", (req, res) => {
//     const newMovie = req.body
//     newMovie._id = uuidv4()
//     movies.push(newMovie)
//     // res.send(`Successfully added ${newMovie.title} to the database!`)
//     // res.send(newMovie) // so that we can send this newMovie in state and make it appear up on the DOM immediately
//     res.status(201).send(newMovie)
// })

// Old deprecated way 
// movieRouter.post("/", (req, res, next) => {
//     const newMovie = new Movie(req.body)
//     newMovie.save((err, savedMovie) => {
//         if (err) {
//         res.status(500)
//         return next(err)
//         }
//         return res.status(201).send(savedMovie)
//     })
// })

// Post One // 
movieRouter.post("/", (req, res, next) => {
    const newMovie = new Movie(req.body)
    newMovie.save()
    .then((savedMovie) => res.status(201).send(savedMovie))
    .catch((err) => {
        res.status(500)
        return next(err)
        })
})

// Delete One
// movieRouter.delete("/:movieId", (req, res) => {
//     const movieId = req.params.movieId
//     const movieIndex = movies.findIndex(movie => movie._id === movieId)
//     movies.splice(movieIndex, 1) // at the movieIndex remove 1 item
//     res.send("Successfully deleted movie")
// })

// Delete One Old deperecated way
// movieRouter.delete("/:movieId", (req, res) => {
//     Movie.findOneAndDelete({_id: req.params.movieId}, (err, deletedItem) => {
//         if (err) {
//             res.status(500)
//             return next(err)
//         }
//         return res.status(200).send(`Successfully deleted item ${deletedItem.title} from the database!`)
//     })
// })

// Delete One //
movieRouter.delete("/:movieId", (req, res) => {
    Movie.findOneAndDelete({_id: req.params.movieId})
    .then((deletedItem) => res.status(200).send(`Successfully deleted item ${deletedItem.title} from the database!`))
    .catch((err) => {
        res.status(500)
        return next(err)
    })
})

// Update One
// movieRouter.put("/:movieId", (req, res) => {
//     const movieId = req.params.movieId
//     const movieIndex = movies.findIndex(movie => movie._id === movieId)
//     const updatedMovie = Object.assign(movies[movieIndex], req.body)
//     // res.send(updatedMovie)
//     res.status(201).send(updatedMovie)
// })

// Update One //
movieRouter.put("/:movieId", (req, res, next) => {
    Movie.findOneAndUpdate(
        {_id: req.params.movieId},  // find this one to update
        req.body,     // update the object with this data
        {new: true},  // send back the updated version please
    )
    .then((updatedMovie) => res.status(201).send(updatedMovie))
    .catch((err) => {
        res.status(500)
        return next(err)
    })
})

module.exports = movieRouter