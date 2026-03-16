import mongoose, { Schema } from "mongoose";
import { signupType } from "../types/auth.types";

const userSchema: Schema = new mongoose.Schema<signupType>({
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    }
});

export interface IUser extends signupType, Document {
    _id: mongoose.Types.ObjectId,
    createdAt: Date;
    updatedAt: Date;
};

export const userModel = mongoose.model<IUser>("User", userSchema);