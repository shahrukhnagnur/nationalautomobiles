import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("auth")) || ""
  );
  const navigate = useNavigate();

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let email = e.target.email.value;
    let password = e.target.password.value;
    let confirmPassword = e.target.confirmPassword.value;

    if (name.length > 0 && email.length > 0 && password.length > 0 && confirmPassword.length > 0) {
      if (password === confirmPassword) {
        const formData = { name, email, password };
        try {
          const response = await axios.post(
            "http://localhost:8000/api/v1/register",
            formData,
            { headers: { "Content-Type": "application/json" } }
          );
          toast.success("Registration successful");
          navigate("/login");
        } catch (err) {
          toast.error("Registration failed: " + err.message);
        }
      } else {
        toast.error("Passwords don't match");
      }
    } else {
      toast.error("Please fill all inputs");
    }
  };

  useEffect(() => {
    if (token !== "") {
      toast.success("You are already logged in");
      navigate("/dashboard");
    }
  }, []);

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4 shadow-lg" style={{ maxWidth: "400px" }}>
          <h2 className="text-center mb-4 text-danger">Sign Up</h2>
          <form onSubmit={handleRegisterSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="form-control"
                  placeholder="Enter your password"
                  required
                />
                <span
                  className="input-group-text bg-light cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </span>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                className="form-control"
                placeholder="Confirm your password"
                required
              />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-danger">
                Sign Up
              </button>
            </div>
          </form>

          <p className="text-center mt-3">
            Already have an account?{" "}
            <Link to="/login" className="text-danger fw-bold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
