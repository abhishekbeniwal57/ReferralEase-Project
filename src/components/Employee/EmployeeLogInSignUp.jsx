import React, { useState, useContext } from "react";
import "../../styles/Employee/Employee_LogInSignUp.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext"; // Make sure this line is present

const Employee_LogInSignUp = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [companyname, setCompanyname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [view, setView] = useState("login"); // "login" or "signup"
  const navigate = useNavigate();
  const { login: loginUser } = useContext(AuthContext);

  const switchView = () => {
    console.log("Switching view");
    // Toggle between "login" and "signup" views
    setView(view === "login" ? "signup" : "login");
  };

  const login = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8090/api/v1/login-employee",
        {
          email: email,
          password: password,
        }
      );

      console.log(res.data);
      console.log(res.data.message);

      if (res.data.message === "Email not exists") {
        alert("Email not exists");
      } else if (res.data.message === "Login Success") {
        loginUser(email);
        alert("Login success!");
        navigate("/employee-profile");
      } else {
        alert("Incorrect Email and Password not match");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("An error occurred during login");
    }
  };

  const register = async () => {
    try {
      console.log("Firstname:", firstname);
      console.log("Lastname:", lastname);
      console.log("Companyname:", companyname);
      console.log("email:", email);
      console.log("password:", password);

      const res = await axios.post(
        "http://localhost:8090/api/v1/save-employee",
        {
          firstname: firstname,
          lastname: lastname,
          companyname: companyname,

          email: email,
          password: password,
        }
      );

      console.log("Response:", res.data);
      console.log(res.data.message);

      if (res.data === "Signup Success") {
        alert("Signup success!");
        switchView(); // Switch to the login form after successful signup
      } else {
        alert("An error occurred during signup");
      }
    } catch (err) {
      console.error("Signup error:", err);
      alert("An error occurred during signup");
    }
  };

  return (
    <div className="wrapper">
      {/* Navigation Bar */}
      <nav className="nav">
        <div className="nav-logo">
          <a href="/" className="link">
            <p>REFERRALEASE. </p>
          </a>
        </div>
        <div className="nav-menu" id="navMenu">
          <ul>
            <li>
              <a href="/" className="link ">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="link">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="link">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="link">
                About
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-button">
          {/* Toggle between login and signup views */}
          <button className="btn" onClick={switchView}>
            {view === "login" ? "Sign Up" : "Sign In"}
          </button>
        </div>
      </nav>

      {/* Form Box */}
      <div className="form-box">
        {/* Conditional rendering based on the view state */}
        {view === "login" ? (
          // Login Form
          <div className="login-container" id="login">
            <div className="top">
              <span>
                Don't have an account?{" "}
                <a href="#" onClick={switchView}>
                  Sign Up
                </a>
              </span>
              <header>Employee Login</header>
            </div>
            <div className="input-box">
              <input
                type="text"
                className="input-field"
                placeholder="Username or Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <i className="bx bx-user"></i>
            </div>
            <div className="input-box">
              <input
                type="password"
                className="input-field"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <i className="bx bx-lock-alt"></i>
            </div>
            <div className="input-box">
              <input
                type="submit"
                className="submit"
                value="Sign In"
                onClick={login}
              />
            </div>
            <div className="two-col">
              <div className="one">
                <input type="checkbox" id="login-check" />
                <label htmlFor="login-check"> Remember Me</label>
              </div>
              <div className="two">
                <label>
                  <a href="#">Forgot password?</a>
                </label>
              </div>
            </div>
          </div>
        ) : (
          // Signup Form
          <div className="register-container" id="register">
            <div className="top">
              <span>
                Have an account?{" "}
                <a href="#" onClick={switchView}>
                  Login
                </a>
              </span>
              <header>Employee Sign Up</header>
            </div>
            <div className="two-forms">
              <div className="input-box">
                <input
                  type="text"
                  className="input-field"
                  placeholder="Firstname"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
                <i className="bx bx-user"></i>
              </div>
              <div className="input-box">
                <input
                  type="text"
                  className="input-field"
                  placeholder="Lastname"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
                <i className="bx bx-user"></i>
              </div>
            </div>
            <div className="input-box">
              <input
                type="text"
                className="input-field"
                placeholder="Company name"
                value={companyname}
                onChange={(e) => setCompanyname(e.target.value)}
              />
              <i className="bx bx-user"></i>
            </div>
            <div className="input-box">
              <input
                type="text"
                className="input-field"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <i className="bx bx-envelope"></i>
            </div>
            <div className="input-box">
              <input
                type="password"
                className="input-field"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <i className="bx bx-lock-alt"></i>
            </div>
            <div className="input-box">
              <input
                type="submit"
                className="submit"
                value="Sign Up"
                onClick={register}
              />
            </div>
            <div className="two-col">
              <div className="one">
                <input type="checkbox" id="register-check" />
                <label htmlFor="register-check"> Remember Me</label>
              </div>
              <div className="two">
                <label>
                  <a href="#">Terms & conditions</a>
                </label>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Employee_LogInSignUp;
