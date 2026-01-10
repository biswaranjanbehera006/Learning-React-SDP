import { useState } from "react";

export default function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function validate() {
    let newErrors = {};

    if (!form.name) newErrors.name = "Name is required";

    if (!form.email) newErrors.email = "Email is required";
    else if (!form.email.includes("@"))
      newErrors.email = "Enter a valid email";

    if (!form.password) newErrors.password = "Password is required";
    else if (form.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (!form.confirmPassword)
      newErrors.confirmPassword = "Confirm your password";
    else if (form.confirmPassword !== form.password)
      newErrors.confirmPassword = "Passwords do not match";

    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      setSuccess("Registration Successful!");
      setErrors({});
      setForm({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } else {
      setErrors(validationErrors);
      setSuccess("");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-8 rounded-xl shadow-xl w-96 space-y-4 border border-yellow-500/30"
      >
        <h2 className="text-2xl font-bold text-yellow-400 text-center">
          Register
        </h2>

        {success && (
          <p className="text-green-400 text-center">{success}</p>
        )}

        {/* Name */}
        <div>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded bg-black border border-gray-700 focus:outline-none focus:border-yellow-400"
          />
          <p className="text-red-400 text-sm">{errors.name}</p>
        </div>

        {/* Email */}
        <div>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded bg-black border border-gray-700 focus:outline-none focus:border-yellow-400"
          />
          <p className="text-red-400 text-sm">{errors.email}</p>
        </div>

        {/* Password */}
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-3 rounded bg-black border border-gray-700 focus:outline-none focus:border-yellow-400"
          />
          <p className="text-red-400 text-sm">{errors.password}</p>
        </div>

        {/* Confirm Password */}
        <div>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            className="w-full p-3 rounded bg-black border border-gray-700 focus:outline-none focus:border-yellow-400"
          />
          <p className="text-red-400 text-sm">
            {errors.confirmPassword}
          </p>
        </div>

        <button className="w-full bg-yellow-400 text-black py-2 rounded hover:bg-yellow-500 transition font-semibold">
          Register
        </button>
      </form>
    </div>
  );
}
