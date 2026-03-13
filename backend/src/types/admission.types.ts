import z from "zod";

export const admissionSchema = z.object({
    firstName: z.string("First name is required.").nonempty("First name is required.").min(3, "First name must be at least 3 characters."),
    lastName: z.string("Last name is required.").nonempty("Last name is required.").min(2, "Last name must be at least 2 characters."),
    dob: z.string("Date of birth is required.").nonempty("Date of birth is required."),
    age: z.number().optional(),
    gender: z.enum(["male", "female", "others"]).default("male"),
    email: z.string("Email is required.").email({ message: "Invalid email." }),
    phone: z.string("Phone number is required.").nonempty("Phone number is required.").regex(/^\d{10}/, { message: " Phone number must be exactly 10 digits." }),
    address: z.string("Address is required.").nonempty("Address is required.").min(5, "Address must be at least 5 chatacters."),
    schoolName: z.string("School name is required.").nonempty("School name is required.").min(10, "School name must be at least 10 characters."),
    passedYear: z.string("Passed year is required.").nonempty("Passed year is required.").regex(/^\d{4}$/, { message: "Passed year must be a 4 digit year." }),
    gpa: z.number("GPA is required.").nonnegative("GPA cannot be negative."),
    appliedFor: z.enum(["science", "management", "law"]).default("science"),
    termsAgreed: z.boolean("You must agree to the terms and conditions.").refine((val) => val === true, "You must agree to the terms and conditions.")
});
export type admissionType = z.infer<typeof admissionSchema>;