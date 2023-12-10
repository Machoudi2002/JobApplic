import mongoose from "mongoose";

const Schema = mongoose.Schema

export const AdminSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})