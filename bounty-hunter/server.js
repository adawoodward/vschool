const express = require("express")
const app = express()
const {v4: uuidv4} = require('uuid')
const morgan = require('morgan')
const mongoose = require('mongoose')

app.use(express.json())
app.use(morgan('dev'))


app.use("/items", (req, res, next) => {
    console.log("THE ITEMS MIDDLEWARE WAS EXECUTED")
    next()
})

app.use("/items", (req, res, next) => {
    req.body = { name: "Rick" }
    next()
})

app.get("/items", (req, res, next) => {
    console.log("GET REQUEST RECIEVED")
    res.send(req.body)
})


mongoose.connect('mongodb://127.0.0.1:27017/bountydb', {useNewUrlParser: true})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error(err))

app.use("/bounty", require("./routes/bountyRouter.js"))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message}) 
})

app.listen(8080, () => {
    console.log("The server is running on Port 8080")
})