import mongoose from "mongoose";
import { AppSchema } from "./ApplicantModel";

const Schema = mongoose.Schema

const currentDate = new Date();

const formattedDate = currentDate.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
});

export const JobSchema = new Schema({
    title: {
        type: String,
        required: true,
        default: ""
    },
    description: {
        type: String,
        required: true,
        
    },
    date: {
        type: String,
        default: formattedDate
    },
    applications: {
        type: [AppSchema],
        required: true,
        default: []
    }
})