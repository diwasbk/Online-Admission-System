import { Request, Response } from "express";
import { userModel } from "../models/user.model"
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt";

class AuthController {
    // Signup User
    signupUser = async (req: Request, res: Response) => {
        try {
            const userExist = await userModel.findOne({ email: req.body.email });

            if (userExist) {
                return res.status(409).send({
                    message: "This email is already in use!",
                    success: false
                });
            };

            const { email, password } = req.body;

            const salt = await bcrypt.genSalt(10);

            const hash = await bcrypt.hash(password, salt);

            const username = email.split("@")[0];

            await userModel.create({
                username: username,
                email: email,
                password: hash
            });

            res.status(201).send({
                message: "Signup successfully!",
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

    // Login User
    loginUser = async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body;

            const userExist = await userModel.findOne({ email: email });

            if (!userExist) {
                return res.status(400).send({
                    message: "Invalid email or password!",
                    success: false
                });
            };

            const isPasswordMatch = await bcrypt.compare(password, userExist.password);

            if (!isPasswordMatch) {
                return res.status(400).send({
                    message: "Invalid email or password!",
                    success: false
                });
            };

            const payload = {
                id: userExist._id.toString(),
                email: userExist.email,
                role: userExist.role
            };

            const token = generateToken(payload);

            res.cookie("auth_token", token, {
                httpOnly: true,
                maxAge: 3000 * 1000,
                sameSite: "lax",
                secure: false
            });

            res.status(200).send({
                message: "Logged in successfully!",
                result: token,
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

export default AuthController; 