const express = require('express')
const reviewRouter = express.Router()
const Review = require('../models/review.js')

reviewRouter.get('/posts', async (req, res, next) => {
    try {
        const reviews = await Review.find().populate('user')
        return res.status(200).send(reviews) 
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

reviewRouter.get('/posts/:postId', async (req, res, next) => {
    try {
        const reviews = await Review.find({ post: req.params.postId }).populate('user'); // Ensure populating the user field here
        return res.status(200).send(reviews)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

// reviewRouter.post('/posts/:postId', async (req, res, next) => {
//     req.body.user = req.auth._id
//     req.body.post = req.params.postId
//     try {
//         const newReview = new Review(req.body);
//         const savedReview = await newReview.save();
//         return res.status(201).send(savedReview);
//       } catch (err) {
//         res.status(500);
//         return next(err);
//       }
// })

reviewRouter.delete('/:reviewId', async (req, res, next) => {
    try {
        const deletedReview = await Review.findOneAndDelete({
            _id: req.params.reviewId, 
            user: req.auth._id
        })
        return res.status(200).send(`Successfully deleted review: ${deletedReview.text}`)
    } catch (err) {
        res.status(500);
        return next(err);
    }
})



module.exports = reviewRouter