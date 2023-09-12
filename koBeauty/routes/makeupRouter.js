const express = require('express')
const makeupRouter = express.Router()
const Makeup = require('../models/makeup')
const ObjectId = require('mongodb').ObjectId;

// const id = new ObjectId(objectIdString);
// const ObjectId = require('mongodb').ObjectId
// const { ObjectId } = require('mongodb')
// const id = new ObjectId()
// console.log(id)

makeupRouter.get("/", (req, res, next) => {
    Makeup.find()
    .then((makeups) => res.status(200).send(makeups))
    .catch((err) => {
        res.status(500)
        return next(err)
    })
})

// makeupRouter.get("/makeup/:id", (req, res, next) => {
    makeupRouter.get("/:id", (req, res, next) => {
        // const id = req.params.id

        // Makeup.findById(req.params.id)
        console.log(req.params)
        console.log(req.params.id)
        Makeup.findOne({_id: req.params.id})
        .then(product => 
        {
            console.log(product)
            console.log(product._id)
            res.status(200).send(product)
            // res.status(200).json(product)
            // res.status(200).json({item})
        })
        .catch((err) => {
            res.status(500)
            return next(err)
        })


        // const { id } = req.params
        // // Makeup.findOne({_id: req.params.id})
        // // Makeup.findOne({ _id: id })
        // // Makeup.findById({_id})
        // // Makeup.find({ _id: req.params.id })
        // Makeup.findById({_id: id})
        // .then(product => {
        //     console.log(product)
        //     res.status(200).json({product})
        // }) 
        // .catch((err) => {
        //     res.status(500)
        //     return next(err)
        // })
        // console.log(product.id)

        // Makeup.findById({_id})
      
        // const product = await Makeup.findById({ _id: req.params.id })
        // res.json(product)

        // Makeup.find({ _id: mongoose.ObjectId(id) })
        // Makeup.findOne({ _id: id })

        // const requestedId = req.params.id
        // const requestedId = req.params

        // Makeup.findById({_id: requestedId})
        // .then((item) => res.status(200).send(item))
        // .catch((err) => {
        //     res.status(500)
        //     return next(err)
        // })
        // console.log(requestedId)
        // console.log(id)


        // works
        // const { id } = req.params
        // await Makeup.findById({_id: id})
    })

// makeupRouter.get("/makeup/:id", (req, res, next) => {
//     // Makeup.findById(req.params.id)
//     // console.log(req.params)
//     // const id = req.params.id
//     // console.log(id)
//     // console.log(ObjectId)

//     // const query = { _id: ObjectId(_id) }
//     // console.log(query)

//     Makeup.findById(req.params.id)
//     .then((makeups) => res.status(200).send(makeups))
//     .catch((err) => {
//         res.status(500)
//         return next(err)
//     })
// })



// makeupRouter.get("/makeup", (req, res, next) => {
//     Makeup.findById()
//     .then((makeups) => res.status(200).send(makeups))
//     .catch((err) => {
//         res.status(500)
//         return next(err)
//     })
// })

makeupRouter.get("/search/brand", (req, res, next) => {
    Makeup.find({brand: req.query.brand})
    .then((makeups) => res.status(200).send(makeups))
    .catch((err) => {
        res.status(500)
        return next(err)
    })
})

makeupRouter.get("/search/category", (req, res, next) => {
    Makeup.find({category: req.query.category})
    .then((makeups) => res.status(200).send(makeups))
    .catch((err) => {
        res.status(500)
        return next(err)
    })
})

makeupRouter.post("/", (req, res, next) => {
    const newMakeup = new Makeup(req.body)
    newMakeup.save()
    .then((savedMakeup) => res.status(201).send(savedMakeup))
    .catch((err) => {
        res.status(500)
        return next(err)
    })
})

makeupRouter.delete("/:id", (req, res) => {
    Makeup.findOneAndDelete({_id: req.params.id})
    .then((deletedItem) => res.status(200).send(`Successfully deleted ${deletedItem.title} from the database!`))
    .catch((err) => {
        res.status(500)
        return next(err)
    })
})

makeupRouter.put("/:id", (req, res, next) => {
    Makeup.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true}
    )
    .then((updatedMakeup) => res.status(201).send(updatedMakeup))
    .catch((err) => {
        res.status(500)
        return next(err)
    })
})

module.exports = makeupRouter