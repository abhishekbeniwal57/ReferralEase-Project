// LoginRegisterPage.js

import React from 'react';
import '../styles/Home.css'; // Import your CSS file

const LoginRegisterPage = () => {

  const myMenuFunction = () => {
    var i = document.getElementById("navMenu");

    if (i.className === "nav-menu") {
      i.className += " responsive";
    } else {
      i.className = "nav-menu";
    }
  };

  const login = () => {
    var x = document.getElementById("login");
    var y = document.getElementById("register");
    var a = document.getElementById("loginBtn");
    var b = document.getElementById("registerBtn");

    x.style.left = "4px";
    y.style.right = "-520px";
    a.classList.add("white-btn");
    b.classList.remove("white-btn");
    x.style.opacity = 1;
    y.style.opacity = 0;
  };

  const register = () => {
    var x = document.getElementById("login");
    var y = document.getElementById("register");
    var a = document.getElementById("loginBtn");
    var b = document.getElementById("registerBtn");

    x.style.left = "-510px";
    y.style.right = "5px";
    a.classList.remove("white-btn");
    b.classList.add("white-btn");
    x.style.opacity = 0;
    y.style.opacity = 1;
  };

  return (
    <div className="wrapper">
      <nav className="nav">
        <div className="nav-logo">
          <p>LOGO .</p>
        </div>
        <div className="nav-menu" id="navMenu">
          <ul>
            <li><a href="#" className="link active">Home</a></li>
            <li><a href="#" className="link">Blog</a></li>
            <li><a href="#" className="link">Services</a></li>
            <li><a href="#" className="link">About</a></li>
          </ul>
        </div>
        <div className="nav-button">
          <button className="btn white-btn" id="loginBtn" onClick={login}>Sign In</button>
          <button className="btn" id="registerBtn" onClick={register}>Sign Up</button>
        </div>
        <div className="nav-menu-btn">
          <i className="bx bx-menu" onClick={myMenuFunction}></i>
        </div>
      </nav>

      {/* Form box */}
      <div className="form-box">
        {/* Login and registration forms */}
        <div className="login-container" id="login">
          <div className="top">
            <span>Don't have an account? <a href="#" onClick={register}>Sign Up</a></span>
            <header>Login</header>
          </div>
          <div className="input-box">
            <input type="text" className="input-field" placeholder="Username or Email" />
            <i className="bx bx-user"></i>
          </div>
          <div className="input-box">
            <input type="password" className="input-field" placeholder="Password" />
            <i className="bx bx-lock-alt"></i>
          </div>
          <div className="input-box">
            <input type="submit" className="submit" value="Sign In" />
          </div>
          <div className="two-col">
            <div className="one">
              <input type="checkbox" id="login-check" />
              <label htmlFor="login-check"> Remember Me</label>
            </div>
            <div className="two">
              <label><a href="#">Forgot password?</a></label>
            </div>
          </div>
        </div>

        <div className="register-container" id="register">
          {/* ... (rest of the registration form HTML code) ... */}
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterPage;
