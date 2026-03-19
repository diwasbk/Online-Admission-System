import { formStyles } from "@/app/lib/styles/style";

export default function ApplicationForm() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-8">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className={formStyles.label}>
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="John"
              className={formStyles.input}
            />
          </div>

          {/* Middle Name */}
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

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className={formStyles.label}>
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              placeholder="Thapa"
              className={formStyles.input}
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label htmlFor="dob" className={formStyles.label}>
              Date of Birth
            </label>
            <input
              id="dob"
              type="date"
              className={formStyles.input}
            />
          </div>

          {/* Gender */}
          <div>
            <label htmlFor="gender" className={formStyles.label}>
              Gender
            </label>
            <select id="gender" className={formStyles.input}>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          {/* Address */}
          <div>
            <label htmlFor="address" className={formStyles.label}>
              Address
            </label>
            <input
              id="address"
              type="text"
              placeholder="Kathmandu, Nepal"
              className={formStyles.input}
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className={formStyles.label}>
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="example@gmail.com"
              className={formStyles.input}
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className={formStyles.label}>
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="9876543210"
              className={formStyles.input}
            />
          </div>

          {/* School Name */}
          <div>
            <label htmlFor="schoolName" className={formStyles.label}>
              School Name
            </label>
            <input
              id="schoolName"
              type="text"
              placeholder="Kathmandu Model College"
              className={formStyles.input}
            />
          </div>

          {/* Passed Year */}
          <div>
            <label htmlFor="passedYear" className={formStyles.label}>
              Passed Year
            </label>
            <select id="passedYear" className={formStyles.input}>
              <option value="">Select Year</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
            </select>
          </div>

          {/* GPA */}
          <div>
            <label htmlFor="gpa" className={formStyles.label}>
              GPA
            </label>
            <input
              id="gpa"
              type="number"
              step="0.1"
              placeholder="3.80"
              className={formStyles.input}
            />
          </div>

          {/* Applied For */}
          <div>
            <label htmlFor="appliedFor" className={formStyles.label}>
              Applied For
            </label>
            <select id="appliedFor" className={formStyles.input}>
              <option>Science</option>
              <option>Management</option>
              <option>Arts</option>
            </select>
          </div>

          {/* Terms */}
          <div className="md:col-span-2 flex items-center gap-2">
            <input id="terms" type="checkbox" className="w-4 h-4 cursor-pointer" />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I agree to the terms and conditions and confirm that the information submitted is true.
            </label>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 transition font-semibold cursor-pointer"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}