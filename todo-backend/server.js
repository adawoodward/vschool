const express = require("express")
const app = express()
const {v4: uuidv4} = require('uuid')

app.use(express.json())

app.use("/todo", require("./routes/todoRouter.js"))

app.listen(9090, () => {
    console.log("Ther server is running on Port 9090")
})