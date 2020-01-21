const mongoose = require('mongoose')

const Schema = mongoose.Schema
const productSchema = new Schema({ 
    productName: {
        type: String,
        required: true
    },
    size: {
        type: String,
        enum : ['s','l','xl','xxl'],
        required: true
    },
    price : {
        type: Number,
        required: true
    },
    gender: {
        type:String,
        enum: ['male', 'female'],
        required: true
    },
    category:{
        type:Schema.Types.ObjectId,
       // required:true,
        ref:'Category'
    }
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product