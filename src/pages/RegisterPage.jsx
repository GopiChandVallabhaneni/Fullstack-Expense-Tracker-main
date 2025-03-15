import { useState } from "react";
import "../index.css";

export default function RegisterPage() {
  const [formData, setFormData] = useState({ username: "", password: "", email: "", phone: "", address: "", designation: "" });
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); console.log("Form Submitted:", formData); };
  const handleClear = () => setFormData({ username: "", password: "", email: "", phone: "", address: "", designation: "" });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-orange-200 to-orange-400">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl">
        <h3 className="text-center text-2xl font-bold text-gray-800 mb-6">Welcome to Expense Tracker</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          {["username", "password", "email", "phone", "address"].map((field) => (
            <input
              key={field}
              type={field === "password" ? "password" : "text"}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              required
              className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          ))}
          <select
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            required
            className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            <option value="" disabled>Select Your Designation</option>
            <option value="admin">Admin</option>
            <option value="manager">Manager</option>
            <option value="employee">Employee</option>
          </select>
          <div className="flex justify-between">
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition">Submit</button>
            <button type="button" onClick={handleClear} className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-600 transition">Clear</button>
          </div>
          <div className="flex justify-between items-center text-sm text-gray-600">
            <p>Already have an account?</p>
            <a href="/login" className="text-blue-500 hover:underline">Login</a>
          </div>
        </form>
      </div>
    </div>
  );
}
