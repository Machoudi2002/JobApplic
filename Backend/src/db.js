// db.js
import mongoose from 'mongoose';
require("dotenv").config()

mongoose.Promise = global.Promise;

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected successfully");
    } catch (err) {
        console.error("MongoDB connection error:", err);
    }
};

export default connectDB;
