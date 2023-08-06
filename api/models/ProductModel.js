const mongoose = require('mongoose')

const _photoSchema = new mongoose.Schema({
    photoUrl: { type: String, required: true },
    priority: { type: Number, required: true },
    enabled: { type: Boolean, default: true }
}, { timestamps: false })

const schema = new mongoose.Schema({
    productName: String,
    price: String,
    type: String,
    priority: { type: Number, required: true},
    createdAt: { type: Date, default: new Date(), immutable: true },
    updatedAt: { type: Date, default: new Date()},
    photos: { type: [_photoSchema], default: []}
})

const Products = mongoose.model("Products", schema)

module.exports = Products