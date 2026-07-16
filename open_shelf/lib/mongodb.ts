
import mongoose from "mongoose";

const MONGODB_URI : string = process.env.MONGODB_URI!

if(!MONGODB_URI){
 throw new Error("Please define MONGODB_URI in .env.local")
}

let isConnected = false

export default async function connectDB() {
    if(isConnected) return
    try {
        await mongoose.connect(MONGODB_URI)
        isConnected = true
        console.log("MongoDB Connected");
    } catch (error) {
        console.error(error);
        throw new Error("Database connection failed")
    }
}