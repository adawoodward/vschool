const express = require('express')
const inventoryRouter = express.Router()
const Inventory = require("../models/inventory.js")

inventoryRouter.get("/", (req, res, next) => {
    Inventory.find()
    .then((inventory) => res.status(200).send(inventory))
    .catch((err) => {
        res.status(500)
        return next(err)
    })
})

inventoryRouter.get("/search/category", (req, res, next) => {
    Inventory.find({category: req.query.category})
    .then((inventory) => res.status(200).send(inventory))
    .catch((err) => {
        res.status(500)
        return next(err)
    })
})

inventoryRouter.post("/", (req, res, next) => {
    const newInventory = new Inventory(req.body)
    newInventory.save()
    .then((savedInventory) => res.status(201).send(savedInventory))
    .catch((err) => {
        res.status(500)
        return next(err)
    })
})

inventoryRouter.delete("/:inventoryId", (req, res) => {
    Inventory.findOneAndDelete({_id: req.params.inventoryId})
    .then((deletedItem) => res.status(200).send(`Successfully deleted item ${deletedItem.title} from the database!`))
    .catch((err) => {
        res.status(500)
        return next(err)
    })
})

inventoryRouter.put("/:inventoryId", (req, res, next) => {
    Inventory.findOneAndUpdate(
        {_id: req.params.inventoryId},
        req.body,
        {new: true}
    )
    .then((updatedInventory) => res.status(201).send(updatedInventory))
    .catch((err) => {
        res.status(500)
        return next(err)
    })
})

module.exports = inventoryRouter