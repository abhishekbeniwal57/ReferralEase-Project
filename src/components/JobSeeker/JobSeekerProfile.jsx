// import React, { useContext, useState, useEffect } from "react";
// import { Card, CardBody } from "reactstrap";
// import "../../styles/JobSeeker/JobSeekerProfile.css";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../App.js";

// const JobSeekerProfile = () => {
//   const [profileData, setProfileData] = useState({});
//   const { userEmail } = useContext(AuthContext);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProfileData = async () => {
//       try {
//         console.log("userEmail:", userEmail);

//         const res = await axios.get(
//           `http://localhost:8090/api/v1/jobseeker/profile?email=${userEmail}`,
//           { withCredentials: true }
//         );
//         console.log("After axios request", res.data);
//         setProfileData(res.data);
//         setLoading(false); // Set loading to false after data is fetched
//       } catch (err) {
//         console.error("Error fetching job seeker profile:", err);
//         setLoading(false); // Set loading to false even on error
//       }
//     };

//     fetchProfileData();
//   }, [userEmail]);

//   const handleEditProfile = () => {
//     // Navigate to the edit page (adjust this based on your routing)
//     navigate("/jobseeker-profile/edit");
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="wrapper">
//       {/* Navigation Bar */}
//       <nav className="nav">
//         <div className="nav-logo">
//           <a href="/" className="link">
//             <p>REFERRALEASE. </p>
//           </a>
//         </div>
//         <div className="nav-menu" id="navMenu">
//           <ul>
//             <li>
//               <a href="/" className="link ">
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
//       </nav>

//       {/* Welcome and Profile Information */}
//       <div className="profile-container">
//         <div className="welcome-text">
//           <h1>Welcome, {profileData.firstname || "User"}!</h1>
//         </div>
//         <div className="card-container">
//           <Card className="card position-static top-20 start-20">
//             {/* <div class="position-absolute top-50 start-50"></div> */}

//             <CardBody>
//               <h2>Your Profile</h2>
//               <p>
//                 <strong>Name:</strong>{" "}
//                 {`${profileData.firstname} ${profileData.lastname}`}
//               </p>
//               <p>
//                 <strong>Email:</strong> {profileData.email}
//               </p>
//               {profileData.discipline && ( // Check if discipline is not null or undefined
//                 <p>
//                   <strong>Discipline:</strong> {profileData.discipline}
//                 </p>
//               )}
//               <p>
//                 {profileData.resumeLink && ( // Check if resumeLink is not null or undefined
//                   <p>
//                     {profileData.resumeLink.startsWith("http") ? (
//                       <a
//                         href={profileData.resumeLink}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         Resume
//                       </a>
//                     ) : (
//                       <a
//                         href={`http://${profileData.resumeLink}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         Resume
//                       </a>
//                     )}
//                   </p>
//                 )}
//               </p>
//               {/* <p> */}
//               {/* <strong>Other Information:</strong>{" "} */}
//               {/* Add other profile information here */}
//               {/* </p> */}
//               <div className="edit-button">
//                 <button className="btn" onClick={handleEditProfile}>
//                   Edit
//                 </button>
//               </div>
//             </CardBody>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JobSeekerProfile;

// code with user dialog box at right corner

import React, { useContext, useState, useEffect } from "react";
import { Card, CardBody } from "reactstrap";
import "../../styles/JobSeeker/JobSeekerProfile.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const JobSeekerProfile = () => {
  const [profileData, setProfileData] = useState({});
  const { userEmail, logout } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userEmail) {
      console.error("No email provided");
      setLoading(false);
      return;
    }

    const fetchProfileData = async () => {
      try {
        const encodedEmail = encodeURIComponent(userEmail);
        console.log("userEmail:", userEmail);

        const res = await axios.get(
          `http://localhost:8090/api/v1/jobseeker/profile?email=${encodedEmail}`,
          { withCredentials: true }
        );
        console.log("After axios request", res.data);
        setProfileData(res.data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (err) {
        if (err.response) {
          console.error("Error response:", err.response.data);
        } else if (err.request) {
          console.error("Error request:", err.request);
        } else {
          console.error("Error message:", err.message);
        }
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [userEmail]);

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleEditProfile = () => {
    // Navigate to the edit page (adjust this based on your routing)
    navigate("/jobseeker-profile/edit");
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const DropdownMenu = () => (
    <ul className="dropdown-menu">
      <li onClick={() => navigate("/jobseeker-profile")}>Profile</li>
      <li onClick={() => navigate("/jobseeker-profile/edit")}>Edit Profile</li>
      <li onClick={handleLogout}>Logout</li>
    </ul>
  );

  return (
    <div className="wrapper">
      {/* Navigation Bar */}
      <nav className="nav">
        <div className="nav-logo">
          <a href="/jobseeker-profile" className="link">
            <p>REFERRALEASE. </p>
          </a>
        </div>
        <div className="nav-menu" id="navMenu">
          <ul>
            <li>
              <a href="/jobseeker-profile#" className="link ">
                Home
              </a>
            </li>
            <li>
              <a href="/req-ref" className="link">
                Request Referral
              </a>
            </li>
            <li>
              <a href="#" className="link">
                Referral Tracker
              </a>
            </li>
            <li>
              <a href="#" className="link">
                About
              </a>
            </li>
            <li>
              <a href="#" className="link" onClick={handleLogout}>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Welcome and Profile Information */}
      <div className="profile-container">
        <div className="welcome-text">
          <h1>Welcome, {profileData.firstname || "User"}!</h1>
        </div>
        <div className="card-container">
          <Card className="card position-static top-20 start-20">
            {/* <div class="position-absolute top-50 start-50"></div> */}

            <CardBody>
              <h2>Your Profile</h2>
              <p>
                <strong>Name:</strong>{" "}
                {`${profileData.firstname} ${profileData.lastname}`}
              </p>
              <p>
                <strong>Email:</strong> {profileData.email}
              </p>
              {profileData.discipline && ( // Check if discipline is not null or undefined
                <p>
                  <strong>Discipline:</strong> {profileData.discipline}
                </p>
              )}
              <p>
                {profileData.resumeLink && ( // Check if resumeLink is not null or undefined
                  <p>
                    {profileData.resumeLink.startsWith("http") ? (
                      <a
                        href={profileData.resumeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Resume
                      </a>
                    ) : (
                      <a
                        href={`http://${profileData.resumeLink}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Resume
                      </a>
                    )}
                  </p>
                )}
              </p>
              {/* <p> */}
              {/* <strong>Other Information:</strong>{" "} */}
              {/* Add other profile information here */}
              {/* </p> */}
              <div className="edit-button">
                <button className="btn" onClick={handleEditProfile}>
                  Edit
                </button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default JobSeekerProfile;
