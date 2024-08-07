const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const {expressjwt} = require('express-jwt')
// const expressJwt = require('express-jwt'); // Corrected import

app.use(express.json())
app.use(morgan('dev'))

mongoose
  .connect('mongodb://localhost:27017/rtv-practice')
  .then(() => {
    console.log('Connected to the DB');
  })
  .catch((err) => {
    console.error('Error connecting to the DB:', err);
  });

app.use('/auth', require('./routes/authRouter.js'))
// app.use('/api/issue', expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }));
// app.use('/api/comment', expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }));
app.use('/api', expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }))
app.use('/api/issue', require('./routes/issueRouter.js'))
app.use('/api/comment', require('./routes/commentRouter.js'))


app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})


app.listen(5001, () => {
    console.log("The server is running on Port 5001")
})