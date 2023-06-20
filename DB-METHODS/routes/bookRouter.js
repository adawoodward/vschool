const express = require('express')
const bookRouter = express.Router()
const Book = require("../models/book.js")

bookRouter.get("/", (req, res, next) => {
    Book.find()
    .then((books) => res.status(200).send(books))
    .catch((err) => {
        res.status(500)
        return next(err)
    })
})

bookRouter.get("/:authorID", (req, res, next) => {
    Book.find({author: req.params.authorID})
    .then((books) => res.status(200).send(books))
    .catch((err) => {
        res.status(500)
        return next(err)
    })
})

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

module.exports = bookRouter