const express = require('express')
const authRouter = express.Router()
const User = require('../models/user.js')
const jwt = require('jsonwebtoken')

// Signup
authRouter.post("/signup", (req, res, next) => {
  User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
    if(err){
      res.status(500)
      return next(err)
    }
    if(user){
      res.status(403)
      return next(new Error("That username is already taken"))
    }
    const newUser = new User(req.body)
    newUser.save((err, savedUser) => {
      if(err){
        res.status(500)
        return next(err)
      }
      // withoutPassword will be called before the token gets signed in before the response gets sent,
      // Taking the password out and returning the mutated user object 
                            // payload,            // secret
      const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET)
      return res.status(201).send({ token, user: savedUser.withoutPassword() })
    })
  })
})

// Login
authRouter.post("/login", (req, res, next) => {
  User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
    if(err){
      res.status(500)
      return next(err)
    }
    if(!user){
      res.status(403)
      return next(new Error("Username or Password are incorrect"))
    }
                      // passwordAttempt, callback function
    user.checkPassword(req.body.password, (err, isMatch) => {
      if(err){
        res.status(403)
        return next(new Error("Username or Password are incorrect"))
      }
      if(!isMatch){
        res.status(403)
        return next(new Error("Username or Password are incorrect"))
      }
      const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
      return res.status(200).send({ token, user: user.withoutPassword() })
    })

    // if(req.body.password !== user.password){
    //   res.status(403)
    //   return next(new Error("Username or Password are incorrect"))
    // }

  })
})


module.exports = authRouter