import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Form, ListGroup, Row } from "react-bootstrap";
import Deck from "./Deck";
import "../App.css";

const ListNewJoinee = () => {
  const [newJoinees, setNewJoinnes] = useState([]);
  const [newJoineeId, setNewJoineeId] = useState(-1);
  const [variant, setVariant] = useState(1); // Set Theme 1 as default
  const [hoveredItemId, setHoveredItemId] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8081/newjoinee/")
      .then((response) => {
        console.log("Fetched data:", response.data);
        setNewJoinnes(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleChange = (event) => {
    setVariant(parseInt(event.target.value, 10));
  };

  const handleListItemClick = (empId) => {
    setNewJoineeId(parseInt(empId));
  };

  console.log("newJoineeId:", newJoineeId);
  console.log("variant:", variant);

  return (
    <Container fluid className="vh-100">
      <Row className=" h-100">
        <Col md={2} className="bg-secondary vh-100">
          <h1 className="text-light">New Joinee </h1>
          <ListGroup as="ol">
            {newJoinees.map((newJoinee) => (
              <ListGroup.Item
                key={newJoinee.empId}
                as="li"
                className={`text-center fw-bold m-2 bg-light text-secondary rounded ${
                  hoveredItemId === newJoinee.empId ? "hovered" : ""
                }`}
                onMouseOver={() => setHoveredItemId(newJoinee.empId)}
                onMouseOut={() => setHoveredItemId(null)}
                onClick={() => handleListItemClick(newJoinee.empId)}
              >
                Employee Id: {newJoinee.empId} <br />
                Employee Name: {newJoinee.empName}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col md={10}>
          
          <Col md={2} className="py-3 ms-auto">
            <Form.Select aria-label="select variant" onChange={handleChange}>
              <option value="1">Theme 1</option>
              <option value="2">Theme 2</option>
              <option value="3">Theme 3</option>
            </Form.Select>
          </Col>

          {newJoineeId !== -1 && variant && (
            <Card>
              <Card.Body>
                <Deck newJoineeId={newJoineeId} variant={variant} />
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ListNewJoinee;