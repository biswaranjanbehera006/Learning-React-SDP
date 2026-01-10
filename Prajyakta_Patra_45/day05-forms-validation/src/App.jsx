import React from "react";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert("Form submitted successfully");
  };

  return (
    <>
      <style>{`
        body {
          background: #f4f6f8;
          font-family: Arial, sans-serif;
        }
        .form-container {
          width: 420px;
          margin: 40px auto;
          background: #ffffff;
          padding: 25px;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
        h2 {
          text-align: center;
          margin-bottom: 20px;
        }
        .form-group {
          margin-bottom: 15px;
        }
        label {
          font-weight: bold;
          display: block;
          margin-bottom: 5px;
        }
        input, select {
          width: 100%;
          padding: 8px;
          border-radius: 4px;
          border: 1px solid #ccc;
        }
        .error {
          color: red;
          font-size: 13px;
          margin-top: 4px;
        }
        .checkbox {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        button {
          width: 100%;
          padding: 10px;
          background: #2563eb;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 16px;
          cursor: pointer;
        }
        button:hover {
          background: #1e40af;
        }
      `}</style>

      <div className="form-container">
        <h2>Form Validation</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              {...register("fullName", {
                required: "Full Name is required",
                minLength: {
                  value: 3,
                  message: "Minimum 3 characters required",
                },
              })}
            />
            <div className="error">{errors.fullName?.message}</div>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
            />
            <div className="error">{errors.email?.message}</div>
          </div>

          <div className="form-group">
            <label>Age</label>
            <input
              {...register("age", {
                required: "Age is required",
                min: {
                  value: 18,
                  message: "Age must be 18 or above",
                },
              })}
            />
            <div className="error">{errors.age?.message}</div>
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters required",
                },
              })}
            />
            <div className="error">{errors.password?.message}</div>
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: "Confirm your password",
                validate: (value, formValues) =>
                  value === formValues.password || "Passwords do not match",
              })}
            />
            <div className="error">{errors.confirmPassword?.message}</div>
          </div>

          <div className="form-group">
            <label>Gender</label>
            <select
              {...register("gender", {
                required: "Gender is required",
              })}
            >
              <option value="">Select</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
            </select>
            <div className="error">{errors.gender?.message}</div>
          </div>

          <div className="form-group checkbox">
            <input
              type="checkbox"
              {...register("terms", {
                required: "You must accept the terms",
              })}
            />
            <label>Accept Terms & Conditions</label>
          </div>
          <div className="error">{errors.terms?.message}</div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
