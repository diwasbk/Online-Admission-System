import { Request, Response } from "express";
import { admissionModel } from "../models/admission.model";
import { ageCalculator } from "../utils/common";

class AdmissionController {
    // Apply Admission
    applyAdmission = async (req: Request, res: Response) => {
        try {
            const admissionExist = await admissionModel.findOne({ email: req.body.email });

            if (admissionExist) {
                return res.status(409).send({
                    message: "Admission already applied!",
                    success: false
                });
            };

            const { first_name, last_name, dob, gender, email, phone, address, school_name, passed_year, gpa, applied_for, termsAgreed } = req.body;

            const calculatedAge = ageCalculator(dob);

            const result = await admissionModel.create({
                first_name: first_name,
                last_name: last_name,
                dob: dob,
                age: calculatedAge,
                gender: gender,
                email: email,
                phone: phone,
                address: address,
                school_name: school_name,
                passed_year: passed_year,
                gpa: gpa,
                applied_for: applied_for,
                termsAgreed: termsAgreed
            });

            res.status(201).send({
                message: "Admission applied successfully!",
                result: result,
                success: true
            });

        } catch (err: any) {
            console.log(err);

            res.status(500).send({
                message: err.response.message ? `Internal server error: ${err.message}` : "Internal server error.",
                success: false
            });
        };
    };

    // Get All Admissions
    getAllAdmission = async (req: Request, res: Response) => {
        try {
            const result = await admissionModel.find();

            res.status(200).send({
                message: result.length ? "Admissions fetched successfully!" : "No admission found!",
                result: result,
                success: true
            });

        } catch (err: any) {
            console.log(err);
            
            res.status(500).send({
                message: err.response?.message ? `Internal server error: ${err.message}` : "Internal server error.",
                success: false
            });
        };
    };
};

export default AdmissionController;