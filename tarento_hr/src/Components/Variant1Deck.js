import React from "react";
import axios from "axios";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { useEffect, useState } from "react";

const Variant1Deck = ({ newJoinee }) => {
  const customCardStyle = {
    backgroundColor:'#d6cade', // Custom background color
    color: '#212529', // Custom text color
  };
  const [src, setSrc] = useState("");
  useEffect(() => {
    axios
      .get(
        `http://localhost:8081/newjoinee/images/download/${newJoinee.empId}`,
        {
          responseType: "blob",
        }
      )
      .then((response) => {
        let imageUrl = URL.createObjectURL(response.data);
        setSrc(imageUrl);
        console.log(response.data);
      })
      .catch((error) => {
        setSrc("");
        console.error(error);
      });
  }, [newJoinee.empId]);

  return (
    <Container className="resume-container1">
      <h1 className="p-4" style={{ color: "blue" }}>
        <center>WELCOME TO TARENTO </center>
      </h1>
      <Row>
       
        {/* Left Column */}
        <Col md={6}>
          {/* Center Card - Photo, Name, Designation, IBU, Skills */}
          <Card className="center-card mb-3" style={customCardStyle}>
            <Card.Body>
              <Image src={src} alt={newJoinee.empName} roundedCircle width="25%" />
              <br />
              <b className="emp-name">{newJoinee.empName}</b>
              <br />
              <Card.Text>{newJoinee.roleId && newJoinee.roleId.roleName}</Card.Text>
              <Card.Text>
                <b>Manager:</b> {newJoinee.ibuId && newJoinee.ibuId.manager}
              </Card.Text>
              <Card.Text>
                <b>IBU:</b> {newJoinee.ibuId && newJoinee.ibuId.ibuName}
              </Card.Text>
              <Card.Text>
                <b>Core Skills:</b> {newJoinee.empSkills}
              </Card.Text>
            </Card.Body>
          </Card>
           {/* Experience */}
           <Card className="emp-info-card mb-3"style={customCardStyle}>
            <Card.Body>
              <Card.Text>
                <b>Experience:</b> {newJoinee.empExperience} years<br />
               </Card.Text>
            </Card.Body>
          </Card>
            {/* Hometown Card */}
            <Card className="emp-info-card mb-3"style={customCardStyle}>
            <Card.Body>
              <Card.Title>Hometown</Card.Title>
              <Card.Text>{newJoinee.empAddress}</Card.Text>
            </Card.Body>
          </Card>
         
        </Col>

        {/* Right Column */}
        <Col md={6}>
          {/* Contact Info Card */}
          <Card className="emp-info-card mb-3"style={customCardStyle}>
            <Card.Body>
              <Card.Title>Contact me through</Card.Title>
              <Card.Text>
                <b>Email:</b> {newJoinee.empEmail} <br />
                <b>Phone:</b> {newJoinee.empPhone}
              </Card.Text>
            </Card.Body>
          </Card>

        
           {/* Education Card */}
           <Card className="emp-info-card mb-3 "style={customCardStyle}>
            <Card.Body>
              <Card.Text>
                <b>Education:</b> {newJoinee.eduId && newJoinee.eduId.eduName}
              </Card.Text>
            </Card.Body>
          </Card>

          {/* Free Time Hobbies Card */}
          <Card className="emp-info-card"style={customCardStyle}>
            <Card.Body>
              <Card.Title>In my free time, I enjoy</Card.Title>
              <Card.Text>{newJoinee.empHobbie}</Card.Text>
            </Card.Body>
          </Card>

          {/* WWIB Card */}
          <Card className="emp-info-card mb-3"style={customCardStyle}>
            <Card.Body>
              <Card.Title>If I Wasn't in my Current Profession, I would have been</Card.Title>
              <Card.Text className="wwib-text">{newJoinee.wwib}</Card.Text>
            </Card.Body>
          </Card>

          {/* Quote Card */}
          <Card className="emp-info-card"style={customCardStyle}>
            <Card.Body>
              <Card.Title>Quote That Fuels Me</Card.Title>
              <Card.Text>"{newJoinee.empQuote}"</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Variant1Deck;


