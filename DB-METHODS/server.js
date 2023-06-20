const express = require("express")
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://127.0.0.1:27017/db-methods', {useNewUrlParser: true})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error(err))

app.use("/books", require("./routes/bookRouter.js"))
app.use("/authors", require("./routes/authorRouter.js"))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(8000, () => {
    console.log("The server is running on Port 8000")
})