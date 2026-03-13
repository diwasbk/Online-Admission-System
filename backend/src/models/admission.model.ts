import mongoose, { Schema } from "mongoose";
import { admissionType } from "../types/admission.types";

const admissionSchema: Schema = new mongoose.Schema<admissionType>({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        enum: ["male", "female", "others"],
        default: "male"
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    schoolName: {
        type: String,
        required: true
    },
    passedYear: {
        type: String,
        required: true
    },
    gpa: {
        type: Number,
        required: true,
        min: 0
    },
    appliedFor: {
        type: String,
        enum: ["science", "management", "law"],
        default: "science"
    },
    termsAgreed: {
        type: Boolean,
        required: true
    }
}, { timestamps: true });

export interface IAdmission extends admissionType, Document {
    _id: mongoose.Types.ObjectId,
    createdAt: Date,
    updatedAt: Date
};

export const admissionModel = mongoose.model<IAdmission>("Admission", admissionSchema);