import React from "react";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";

const WelcomeText = () => (
  <div className="welcome-text">
    <h1>Welcome to ReferralEase</h1>
    <p>Get Referrals From Verified Employees</p>
    <p>Land your dream job, with help from professionals that have been in your shoes.</p>
    <h2>Get Started Now!!</h2>
  </div>
);

const LoginRegisterPage = () => {
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
    navigate('/login');
  };

  const register = () => {
    navigate('/signup');
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
              <a href="/home" className="link active">
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
          <button className="btn white-btn" id="loginBtn" onClick={login}>
            Sign In
          </button>
          <button className="btn" id="registerBtn" onClick={register}>
            Sign Up
          </button>
        </div>
        <div className="nav-menu-btn">
          <i className="bx bx-menu" onClick={myMenuFunction}></i>
        </div>
      </nav>

      {/* Welcome Text Section */}
      <WelcomeText />
    </div>
  );
};

export default LoginRegisterPage;






// import React from 'react';
// import '../styles/Home.css'; 

// function Home() {
//     return (
//       <div>
//         <p>Home </p>
//       </div>
//     );
//   }

//   export default Home;


// import React, { useState } from "react";
// import "../styles/Home.css";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const LoginRegisterPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const myMenuFunction = () => {
//     var i = document.getElementById("navMenu");

//     if (i.className === "nav-menu") {
//       i.className += " responsive";
//     } else {
//       i.className = "nav-menu";
//     }
//   };

//   const login = async () => {
//     try {
//       var x = document.getElementById("login");
//       var y = document.getElementById("register");
//       var a = document.getElementById("loginBtn");
//       var b = document.getElementById("registerBtn");

//       x.style.left = "4px";
//       y.style.right = "-520px";
//       a.classList.add("white-btn");
//       b.classList.remove("white-btn");
//       x.style.opacity = 1;
//       y.style.opacity = 0;

//       // Assuming you want to perform the login action here
//       // You can add your axios login request here
//       const res = await axios.post(
//         "http://localhost:8090/api/v1/employee/login",
//         {
//           email: email,
//           password: password,
//         }
//       );

//       console.log(res.data);
//       if (res.data.message == "Email not exits")
//       {
//         alert("Email not exits");
//       }
//       else if (res.data.message == "Login Success") {
//         alert("Login success!");
//         navigate('/home');
//       } else {
//         alert("Incorrect Email and Password not match");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("An error occurred during login");
//     }
//   };

//   const register = () => {
//     // ... (your existing code)
//     var x = document.getElementById("login");
//     var y = document.getElementById("register");
//     var a = document.getElementById("loginBtn");
//     var b = document.getElementById("registerBtn");

//     x.style.left = "-510px";
//     y.style.right = "5px";
//     a.classList.remove("white-btn");
//     b.classList.add("white-btn");
//     x.style.opacity = 0;
//     y.style.opacity = 1;

//     // Navigate to /signup when Register is clicked
//     // navigate('/signup');
//   };

//   return (
//     <div className="wrapper">
//       {/* ... (your existing code) */}
//       <nav className="nav">
//         <div className="nav-logo">
//           <p>REFERRALEASE.</p>
//         </div>
//         <div className="nav-menu" id="navMenu">
//           <ul>
//             <li>
//               <a href="/home" className="link active">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="#" className="link">
//                 Blog
//               </a>
//             </li>
//             <li>
//               <a href="#" className="link">
//                 Services
//               </a>
//             </li>
//             <li>
//               <a href="#" className="link">
//                 About
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div className="nav-button">
//           <button className="btn white-btn" id="loginBtn" onClick={() => navigate('/login')}>
//             Sign In
//           </button>
//           <button className="btn" id="registerBtn" onClick={() => navigate('/signup')}>
//             Sign Up
//           </button>
//         </div>
//         <div className="nav-menu-btn">
//           <i className="bx bx-menu" onClick={myMenuFunction}></i>
//         </div>
//       </nav>

//       <div className="form-box">
//         {/* Login and registration forms */}
//         <div className="login-container" id="login">
//           <div className="top">
//             <span>
//               Don't have an account?{" "}
//               <a href="#" onClick={register}>
//                 Sign Up
//               </a>
//             </span>
//             <header>Login</header>
//           </div>
//           <div className="input-box">
//             <input
//               type="text"
//               className="input-field"
//               placeholder="Username or Email"
//               value={email}
//               onChange={(event) => setEmail(event.target.value)}
//             />
//             <i className="bx bx-user"></i>
//           </div>
//           <div className="input-box">
//             <input
//               type="password"
//               className="input-field"
//               placeholder="Password"
//               value={password}
//               onChange={(event) => setPassword(event.target.value)}
//             />
//             <i className="bx bx-lock-alt"></i>
//           </div>
//           <div className="input-box">
//             <input
//               type="submit"
//               className="submit"
//               value="Sign In"
//               onClick={login}
//             />
//           </div>
//           <div className="two-col">
//             <div className="one">
//               <input type="checkbox" id="login-check" />
//               <label htmlFor="login-check"> Remember Me</label>
//             </div>
//             <div className="two">
//               <label>
//                 <a href="#">Forgot password?</a>
//               </label>
//             </div>
//           </div>
//         </div>

//         <div className="register-container" id="register">
//           {/* ... (rest of the registration form HTML code) ... */}
//           <div className="top">
//           <span>
//             Have an account?{" "}
//             <a href="#" onClick={login}>
//               Login
//             </a>
//           </span>
//           <header>Sign Up</header>
//         </div>
//         <div className="two-forms">
//           <div className="input-box">
//             <input
//               type="text"
//               className="input-field"
//               placeholder="Firstname"
//             />
//             <i className="bx bx-user"></i>
//           </div>
//           <div className="input-box">
//             <input
//               type="text"
//               className="input-field"
//               placeholder="Lastname"
//             />
//             <i className="bx bx-user"></i>
//           </div>
//         </div>
//         <div className="input-box">
//           <input
//             type="text"
//             className="input-field"
//             placeholder="Email"
//           />
//           <i className="bx bx-envelope"></i>
//         </div>
//         <div className="input-box">
//           <input
//             type="password"
//             className="input-field"
//             placeholder="Password"
//           />
//           <i className="bx bx-lock-alt"></i>
//         </div>
//         <div className="input-box">
//           <input
//             type="submit"
//             className="submit"
//             value="Sign Up"
//           />
//         </div>
//         <div className="two-col">
//           <div className="one">
//             <input type="checkbox" id="register-check" />
//             <label htmlFor="register-check"> Remember Me</label>
//           </div>
//           <div className="two">
//             <label>
//               <a href="#">Terms & conditions</a>
//             </label>
//           </div>
//         </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginRegisterPage;
