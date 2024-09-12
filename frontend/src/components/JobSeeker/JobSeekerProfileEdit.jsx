// JobSeekerProfileEdit.js

import React, { useState, useContext, useEffect } from "react";
import { Card, CardBody, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext"; // Make sure this line is present
import "../../styles/JobSeeker/JobSeekerProfileEdit.css";

const JobSeekerProfileEdit = () => {
  const { userEmail } = useContext(AuthContext);
  const [updatedProfile, setUpdatedProfile] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8090/api/v1/jobseeker-profile/edit?email=${userEmail}`,
          { withCredentials: true }
        );
        setUpdatedProfile(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching job seeker profile for edit:", err);
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [userEmail]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSaveProfile = async () => {
    try {
      await axios.put(
        `http://localhost:8090/api/v1/jobseeker-profile/update?email=${userEmail}`,
        updatedProfile,
        { withCredentials: true }
      );
      navigate("/jobseeker-profile"); // Navigate back to the profile page after saving
    } catch (err) {
      console.error("Error updating job seeker profile:", err);
    }
  };

  const handleCancel = () => {
    navigate("/jobseeker-profile"); // Navigate back to the profile page without saving
  };

  if (loading) {
    return <div>Loading...</div>;
  }

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
              <a href="/jobseeker-profile" className="link ">
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
      </nav>

      {/* Edit Profile Form */}
      <div className="profile-container">
        <div className="welcome-text">
          <h1>Edit Your Profile</h1>
        </div>
        <div className="card-container">
          <Card className="card position-static top-20 start-20">
            <CardBody>
              <FormGroup>
                <Label for="firstname">First Name</Label>
                <Input
                  type="text"
                  name="firstname"
                  id="firstname"
                  value={updatedProfile.firstname}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="lastname">Last Name</Label>
                <Input
                  type="text"
                  name="lastname"
                  id="lastname"
                  value={updatedProfile.lastname}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="discipline">Discipline</Label>
                <Input
                  type="select"
                  name="discipline"
                  id="discipline"
                  value={updatedProfile.discipline}
                  onChange={handleInputChange}
                >
                  <option value="">Select Discipline</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Legal & Compilance">Legal & Compilance</option>
                  <option value="Finance & Accouting">
                    Finance & Accouting
                  </option>
                  <option value="Human Resources">Human Resources</option>
                  <option value="Talent & Recruiting">
                    Talent & Recruiting
                  </option>
                  <option value="Product">Product</option>
                  <option value="Design">Design</option>
                  <option value="Data">Data</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Sales and Customer Success">
                    Sales and Customer Success
                  </option>
                  {/* Add more options as needed */}
                </Input>
              </FormGroup>

              <FormGroup>
                <Label for="resumeLink">Resume Link</Label>
                <Input
                  type="resumeLink"
                  name="resumeLink"
                  id="resumeLink"
                  value={updatedProfile.resumeLink}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  value={updatedProfile.email}
                  onChange={handleInputChange}
                  disabled
                />
              </FormGroup>
              {/* Add other form fields for additional profile information */}
              <div className="edit-button">
                <button className="cancel-button" onClick={handleCancel}>
                  Cancel
                </button>
                <button className="save-button" onClick={handleSaveProfile}>
                  Save
                </button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default JobSeekerProfileEdit;
