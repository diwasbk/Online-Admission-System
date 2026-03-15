import nodemailer from "nodemailer";
import { APP_PASS, USER_EMAIL } from "../config/config";

// Nodemailer transporter using Gmail
export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: USER_EMAIL,
        pass: APP_PASS
    }
});

// Send email using the configured Nodemailer transporter
export const sendEmail = async (to: string, subject: string, html: string, attachments: any) => {
    try {
        const mailOptions = {
            from: `"MernStack"<${USER_EMAIL}>`,
            to,
            subject,
            html,
            attachments
        };

        await transporter.sendMail(mailOptions);

    } catch (err: any) {
        console.log(err);
        throw err;
    };
};