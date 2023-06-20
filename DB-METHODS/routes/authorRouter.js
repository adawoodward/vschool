const express = require('express')
const authorRouter = express.Router()
const Author = require("../models/author.js")

authorRouter.get("/", (req, res, next) => {
    Author.find()
    .then((authors) => res.status(200).send(authors))
    .catch((err) => {
        res.status(500)
        return next(err)
    })
})

authorRouter.post("/", (req, res, next) => {
    const newAuthor = new Author(req.body)
    newAuthor.save()
    .then((savedAuthor) => res.status(201).send(savedAuthor))
    .catch((err) => {
        res.status(500)
        return next(err)
        })
})

module.exports = authorRouter