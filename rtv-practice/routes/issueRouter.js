const express = require("express");
const issueRouter = express.Router();
const Issue = require('../models/issue.js');

// Get All Issues
issueRouter.get("/", async (req, res, next) => {
  try {
    const issues = await Issue.find();
    return res.status(200).send(issues);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

issueRouter.get('/issues/:issueId', (req, res, next) => {
  console.log(req.params)
  console.log(req.params.issueId)
  Issue.findOne({_id: req.params.issueId})
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

// Get issues by user id
issueRouter.get("/user", async (req, res, next) => {
  try {
    const issues = await Issue.find({ user: req.auth._id });
    return res.status(200).send(issues);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

// Add new Issue
issueRouter.post("/", async (req, res, next) => {
  req.body.user = req.auth._id;
  try {
    const newIssue = new Issue(req.body);
    const savedIssue = await newIssue.save();
    return res.status(201).send(savedIssue);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

// Delete Issue
issueRouter.delete("/:issueId", async (req, res, next) => {
  try {
    const deletedIssue = await Issue.findOneAndDelete({ _id: req.params.issueId, user: req.auth._id });
    return res.status(200).send(`Successfully delete issue: ${deletedIssue.title}`);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

// Update Issue
issueRouter.put("/:issueId", async (req, res, next) => {
  try {
    const updatedIssue = await Issue.findOneAndUpdate({ _id: req.params.issueId, user: req.auth._id }, req.body, { new: true });
    return res.status(201).send(updatedIssue);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

issueRouter.put('/upvote/:issueId', async (req, res, next) => {
  try {
    const updatedIssue = await Issue.findOneAndUpdate(
      { _id: req.params.issueId },
      {
        $addToSet: { likedUsers: req.auth._id },
        $pull: { dislikedUsers: req.auth._id }
      },
      { new: true }
    );
    return res.status(201).send(updatedIssue);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

issueRouter.put('/downVote/:issueId', async (req, res, next) => {
  try {
    const updatedIssue = await Issue.findOneAndUpdate(
      { _id: req.params.issueId },
      {
        $addToSet: { dislikedUsers: req.auth._id },
        $pull: { likedUsers: req.auth._id }
      },
      { new: true }
    );
    return res.status(201).send(updatedIssue);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

module.exports = issueRouter;
