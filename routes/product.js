const router = require('express').Router()
const Product = require('../models/Product');

// Create
router.post("/", async (req, res) => {
    const newProduct = new Product(req.body);

    try {
        const savedProduct = await newProduct.save()
        res.status(201).json(savedProduct)
    } catch (error) {
        res.status(500).json("error")
    }
})

// Get
router.get("/find/:name", async (req, res) => {
    console.log(req.params.name)
    var regex = new RegExp(req.params.name, "i")
        , query = { title: regex };
    try {
        const products = await Product.find(query, { limit: 10 })
            .populate('title')
            .populate('desc')
            .populate('img')
            .exec();
        // console.log(products)
        res.status(200).json(products.reverse())
    } catch (error) {
        res.status(500).json("error")
    }
})

// Get All
router.get("/find", async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json(products.reverse())
    } catch (error) {
        res.status(500).json("error")
    }
})

module.exports = router