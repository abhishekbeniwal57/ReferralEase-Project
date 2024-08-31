import React from "react";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const WelcomeText = () => (
  <div className="welcome-text">
    <h1>Welcome to ReferralEase</h1>
    <p>Get Referrals From Verified Employees</p>
    <p>
      Land your dream job, with help from professionals that have been in your
      shoes.
    </p>
    <h2>Get Started Now!!</h2>
  </div>
);

const Home = () => {
  const navigate = useNavigate();

  const myMenuFunction = () => {
    var i = document.getElementById("navMenu");

    if (i.className === "nav-menu") {
      i.className += " responsive";
    } else {
      i.className = "nav-menu";
    }
  };

  const login = () => {
    navigate("/login");
  };

  const register = () => {
    navigate("/employee");
    // navigate("/login", { state: { setView: "signup" } });
  };

  return (
    <div className="wrapper">
      <nav className="nav">
        <div className="nav-logo">
          <p>REFERRALEASE.</p>
        </div>
        <div className="nav-menu" id="navMenu">
          <ul>
            <li>
              <Link to="/" className="link active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/blog" className="link">
                Blog
              </Link>
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
          <button className="btn white-btn" id="loginBtn" onClick={login}>
            Sign In
          </button>
          <button className="btn white-btn" id="registerBtn" onClick={register}>
            Employee
          </button>
        </div>
        <div className="nav-menu-btn">
          <i className="bx bx-menu" onClick={myMenuFunction}></i>
        </div>
      </nav>

      <WelcomeText />
    </div>
  );
};

export default Home;
