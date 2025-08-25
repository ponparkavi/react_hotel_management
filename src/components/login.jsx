import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";

const getQueryParam = () => {
  const params = new URLSearchParams(window.location.search);
  return params.get("mode") === "signup" ? "signup" : "login";
};

export default function Login() {
  const mode = getQueryParam() || "login"; // default: login
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateField = (name, value) => {
    let error = "";
    if (name === "email") {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = "Enter valid email";
      }
    }

    if (name === "password") {
      if (value.length < 8) {
        error = "Length should be minimum 8";
      }
    }

    if (mode === "signup") {
      if (name === "username" && value.trim().length < 3) {
        error = "Username must be at least 3 characters";
      }
      if (name === "phone" && !/^\d{10}$/.test(value)) {
        error = "Enter valid 10-digit phone number";
      }
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name, value);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // validate all fields
    Object.keys(formData).forEach((field) => {
      if (mode === "login" && (field === "username" || field === "phone"))
        return;
      validateField(field, formData[field]);
    });

    // check if any errors remain
    const hasErrors = Object.values(errors).some((err) => err);
    if (!hasErrors) {
      alert(`${mode === "signup" ? "Signup" : "Login"} successful!`);
    }
  };

  return (
    <div className="bod m-0">
      <div className="login-container">
        <h2>{mode === "signup" ? "Signup" : "Login"}</h2>
        <div className="social-btn">
          <button className="btn bg-dark text-white button_go-fb">
            <FontAwesomeIcon icon={faGoogle} /> Continue with Google
          </button>
          <button className="button_go-fb btn btn-dark">
            <FontAwesomeIcon icon={faFacebook} /> Continue with Facebook
          </button>
        </div>
        <div className="separator">OR</div>

        <form onSubmit={handleSubmit}>
          {mode === "signup" && (
            <>
              <div className="d-flex justify-content-between">
                <label htmlFor="username" className="fw-semibold">
                  Username
                </label>
                {errors.username && touched.username && (
                  <div className="error-message">{errors.username}</div>
                )}
              </div>
              <input
                type="text"
                name="username"
                className={`iput bg-dark text-white ${
                  errors.username && touched.username ? "error" : ""
                }`}
                value={formData.username}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <div className="d-flex justify-content-between">
                <label htmlFor="phone" className="fw-semibold">
                  Phone Number
                </label>
                {errors.phone && touched.phone && (
                  <div className="error-message">{errors.phone}</div>
                )}
              </div>
              <input
                type="tel"
                name="phone"
                className={`iput bg-dark text-white ${
                  errors.phone && touched.phone ? "error" : ""
                }`}
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </>
          )}

          <div className="d-flex justify-content-between">
            <label htmlFor="email" className="fw-semibold">
              Email
            </label>
            {errors.email && touched.email && (
              <div className="error-message">{errors.email}</div>
            )}
          </div>
          <input
            type="email"
            name="email"
            className={`iput bg-dark text-white ${
              errors.email && touched.email ? "error" : ""
            }`}
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <div className="d-flex justify-content-between">
            <label htmlFor="password" className="fw-semibold">
              Password
            </label>
            {errors.password && touched.password && (
              <div className="error-message">{errors.password}</div>
            )}
          </div>
          <input
            type="password"
            name="password"
            className={`iput bg-dark text-white ${
              errors.password && touched.password ? "error" : ""
            }`}
            value={formData.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <button
            className="login-btn p-2 btn-primary text-white"
            type="submit"
          >
            {mode === "signup" ? "Create Account" : "Continue"}
          </button>
        </form>

        <div className="bottom-links fs-6">
          {mode === "login" ? (
            <>
              New user?{" "}
              <a href="?mode=signup" className="text-bottom">
                Create an account
              </a>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <a href="?mode=login" className="text-bottom">
                Login here
              </a>
            </>
          )}
          <br />
          <a href="#" className="text-white text-bottom">
            Forget Password?
          </a>
        </div>
      </div>
    </div>
  );
}
