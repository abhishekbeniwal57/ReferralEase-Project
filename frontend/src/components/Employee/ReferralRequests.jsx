// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';
// import "../../styles/Employee/ReferralRequests.css";

// const ReferralRequests = () => {
//     const [requests, setRequests] = useState([]);

//     useEffect(() => {
//         // Replace with your actual API URL
//         axios.get('http://localhost:8090/api/v1/referral/requests/352')
//             .then(response => {
//                 setRequests(response.data);
//             })
//             .catch(error => {
//                 console.error("There was an error fetching the referral requests!", error);
//             });
//     }, []);

//     return (
//         <Container className="referral-requests-container">
//             <h2 className="my-4">Referral Requests Dashboard</h2>
//             <Row>
//                 {requests.length > 0 ? (
//                     requests.map((request, index) => (
//                         <Col sm="12" md="6" lg="4" key={index} className="mb-3">
//                             <Card className="referral-card">
//                                 <CardBody className="referral-card-body">
//                                     <CardTitle tag="h5" className="referral-card-title">{request.companyname}</CardTitle>
//                                     <CardText className="referral-card-text"><strong>Job ID:</strong> {request.jobId}</CardText>
//                                     <CardText className="referral-card-text"><strong>Job Link:</strong> <a href={request.jobLink} target="_blank" rel="noopener noreferrer">{request.jobLink}</a></CardText>
//                                     <CardText className="referral-card-text"><strong>Qualification:</strong> {request.qualification}</CardText>
//                                     <CardText className="referral-card-text"><strong>Additional Info:</strong> {request.additionalInfo}</CardText>
//                                     <CardText className="referral-card-text"><strong>Resume Link:</strong> <a href={request.resumeLink} target="_blank" rel="noopener noreferrer">{request.resumeLink}</a></CardText>
//                                 </CardBody>
//                             </Card>
//                         </Col>
//                     ))
//                 ) : (
//                     <p>No referral requests found.</p>
//                 )}
//             </Row>
//         </Container>
//     );
// };

// export default ReferralRequests;


// import React, { useState, useEffect, useContext } from "react";
// import { Card, CardBody } from "reactstrap";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../contexts/AuthContext";
// import "../../styles/Employee/ReferralRequests.css";

// const ReferralRequests = () => {
//   const [requests, setRequests] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const { userEmail, logout } = useContext(AuthContext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchRequests = async () => {
//       try {
//         const res = await axios.get(
//           `http://localhost:8090/api/v1/referral/requests/352`,
//           { withCredentials: true }
//         );
//         setRequests(res.data);
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching referral requests:", err);
//         setLoading(false);
//       }
//     };

//     fetchRequests();
//   }, []);

//   const handleLogout = () => {
//     logout();
//     navigate("/employee");
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
//             <p>REFERRALEASE</p>
//           </a>
//         </div>
//         <div className="nav-menu" id="navMenu">
//           <ul>
//             <li>
//               <a href="/employee-profile" className="link">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="/ref-reqs" className="link">
//                 Referral Requests
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
//             <li>
//               <a href="#" className="link" onClick={handleLogout}>
//                 Logout
//               </a>
//             </li>
//           </ul>
//         </div>
//       </nav>

//       {/* Referral Requests Display */}
//       <div className="requests-container">
//         <h1>Referral Requests</h1>
//         {requests.length === 0 ? (
//           <p>No referral requests found.</p>
//         ) : (
//           requests.map((request, index) => (
//             <Card key={index} className="request-card">
//               <CardBody>
//                 <h2>{request.companyname}</h2>
//                 <p>
//                   <strong>Job ID:</strong> {request.jobId}
//                 </p>
//                 <p>
//                   <strong>Job Link:</strong> <a href={request.jobLink} target="_blank" rel="noopener noreferrer">{request.jobLink}</a>
//                 </p>
//                 <p>
//                   <strong>Qualification:</strong> {request.qualification}
//                 </p>
//                 <p>
//                   <strong>Additional Info:</strong> {request.additionalInfo}
//                 </p>
//                 <p>
//                   <strong>Resume Link:</strong> <a href={request.resumeLink} target="_blank" rel="noopener noreferrer">{request.resumeLink}</a>
//                 </p>
//               </CardBody>
//             </Card>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default ReferralRequests;

import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext"; // Ensure this line is present
import "../../styles/Employee/ReferralRequests.css";

const ReferralRequests = () => {
  const [referralRequests, setReferralRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const { userEmail } = useContext(AuthContext);

  useEffect(() => {
    const fetchReferralRequests = async () => {
      try {
        // Replace `userEmail` with `employeeId` in the URL
        const employeeId = 352; // Use the appropriate employee ID here
        const res = await axios.get(
          `http://localhost:8090/api/v1/referral/requests/${employeeId}`,
          { withCredentials: true }
        );
        setReferralRequests(res.data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (err) {
        console.error("Error fetching referral requests:", err);
        setLoading(false); // Set loading to false even on error
      }
    };

    fetchReferralRequests();
  }, []);

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
              <a href="/ref-reqs" className="link active">
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
              <a href="#" className="link" onClick={() => {
                // Add logout logic here if needed
              }}>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Referral Requests Section */}
      <div className="profile-container">
        <div className="welcome-text">
          <h1>Referral Requests</h1>
        </div>
        <div className="card-container">
          {referralRequests.length > 0 ? (
            referralRequests.map((request, index) => (
              <div key={index} className="request-card">
                <h3>{request.companyname}</h3>
                <p><strong>Resume Link:</strong> <a href={request.resumeLink} target="_blank" rel="noopener noreferrer">{request.resumeLink}</a></p>
                <p><strong>Job ID:</strong> {request.jobId}</p>
                <p><strong>Job Link:</strong> <a href={request.jobLink} target="_blank" rel="noopener noreferrer">{request.jobLink}</a></p>
                <p><strong>Qualification:</strong> {request.qualification}</p>
                <p><strong>Additional Info:</strong> {request.additionalInfo}</p>
              </div>
            ))
          ) : (
            <p>No referral requests found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReferralRequests;
