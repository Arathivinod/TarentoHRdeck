import React from "react";
import axios from "axios";
import { Container, Row, Col, Card,Image } from "react-bootstrap";
import { useEffect, useState } from "react";

const Variant3Deck = ({ newJoinee }) => {
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
    <Container className="resume-container3">
      <h1 className="p-4" style={{ color: 'blue' }}>
        <center>WELCOME TO TARENTO </center>
      </h1>
      <Row>
        <Col md={4} sm={6} xs={12}>
          <Card className="small-container mt-3">
            <Card.Body>
              <div className="d-flex flex-column justify-content-center align-items-center">
              <Image
                src={src}
                alt={newJoinee.empName}
                roundedCircle
                width="50%"
              />
                <br />
                <b className="emp-name">{newJoinee.empName}</b>
                <br />
                <Card.Text>
                  {newJoinee.roleId && newJoinee.roleId.roleName}
                </Card.Text>
              </div>
            </Card.Body>
          </Card>

          <Card className="small-container mt-3">
            <Card.Body>
              <Card.Title>Contact me through</Card.Title>
              <Card.Text>
                <b>Email:</b> {newJoinee.empEmail} <br />
                <b>Phone:</b> {newJoinee.empPhone}
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="small-container mt-3">
            <Card.Body>
              <Card.Text>
                <b>Experience:</b> {newJoinee.empExperience} years<br />
                <b>Education:</b> {newJoinee.eduId && newJoinee.eduId.eduName}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={8} sm={6} xs={12} className="right-column">
          <Card className="small-container mb-3">
            <Card.Body>
              <Card.Text>
                <b>IBU:</b> {newJoinee.ibuId && newJoinee.ibuId.ibuName}<br />
                <b>Manager:</b> {newJoinee.ibuId && newJoinee.ibuId.manager}<br />
                <b>Core Skills:</b> {newJoinee.empSkills}
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="small-container mb-3">
            <Card.Body>
              <Card.Title>Hometown</Card.Title>
              <Card.Text>{newJoinee.empAddress}</Card.Text>
            </Card.Body>
          </Card>

          <Card className="small-container mb-3">
            <Card.Body>
              <Card.Title>In my free time, I enjoy</Card.Title>
              <Card.Text>{newJoinee.empHobbie}</Card.Text>
            </Card.Body>
          </Card>

          <Card className="small-container mb-3">
            <Card.Body>
              <Card.Title>If I Wasn't in my Current Profession, I would have been</Card.Title>
              <Card.Text>{newJoinee.wwib}</Card.Text>
            </Card.Body>
          </Card>

          <Card className="small-container">
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

export default Variant3Deck;
