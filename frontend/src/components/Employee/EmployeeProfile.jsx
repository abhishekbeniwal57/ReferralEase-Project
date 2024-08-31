import React, { useContext, useState, useEffect } from "react";
import { Card, CardBody } from "reactstrap";
import "../../styles/Employee/EmployeeProfile.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext"; // Make sure this line is present

const EmployeeProfile = () => {
  const [profileData, setProfileData] = useState({});
  const { userEmail , logout} = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        console.log("userEmail:", userEmail);

        const res = await axios.get(
          `http://localhost:8090/api/v1/employee/profile?email=${userEmail}`,
          { withCredentials: true }
        );
        console.log("After axios request", res.data);
        setProfileData(res.data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (err) {
        console.error("Error fetching job seeker profile:", err);
        setLoading(false); // Set loading to false even on error
      }
    };

    fetchProfileData();
  }, [userEmail]);

  const handleEditProfile = () => {
    // Navigate to the edit page (adjust this based on your routing)
    navigate("/employee-profile/edit");
  };

  const handleLogout = () => {
    logout();
    navigate("/employee");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

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
              <a href="/employee-profile" className="link ">
                Home
              </a>
            </li>
            <li>
              <a href="/ref-reqs" className="link">
                Referral requests
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
              <p>
                <strong>Company Name:</strong> {profileData.companyname}
              </p>
              {profileData.level && ( // Check if discipline is not null or undefined
                <p>
                  <strong>Level:</strong> {profileData.level}
                </p>
              )}
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

export default EmployeeProfile;
