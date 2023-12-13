// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Register from "./components/Register";
// import Login from "./components/Login";
// import Home from "./components/Home";

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/home" element={<Home />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/" element={<Login />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Signup from "./components/Signup";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
