const router = require('express').Router()
const CarousalImg = require('../models/CarousalImg');

// Create
router.post("/", async (req, res) => {
    const newCarousalImg = new CarousalImg(req.body);

    try {
        const savedCarousalImg = await newCarousalImg.save()
        res.status(201).json(savedCarousalImg)
    } catch (error) {
        res.status(500).json("error")
    }
})

// Get All
router.get("/find", async (req, res) => {
    try {
        const carousalImgs = await CarousalImg.find()
        console.log("carousalImgs called: ", carousalImgs)
        res.status(200).json(carousalImgs.reverse())
    } catch (error) {
        res.status(500).json("error")
    }
})

module.exports = router