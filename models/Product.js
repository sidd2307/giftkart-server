const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    desc: { type: String },
    img: [{ type: String }],
}, { timestamps: true })

module.exports = mongoose.model("Product", ProductSchema)