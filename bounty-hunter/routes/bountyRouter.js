const express = require('express')
// const uuid = require('react-uuid')
const bountyRouter = express.Router()
const Bounty = require('../models/bounty.js')
// const {v4: uuidv4} = require('uuid')

// const bounties = [
//     { firstName: "Boba", lastName: "Fett", living: true, bountyAmount: 350, type: "Sith", _id: uuidv4() },
//     { firstName: "Bo-Katan", lastName: "Kryze", living: true, bountyAmount: 250, type: "Jedi", _id: uuidv4() },
//     { firstName: "Ahsoka", lastName: "Tano", living: false, bountyAmount: 100, type: "Sith", _id: uuidv4() },
//     { firstName: "Jango", lastName: "Fett", living: false, bountyAmount: 200, type: "Jedi", _id: uuidv4() }
// ]

// Get All
bountyRouter.get("/", (req, res, next) => {
    // res.send(bounties)
    Bounty.find()
    .then((bounties) => res.status(200).send(bounties))
    .catch((err) => {
        res.status(500)
        return next(err)
    })
})

// Get by type //
bountyRouter.get("/search/type", (req, res, next) => {
    Bounty.find({type: req.query.type})
    .then((bounties) => res.status(200).send(bounties))
    .catch((err) => {
        res.status(500)
        return next(err)
    })
})

// Post One //
bountyRouter.post("/", (req, res, next) => {
    const newBounty = new Bounty(req.body)
    newBounty.save()
    .then((savedBounty) => res.status(201).send(savedBounty))
    .catch((err) => {
        res.status(500)
        return next(err)
    })
})

// Delete One //
bountyRouter.delete("/:bountyId", (req, res) => {
    Bounty.findOneAndDelete({_id: req.params.bountyId})
    .then((deletedItem) => res.status(200).send(`Successfully deleted item ${deletedItem.title} from the database!`))
    .catch((err) => {
        res.status(500)
        return next(err)
    })
})

// Update One //
bountyRouter.put("/:bountyId", (req, res, next) => {
    Bounty.findOneAndUpdate(
        {_id: req.params.bountyId},
        req.body,
        {new: true}
    )
    .then((updatedBounty) => res.status(201).send(updatedBounty))
    .catch((err) => {
        res.status(500)
        return next(err)
    })
})

// Post One
// bountyRouter.post("/", (req, res) => {
//     const newBounty = req.body
//     newBounty._id = uuidv4()
//     bounties.push(newBounty)
//     res.send(newBounty)
//     // res.send(`Successfully added ${newBounty.firstName} ${newBounty.lastName} to the database!`)
// })

// Get One
// bountyRouter.get("/:bountyId", (req, res) => {
//     const bountyId = req.params.bountyId
//     const foundBounty = bounties.find(item => item._id === bountyId)
//     res.send(foundBounty)
// })

// Delete One
// bountyRouter.delete("/:bountyId", (req, res) => {
//     const bountyId = req.params.bountyId
//     const bountyIndex = bounties.findIndex(item => item._id === bountyId)
//     bounties.splice(bountyIndex, 1)
//     res.send("Successfully deleted movie")
// })

// Update One
// bountyRouter.put("/:bountyId", (req, res) => {
//     const bountyId = req.params.bountyId
//     const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
//     const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
//     res.send(updatedBounty)
// })

// bountyRouter.get("/all", (req, res) => {
//     res.send(bounty)
// })

// bountyRouter.post("/new", (req, res) => {
//     const newPerson = req.body
//     newPerson._id = uuidv4()
//     bounty.push(newPerson)
//     res.send(`added ${newPerson.firstName}`)
// })

module.exports = bountyRouter