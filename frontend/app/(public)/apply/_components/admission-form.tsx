"use client";

import { formStyles } from "@/app/lib/styles/style";
import { useForm } from "react-hook-form";
import { admissionSchema, admissionType } from "../schema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function ApplicationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<admissionType>({
    resolver: zodResolver(admissionSchema)
  });

  const onSubmit = async (data: admissionType) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-8">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="firstName" className={formStyles.label}>
              First Name
            </label>
            <input
              {...register("firstName")}
              id="firstName"
              type="text"
              placeholder="John"
              className={formStyles.input}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="middleName" className={formStyles.label}>
              Middle Name
            </label>
            <input
              id="middleName"
              type="text"
              placeholder="Doe"
              className={formStyles.input}
            />
          </div>

          <div>
            <label htmlFor="lastName" className={formStyles.label}>
              Last Name
            </label>
            <input
              {...register("lastName")}
              id="lastName"
              type="text"
              placeholder="Thapa"
              className={formStyles.input}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="dob" className={formStyles.label}>
              Date of Birth
            </label>
            <input
              {...register("dob")}
              id="dob"
              type="date"
              className={formStyles.input}
            />
            {errors.dob && (
              <p className="text-red-500 text-sm">{errors.dob.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="gender" className={formStyles.label}>
              Gender
            </label>
            <select id="gender" className={formStyles.input}
              {...register("gender")}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="address" className={formStyles.label}>
              Address
            </label>
            <input
              {...register("address")}
              id="address"
              type="text"
              placeholder="Kathmandu, Nepal"
              className={formStyles.input}
            />
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className={formStyles.label}>
              Email
            </label>
            <input
              {...register("email")}
              id="email"
              type="email"
              placeholder="example@gmail.com"
              className={formStyles.input}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className={formStyles.label}>
              Phone
            </label>
            <input
              {...register("phone")}
              id="phone"
              type="tel"
              placeholder="9876543210"
              className={formStyles.input}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="schoolName" className={formStyles.label}>
              School Name
            </label>
            <input
              {...register("schoolName")}
              id="schoolName"
              type="text"
              placeholder="Kathmandu Model College"
              className={formStyles.input}
            />
            {errors.schoolName && (
              <p className="text-red-500 text-sm">{errors.schoolName.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="passedYear" className={formStyles.label}>
              Passed Year
            </label>
            <select id="passedYear" className={formStyles.input}
              {...register("passedYear")}>
              <option value="">Select Year</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
            </select>
            {errors.passedYear && (
              <p className="text-red-500 text-sm">{errors.passedYear.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="gpa" className={formStyles.label}>
              GPA
            </label>
            <input
              {...register("gpa", { valueAsNumber: true })}
              id="gpa"
              type="number"
              step="0.1"
              placeholder="3.80"
              className={formStyles.input}
            />
            {errors.gpa && (
              <p className="text-red-500 text-sm">{errors.gpa.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="appliedFor" className={formStyles.label}>
              Applied For
            </label>
            <select id="appliedFor" className={formStyles.input}
              {...register("appliedFor")}>
              <option value="science">Science</option>
              <option value="management">Management</option>
              <option value="law">Law</option>
            </select>
          </div>

          <div className="md:col-span-2 flex items-center gap-2">
            <input id="terms" type="checkbox" className="w-4 h-4 cursor-pointer"
              {...register("termsAgreed")} />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I agree to the terms and conditions and confirm that the information submitted is true.
            </label>
          </div>
          {errors.termsAgreed && (
            <p className="text-red-500 text-sm">{errors.termsAgreed.message}</p>
          )}

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 transition font-semibold cursor-pointer"
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}