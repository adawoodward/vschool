const express = require("express");
const postRouter = express.Router();
const Post = require('../models/post.js');

// Get All Posts
postRouter.get("/", async (req, res, next) => {
  try {
    const posts = await Post.find().populate('user'); // Add populate to also get user details
    return res.status(200).send(posts);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

// Get Posts by ID
postRouter.get('/posts/:postId', (req, res, next) => {
  console.log(req.params)
  console.log(req.params.postId)
  Post.findOne({_id: req.params.postId}) // find the post matching the postId
  .then(item => 
  {
    console.log(item)
    console.log(item._id)
    res.status(200).send(item)
  })
  .catch((err) => {
    res.status(500)
    return next(err)
  })
})

// Get posts by user id
postRouter.get("/user", async (req, res, next) => {
  try {
    console.log('User ID: ', req.auth._id)
    const posts = await Post.find({ user: req.auth._id });
    console.log(posts)
    return res.status(200).send(posts);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

// Add new Post
postRouter.post("/", async (req, res, next) => {
  req.body.user = req.auth._id;
  try {
    const newPost = new Post(req.body);
    const savedPost = await newPost.save();
    return res.status(201).send(savedPost);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

// Delete Post
postRouter.delete("/:postId", async (req, res, next) => {
  try {
    const deletedPost = await Post.findOneAndDelete({ _id: req.params.postId, user: req.auth._id });
    if (!deletedPost) {
      return res.status(404).send("Issue not found")
    }
    return res.status(200).send(`Successfully delete issue: ${deletedPost.title}`);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

// Update Post
postRouter.put("/:postId", async (req, res, next) => {
  try {
    const updatedPost = await Post.findOneAndUpdate({ _id: req.params.postId, user: req.auth._id }, req.body, { new: true });
    return res.status(201).send(updatedPost);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

// Upvote post 
postRouter.put('/upvote/:postId', async (req, res, next) => {
  try {                            // to update the post's likedUsers and dislikedUsers arrays based 
    const updatedPost = await Post.findOneAndUpdate(
      { _id: req.params.postId },
      {
        $addToSet: { likedUsers: req.auth._id },
        $pull: { dislikedUsers: req.auth._id }
      },
      { new: true }
    );
    return res.status(201).send(updatedPost);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

// Downvote post
postRouter.put('/downVote/:postId', async (req, res, next) => {
  try {
    const updatedPost = await Post.findOneAndUpdate(
      { _id: req.params.postId },
      {
        $addToSet: { dislikedUsers: req.auth._id },
        $pull: { likedUsers: req.auth._id }
      },
      { new: true }
    );
    return res.status(201).send(updatedPost);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

postRouter.get("/search/category", (req, res, next) => {
  Post.find({ category: req.query.category })
  .then((posts) => res.status(200).send(posts))
  .catch((err) => {
    res.status(500)
    return next(err)
  })
})

// postRouter.get("/search/brand", (req, res, next) => {
//   Post.find({ brand: req.query.brand })
//     .then((posts) => res.status(200).send(posts))
//     .catch((err) => {
//       res.status(500);
//       return next(err);
//     });
// });

postRouter.get("/search/brand", async (req, res, next) => {
  try {
    const brandQuery = req.query.brand;
    const regexQuery = new RegExp(`^${brandQuery}$`, 'i'); // 'i' for case-insensitive

    const posts = await Post.find({ brand: regexQuery });
    return res.status(200).send(posts);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

postRouter.get('/upvote/:postId', async (req, res, next) => {
  console.log(req.params)
  console.log(req.params.postId)
  Post.findOne({_id: req.params.postId})
  .then(item => 
  {
    console.log(item)
    console.log(item._id)
    res.status(200).send(item)
  })
  .catch((err) => {
    res.status(500)
    return next(err)
  })
});

module.exports = postRouter;
