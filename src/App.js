// import React, { useState } from "react";
// import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
// import JobSeeker_LogInSignUp from "./components/JobSeeker/JobSeeker_LogInSignUp";
// import JobSeekerProfile from "./components/JobSeeker/JobSeekerProfile";
// import JobSeekerProfileEdit from "./components/JobSeeker/JobSeekerProfileEdit";
// import RequestReferral from "./components/JobSeeker/RequestReferral";
// import Employee_LogInSignUp from "./components/Employee/Employee_LogInSignUp";
// import EmployeeProfile from "./components/Employee/EmployeeProfile";
// import EmployeeProfileEdit from "./components/Employee/EmployeeProfileEdit";


// export const AuthContext = React.createContext();

// function App() {
//   const [userEmail, setUserEmail] = useState(null);
//   console.log("userEmail in App.js:", userEmail);

//   const login = (email) => {
//     setUserEmail(email);
//   };

//   return (
//     <div>
//       <BrowserRouter>
//         <AuthContext.Provider value={{ userEmail, login }}>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/login" element={<JobSeeker_LogInSignUp />} />
//             <Route path="/jobseeker-profile" element={<JobSeekerProfile />} />
//             <Route path="/jobseeker-profile/edit" element={<JobSeekerProfileEdit />} />
//             <Route path="/req-ref" element={<RequestReferral />} />
//             <Route path="/employee" element={<Employee_LogInSignUp />} />
//             <Route path="/employee-profile" element={<EmployeeProfile />} />
//             <Route path="/employee-profile/edit" element={<EmployeeProfileEdit />} />
//           </Routes>
//         </AuthContext.Provider>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;


// ------

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import JobSeekerLogInSignUp from "./components/JobSeeker/JobSeekerLogInSignUp";
import JobSeekerProfile from "./components/JobSeeker/JobSeekerProfile";
import JobSeekerProfileEdit from "./components/JobSeeker/JobSeekerProfileEdit";
import RequestReferral from "./components/JobSeeker/RequestReferral";
import EmployeeLogInSignUp from "./components/Employee/EmployeeLogInSignUp";
import EmployeeProfile from "./components/Employee/EmployeeProfile";
import EmployeeProfileEdit from "./components/Employee/EmployeeProfileEdit";
import { AuthProvider } from "./contexts/AuthContext"; 
import ReferralRequests from "./components/Employee/ReferralRequests";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<JobSeekerLogInSignUp />} />
          <Route path="/jobseeker-profile" element={<JobSeekerProfile />} />
          <Route path="/jobseeker-profile/edit" element={<JobSeekerProfileEdit />} />
          <Route path="/req-ref" element={<RequestReferral />} />
          <Route path="/employee" element={<EmployeeLogInSignUp />} />
          <Route path="/employee-profile" element={<EmployeeProfile />} />
          <Route path="/ref-reqs" element={<ReferralRequests />} />
          <Route path="/employee-profile/edit" element={<EmployeeProfileEdit />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
