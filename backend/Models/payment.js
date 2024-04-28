import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    amount : {type : Number, required:true} , 
    option: {type : String , required:true}
})

const payment = mongoose.model('payment' , paymentSchema , 'payment');

export default payment;
