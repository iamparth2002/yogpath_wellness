const mongoose = require('mongoose')
const {Schema,model} = mongoose;

const ExerciseSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    trainer:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    rating:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})

const ExerciseModel = model('Exercise',ExerciseSchema)
module.exports = ExerciseModel;