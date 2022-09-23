const mongoose = require('mongoose');

const CarousalImgSchema = new mongoose.Schema({
    img: { type: String },
}, { timestamps: true })

module.exports = mongoose.model("CarousalImg", CarousalImgSchema)