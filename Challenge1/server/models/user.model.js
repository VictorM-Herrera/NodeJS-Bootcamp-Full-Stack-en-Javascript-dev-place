const mongose = require('mongoose');
const Schema = mongose.Schema;

const UserSchema = new Schema({
    email:{
        required: true,
        type:String
    },
    password:{
        required: true,
        type:String
    },
    nick:{
        required: true,
        type:String
    },
    telefono:{
        required: true,
        type:String
    }
})

module.exports = mongose.model('users', UserSchema)