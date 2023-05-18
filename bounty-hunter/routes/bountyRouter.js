const express = require('express')
// const uuid = require('react-uuid')
const bountyRouter = express.Router()
const {v4: uuidv4} = require('uuid')

const bounty = [
    { firstName: "Boba", lastName: "Fett", living: true, bountyAmount: 350, type: "Sith", _id: uuidv4() },
    { firstName: "Bo-Katan", lastName: "Kryze", living: true, bountyAmount: 250, type: "Jedi", _id: uuidv4() },
    { firstName: "Ahsoka", lastName: "Tano", living: false, bountyAmount: 100, type: "Sith", _id: uuidv4() },
    { firstName: "Jango", lastName: "Fett", living: false, bountyAmount: 200, type: "Jedi", _id: uuidv4() }
]

bountyRouter.get("/", (req, res) => {
    res.send(bounty)
})

bountyRouter.post("/", (req, res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounty.push(newBounty)
    res.send(`Successfully added ${newBounty.firstName} ${newBounty.lastName} to the database!`)
})

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