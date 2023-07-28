const express = require('express')
const makeupRouter = express.Router()
const Makeup = require('../models/makeup')

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

makeupRouter.delete("/:makeupId", (req, res) => {
    Makeup.findOneAndDelete({_id: req.params.makeupId})
    .then((deletedItem) => res.status(200).send(`Successfully deleted ${deletedItem.title} from the database!`))
    .catch((err) => {
        res.status(500)
        return next(err)
    })
})

makeupRouter.put("/:makeupId", (req, res, next) => {
    Makeup.findOneAndUpdate(
        {_id: req.params.makeupId},
        req.body,
        {new: true}
    )
    .then((updatedMakeup) => res.status(201).send(updatedMakeup))
    .catch((err) => {
        res.status(500)
        return next(err)
    })
})

module.exports = makeupRouter