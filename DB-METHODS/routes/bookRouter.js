const express = require('express')
const bookRouter = express.Router()
const Book = require("../models/book.js")

// Get all books
bookRouter.get("/", (req, res, next) => {
    Book.find()
    .then((books) => res.status(200).send(books))
    .catch((err) => {
        res.status(500)
        return next(err)
    })
})

// Get by Author
bookRouter.get("/:authorID", (req, res, next) => {
    Book.find({author: req.params.authorID})
    .then((books) => res.status(200).send(books))
    .catch((err) => {
        res.status(500)
        return next(err)
    })
})

// Add new book
bookRouter.post("/:authorID", (req, res, next) => {
    // console.log(req.params)
    req.body.author = req.params.authorID
    const newBook = new Book(req.body)
    newBook.save()
    .then((savedBook) => res.status(201).send(savedBook))
    .catch((err) => {
        res.status(500)
        return next(err)
        })
})

// like a book
bookRouter.put("/like/:bookID", (req, res, next) => {
    Book.findOneAndUpdate(
        { _id: req.params.bookID },
        { 
            $inc: { 
                likes: 1 
            },
            // $pull: {
            //     relatedTopics: "some Topic"
            // }
         },
        { new: true }
    )
    .then((updatedBook) => res.status(201).send(updatedBook))
    .catch((err) => {
        res.status(500)
        return next(err)
        }
    )
})

// find books by like range
bookRouter.get("/search/bylikes", (req, res, next) => {
    // Book.where("likes").gte(3).exec()
    Book.where("likes").gte(req.query.likeamount).exec()
    .then((books) => res.status(200).send(books))
    .catch((err) => {
        res.status(500)
        return next(err)
    })
})

module.exports = bookRouter