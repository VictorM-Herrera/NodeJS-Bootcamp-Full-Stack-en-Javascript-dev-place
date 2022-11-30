const mongose = require('mongoose');
const Schema = mongose.Schema;

const ProductsSchema = new Schema({
    title:{
        required: true,
        type:String
    },
    price:{
        required: true,
        type:Number
    },
    img:{
        required: true,
        type:String
    },
    category:{
        required: true,
        type:String
    }
})

module.exports = mongose.model('products', ProductsSchema)