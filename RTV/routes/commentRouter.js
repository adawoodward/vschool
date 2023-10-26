const express = require('express')
const commentRouter = express.Router()
// const Comment = require('../models/comment.js')
const User = require('../models/user.js')
const jwt = require('jsonwebtoken')

commentRouter.post('/:issueId', (req, res, next) => {
    req.body.user = req.auth._id; // Attach the user who posted the comment
    req.body.issue = req.params.issueId; // Link the comment to the issue
    const newComment = new Comment(req.body);

    newComment.save((err, savedComment) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.status(201).send(savedComment);
    });
});

module.exports = commentRouter