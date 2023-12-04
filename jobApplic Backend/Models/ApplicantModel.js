import mongoose from "mongoose";

const Schema = mongoose.Schema

export const AppSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    linkedinURL : {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
    experience: {
        type: Number,
        required: true
    }


})