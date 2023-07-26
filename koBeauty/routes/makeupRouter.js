const express = require('express')
const makeupRouter = express.Router()
const Makeup = require('../models/makeup.js')

makeupRouter.get("/", (req, res, next) => {
    Makeup.find()
    .then((makeups) => res.status(200).send(makeups))
    .catch((err) => {
        res.status(500)
        return next(err)
    })
})

makeupRouter.get("/search/brand", (req, res, next) => {
    Makeup.find({brand: req.query.brand})
    .then((makeups) => res.status(200).send(makeups))
    .catch((err) => {
        res.status(500)
        return next(err)
    })
})

makeupRouter.get("/search/category", (req, res, next) => {
    Makeup.find({category: req.query.category})
    .then((makeups) => res.status(200).send(makeups))
    .catch((err) => {
        res.status(500)
        return next(err)
    })
})

makeupRouter.post("/", (req, res, next) => {
    const newMakeup = new Makeup(req.body)
    newMakeup.save()
    .then((savedMakeup) => res.status(201).send(savedMakeup))
    .catch((err) => {
        res.status(500)
        return next(err)
    })
})

module.exports = makeupRouter