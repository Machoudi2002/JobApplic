// db.js
import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/JobApp", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected successfully");
    } catch (err) {
        console.error("MongoDB connection error:", err);
    }
};

export default connectDB;
