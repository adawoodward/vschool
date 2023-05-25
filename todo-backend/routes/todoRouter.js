const express = require('express')
const todoRouter = express.Router()
const {v4: uuidv4} = require('uuid')

const todo = [
    { title: "cleaning", _id: uuidv4() },
    { title: "making dinner", _id: uuidv4() },
    { title: "droping off kids", _id: uuidv4() },
    { title: "laundry", _id: uuidv4() },
    { title: "folding laundry", _id: uuidv4() },
]

// Get All
todoRouter.get("/", (req, res) => {
    res.send(todo)
})

// Get One
todoRouter.get("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const foundTodo = todo.find(item => item._id === todoId)
    res.send(foundTodo)
})

// Post One
todoRouter.post("/", (req, res) => {
    const newTodo = req.body
    newTodo._id = uuidv4()
    todo.push(newTodo)
    res.send(`Successfully added ${newTodo.title} to the database`)
})

// Delete One
todoRouter.delete("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todo.findIndex(item => item._id === todoId)
    todo.splice(todoIndex, 1)
    res.send("Successfully deleted movie")
})

// Update One
todoRouter.put("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todo.findIndex(item => item._id === todoId)
    const updatedTodo = Object.assign(todo[todoIndex], req.body)
    res.send(updatedTodo)
})

module.exports = todoRouter