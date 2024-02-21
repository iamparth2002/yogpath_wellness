const mongoose = require('mongoose')
const {Schema,model} = mongoose;

const BookingSchema = new Schema({
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
    date:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    user:{
        type:Schema.Types.ObjectId,ref:'User',
        required:true
    }
})

const BookingModel = model('Booking',BookingSchema)
module.exports = BookingModel;