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

    // Get Admission By Admission ID
    getAllAdmissionByAdmissionId = async (req: Request, res: Response) => {
        try {
            const result = await admissionModel.findOne({ _id: req.params.admissionId });

            if (!result) {
                return res.status(404).send({
                    message: "Admission not found!",
                    success: false
                });
            };

            res.status(200).send({
                message: "Admission fetched successfully!",
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

    // Update Admission Detail by Admission ID
    updateAdmissionDetailByAdmissionID = async (req: Request, res: Response) => {
        try {
            const admissionExist = await admissionModel.findOne({ _id: req.params.admissionId });

            if (!admissionExist) {
                return res.status(404).send({
                    message: "Admission not found!",
                    result: false
                });
            };

            const { first_name, last_name, dob, gender, email, phone, address, school_name, passed_year, gpa, applied_for } = req.body;

            let calculatedAge;

            if (dob) {
                calculatedAge = ageCalculator(dob);
            };

            const result = await admissionModel.findOneAndUpdate(
                { _id: req.params.admissionId },
                {
                    $set: {
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
                        applied_for: applied_for
                    }
                }, { new: true }
            );

            res.status(200).send({
                message: "Admission detail updated successfully!",
                result: result,
                success: true
            });

        } catch (err: any) {
            console.log(err);

            res.status(500).send({
                message: err.response?.message ? `Internal server error: ${err.message}` : "Internal server error!",
                success: false
            });
        };
    };
};

export default AdmissionController;