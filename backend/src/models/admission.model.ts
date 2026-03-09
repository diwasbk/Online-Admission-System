import mongoose, { Schema } from "mongoose";
import { admissionType } from "../types/admission.types";

const admissionSchema: Schema = new mongoose.Schema<admissionType>({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
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
    school_name: {
        type: String,
        required: true
    },
    passed_year: {
        type: String,
        required: true
    },
    gpa: {
        type: Number,
        required: true,
        min: 0
    },
    applied_for: {
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