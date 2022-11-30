const mongose = require('mongoose');
const Schema = mongose.Schema;

const Recurso = new Schema({
    idRecurso:{
        type: Number,
        unique:true
    },
    mensaje:{
        type:String,
    }
})

module.exports = mongose.model('recursos', Recurso);