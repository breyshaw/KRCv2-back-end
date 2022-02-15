import mongoose from 'mongoose'

const Schema = mongoose.Schema

const reviewSchema = new Schema({
    author: {type: mongoose.Schema.Types.ObjectId, ref: "Profile"},
    username: String,
    content: String,
    rating: String,
}, {
    timestamps: true
})

const itemSchema = new Schema({
    author: {type: mongoose.Schema.Types.ObjectId, ref: "Profile"},
    title: String,
    imageUrl: String,
    videoUrl: String,
    type: String,
    price: String,
    info: String,
    reviews: [reviewSchema]
}, {
    timestamps: true
})

const Item = mongoose.model('Item', itemSchema)


export {
    Item,
}