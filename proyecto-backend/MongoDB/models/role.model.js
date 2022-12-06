const mongose = require('mongoose');
const Schema = mongose.Schema;

const Role = new Schema({
    name:{
        type:String,
        required: true
    },
})