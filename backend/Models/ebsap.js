import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true }, // Add unique constraint
    password: { type: String, required: true }
});

const ebsap = mongoose.model('ebsap', userSchema, 'ebsap');

export default ebsap;
