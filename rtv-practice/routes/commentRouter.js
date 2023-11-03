const express = require('express')
const commentRouter = express.Router()
const Comment = require('../models/comment.js')

commentRouter.get('/issues/:issueId', async (req, res, next) => {
    try {
        const comments = await Comment.find({ issue: req.params.issueId })
        return res.status(200).send(comments)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

commentRouter.post('/issues/:issueId', async (req, res, next) => {
    req.body.user = req.auth._id
    req.body.issue = req.params.issueId
    try {
        const newComment = new Comment(req.body);
        const savedComment = await newComment.save();
        return res.status(201).send(savedComment);
      } catch (err) {
        res.status(500);
        return next(err);
      }
})


module.exports = commentRouter