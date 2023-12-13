import React, { useState } from "react";
import "../styles/SignUp.css";
import axios from "axios";

const SignupForm = () => {
  // State for form fields
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Signup function
  const signup = async () => {
    try {
      // Assuming you want to perform the signup action here
      // You can add your axios signup request here
      const res = await axios.post(
        "http://localhost:8090/api/v1/employee/signup",
        {
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password,
        }
      );

      console.log(res.data);
      // Handle the response accordingly
      // ...
    } catch (err) {
      console.error(err);
      alert("An error occurred during signup");
    }
  };

  const myMenuFunction = () => {
    // ... (your existing code)
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="nav">
        <div className="nav-logo">
          <p>REFERRALEASE. SIGN UP</p>
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
                Blogs
              </a>
            </li>
            <li>
              <a href="#" className="link">
                About
              </a>
            </li>
            {/* Add other navigation links if needed */}
          </ul>
        </div>
        <div className="nav-button">
          <button
            className="btn white-btn"
            onClick={() => console.log("Sign In")}
          >
            Sign In
          </button>
          <button className="btn" onClick={() => console.log("Sign Up")}>
            Sign Up
          </button>
        </div>
        <div className="nav-menu-btn">
          <i className="bx bx-menu" onClick={myMenuFunction}></i>
        </div>
      </nav>

      {/* Signup Form */}
      <div className="register-container" id="register">
        <div className="top">
          <span>
            Have an account? <a href="#">Login</a>
          </span>
          <header>Sign Up</header>
        </div>
        <div className="two-forms">
          <div className="input-box">
            <input
              type="text"
              className="input-field"
              placeholder="Firstname"
              value={firstname}
              onChange={(event) => setFirstname(event.target.value)}
            />
            <i className="bx bx-user"></i>
          </div>
          <div className="input-box">
            <input
              type="text"
              className="input-field"
              placeholder="Lastname"
              value={lastname}
              onChange={(event) => setLastname(event.target.value)}
            />
            <i className="bx bx-user"></i>
          </div>
        </div>
        <div className="input-box">
          <input
            type="text"
            className="input-field"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <i className="bx bx-envelope"></i>
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
            value="Sign Up"
            onClick={signup}
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
    </div>
  );
};

export default SignupForm;

// import React, { useState } from "react";
// import axios from "axios";
// import "../styles/SignUp.css";

// function SignUp() {
//   const [user_firstname, setUserfirstname] = useState("");
//   const [user_lastname, setUserlastname] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   async function save(event) {
//     event.preventDefault();
//     try {
//       await axios.post("http://localhost:8090/api/v1/employee/save", {
//         firstname: user_firstname,
//         lastname: user_lastname,
//         email: email,
//         password: password,
//       });
//       alert("User Registered Successfully");
//     } catch (err) {
//       alert(err);
//     }
//   }

//   return (
//     <div className="container mt-4">
//       <div className="card registration-card">
//         <h1>User Registration</h1>

//         <form>
//           <div className="form-group">
//             <label>User First name</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Enter First Name"
//               value={user_firstname}
//               onChange={(event) => {
//                 setUserfirstname(event.target.value);
//               }}
//             />
//           </div>

//           <div className="form-group">
//             <label>User Last name</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Enter Last Name"
//               value={user_lastname}
//               onChange={(event) => {
//                 setUserlastname(event.target.value);
//               }}
//             />
//           </div>

//           <div className="form-group">
//             <label>Email</label>
//             <input
//               type="email"
//               className="form-control"
//               placeholder="Enter Email"
//               value={email}
//               onChange={(event) => {
//                 setEmail(event.target.value);
//               }}
//             />
//           </div>

//           <div className="form-group">
//             <label>Password</label>
//             <input
//               type="password"
//               className="form-control"
//               placeholder="Enter password"
//               value={password}
//               onChange={(event) => {
//                 setPassword(event.target.value);
//               }}
//             />
//           </div>

//           <button type="submit" className="btn btn-primary mt-4" onClick={save}>
//             Save
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default SignUp;

// --------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------------------

// import {  useState } from "react";
// import axios from "axios";

// function Register() {

//     const [user_firstname, setUserfirstname] = useState("");
//     const [user_lastname, setUserlastname] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     async function save(event) {
//         event.preventDefault();
//         try {
//           await axios.post("http://localhost:8090/api/v1/employee/save", {
//           firstname: user_firstname,
//           lastname: user_lastname,
//           email: email,
//           password: password,
//           });
//           alert("User Registered Successfully");

//         } catch (err) {
//           alert(err);
//         }
//       }

//     return (
//     <div>
//     <div class="container mt-4" >
//     <div class="card">
//             <h1>User Registation</h1>

//     <form>
//         <div class="form-group">
//           <label>User First name</label>
//           <input type="text"  class="form-control" id="user_fisrtname" placeholder="Enter First Name"

//           value={user_firstname}
//           onChange={(event) => {
//             setUserfirstname(event.target.value);
//           }}
//           />

//         </div>

//         <div class="form-group">
//           <label>User Last name</label>
//           <input type="text"  class="form-control" id="user_lastname" placeholder="Enter Last Name"

//           value={user_lastname}
//           onChange={(event) => {
//             setUserlastname(event.target.value);
//           }}
//           />

//         </div>

//         <div class="form-group">
//           <label>Email</label>
//           <input type="email"  class="form-control" id="email" placeholder="Enter Email"

//           value={email}
//           onChange={(event) => {
//             setEmail(event.target.value);
//           }}

//           />

//         </div>

//         <div class="form-group">
//             <label>Password</label>
//             <input type="password"  class="form-control" id="password" placeholder="Enter password"

//             value={password}
//             onChange={(event) => {
//               setPassword(event.target.value);
//             }}

//             />
//           </div>

//         <button type="submit" class="btn btn-primary mt-4" onClick={save} >Save</button>

//       </form>
//     </div>
//     </div>
//      </div>
//     );
//   }

//   export default Register;
