import z from "zod";

// Signup Schema
export const signupSchema = z.object({
    username: z.string().optional(),
    email: z.string("Email is required.").nonempty("Email is required.").email({ message: "Invalid email." }),
    role: z.enum(["admin", "user"]).default("user"),
    password: z.string("Password is required.").nonempty("Password is required.").min(6, "Password must be at least 6 characters."),
    confirmPassword: z.string("Confirm password is required.").nonempty("Confirm password is required.").min(6, "Confirm password must be at least 6 characters.")
}).refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match.",
    path: ["confirmPassword"]
});
export type signupType = z.infer<typeof signupSchema>;

// Login Schema
export const loginSchema = z.object({
    username: z.string().optional(),
    email: z.string("Email is required.").nonempty("Email is required.").email({ message: "Invalid email." }),
    password: z.string("Password is required.").nonempty("Password is required.").min(6, "Password must be at least 6 characters.")
});
export type loginType = z.infer<typeof loginSchema>;