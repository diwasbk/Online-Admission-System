import mongoose from "mongoose";
import { MONGO_DB_URL } from "../config/config";

const connectDB = async () => {
    try {
        mongoose.connect(MONGO_DB_URL);

        console.log("✅ Database connected successfully!");

    } catch (err: any) {

        console.log("❌ Database connection failed!", err.message);

        process.exit(1);
    };
};

export default connectDB;