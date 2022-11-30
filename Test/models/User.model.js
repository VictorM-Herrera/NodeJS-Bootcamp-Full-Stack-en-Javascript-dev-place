
const mongose = require('mongoose');
const Schema = mongose.Schema;

const UserSchema = new Schema({
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique:true
    },
    password:{
        type: String,
        required: true
    },
    rol:{
        type: String,
        required: true
    },
})

module.exports = mongose.model('users', UserSchema);
