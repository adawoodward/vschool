const express = require("express")
const app = express()
const {v4: uuidv4} = require('uuid')

app.use(express.json())

app.use("/bounty", require("./routes/bountyRouter.js"))

app.listen(8080, () => {
    console.log("The server is running on Port 8080")
})