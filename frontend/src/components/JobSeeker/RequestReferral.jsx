// import React, { useEffect, useState, useContext } from "react";
// import { Card, CardBody } from "reactstrap";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../contexts/AuthContext"; // Make sure this line is present
// import "../../styles/JobSeeker/RequestReferral.css";

// const RequestReferral = () => {
//   const [companies, setCompanies] = useState([]);
//   const { userEmail } = useContext(AuthContext);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchCompanies = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:8090/api/v1/companies`
//         );
//         setCompanies(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching companies:", error);
//         setLoading(false);
//       }
//     };

//     fetchCompanies();
//   }, []);

//   const openCareersLink = (link) => {
//     window.open(link, "_blank");
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <div className="wrapper">
//         {/* Navigation Bar */}
//         <nav className="nav">
//           <div className="nav-logo">
//             <a href="/jobseeker-profile" className="link">
//               <p>REFERRALEASE. </p>
//             </a>
//           </div>
//           <div className="nav-menu" id="navMenu">
//             <ul>
//               <li>
//                 <a href="/jobseeker-profile" className="link ">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a href="/req-ref" className="link">
//                   Request Referral
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="link">
//                   Referral Tracker
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="link">
//                   About
//                 </a>
//               </li>
//               {/* <div className="user-dropdown">
//                 <span>User</span>
//                 <div className={`dropdown-icon`}>
//                   &#9660;
//                 </div>
//                 <DropdownMenu />
//               </div> */}
//             </ul>
//           </div>
//         </nav>

//         {/* Company List */}
//         <div>
//           <h1>Company List</h1>
//           <div className="company-container">
//             {companies.map((company) => (
//               <div key={company.id} className="company-card">
//                 <h3>{company.companyname}</h3>
//                 <div className="company-buttons">
//                   <button onClick={() => openCareersLink(company.companycareer)}>
//                     Careers
//                   </button>
//                   <button onClick={() => alert("Request Referral clicked")}>
//                     Request Referral
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RequestReferral;

// ---------------------------------------

import React, { useEffect, useState, useContext } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Label,
  FormGroup,
} from "reactstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import "../../styles/JobSeeker/RequestReferral.css";

const RequestReferral = () => {
  const [companies, setCompanies] = useState({});
  const { userEmail, logout } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    jobseeker_name: "",
    companyname: "",
    resumeLink: "",
    jobId: "",
    jobLink: "",
    qualification: "",
  });
  const [selectedCompany, setSelectedCompany] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8090/api/v1/companies`
        );
        setCompanies(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching companies:", error);
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  const toggleModal = (companyname) => {
    setSelectedCompany(companyname);
    setModalOpen(!modalOpen);
    setFormData((prevState) => ({ ...prevState, companyname }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const submitReferralRequest = async () => {
    try {
      const response = await axios.post(
        `http://localhost:8090/api/v1/referral/request?jobseekerEmail=${userEmail}`,
        {
          ...formData,
          userEmail, // Include user email from context
        }
      );
      alert("Referral request sent successfully!");
      setModalOpen(false);
    } catch (error) {
      console.error("Error sending referral request:", error);
      alert("Failed to send referral request.");
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="wrapper">
        {/* Navigation Bar */}
        <nav className="nav">
          <div className="nav-logo">
            <a href="/jobseeker-profile" className="link">
              <p>REFERRALEASE.</p>
            </a>
          </div>
          <div className="nav-menu" id="navMenu">
            <ul>
              <li>
                <a href="/jobseeker-profile" className="link">
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

        {/* Company List */}
        <div>
          <h1>Company List</h1>
          <div className="company-container">
            {companies.map((company) => (
              <div key={company.id} className="company-card">
                <h3>{company.companyname}</h3>
                <div className="company-buttons">
                  <button
                    onClick={() => window.open(company.companycareer, "_blank")}
                  >
                    Careers
                  </button>
                  <button onClick={() => toggleModal(company.companyname)}>
                    Request Referral
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Referral Request Modal */}
        <Modal isOpen={modalOpen} toggle={() => setModalOpen(!modalOpen)}>
          <ModalHeader toggle={() => setModalOpen(!modalOpen)}>
            Request Referral for {selectedCompany}
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="jobseeker_name">Name</Label>
              <Input
                type="text"
                name="name"
                value={formData.jobseeker_name}
                onChange={handleInputChange}
                placeholder="Enter your name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="resumeLink">Resume Link</Label>
              <Input
                type="url"
                name="resumeLink"
                value={formData.resumeLink}
                onChange={handleInputChange}
                placeholder="Enter your resume link"
              />
            </FormGroup>
            <FormGroup>
              <Label for="jobId">Job ID</Label>
              <Input
                type="text"
                name="jobId"
                value={formData.jobId}
                onChange={handleInputChange}
                placeholder="Enter the job ID"
              />
            </FormGroup>
            <FormGroup>
              <Label for="jobLink">Job Link</Label>
              <Input
                type="url"
                name="jobLink"
                value={formData.jobLink}
                onChange={handleInputChange}
                placeholder="Enter the job link"
              />
            </FormGroup>
            <FormGroup>
              <Label for="qualification">Qualification</Label>
              <Input
                type="text"
                name="qualification"
                value={formData.qualification}
                onChange={handleInputChange}
                placeholder="Enter your qualifications"
              />
            </FormGroup>
            <FormGroup>
              <Label for="additionalInfo">Additional Information</Label>
              <Input
                type="textarea"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleInputChange}
                placeholder="Enter any additional information"
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={submitReferralRequest}>
              Submit Request
            </Button>{" "}
            <Button color="secondary" onClick={() => setModalOpen(false)}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
};

export default RequestReferral;
