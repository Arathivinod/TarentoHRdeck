import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";

const HRLogin = ({ setAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleLogin = () => {
    // Check if username and password are "HR"
    if (username === "HR" && password === "HR") {
      navigate("/deck")
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <Card style={{ width: "400px", margin: "auto", marginTop: "100px", backgroundColor: "#f8f9fa" }}>
      <Card.Body>
        <Card.Title>HR Login</Card.Title>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Form>
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" onClick={handleLogin} style={{ marginTop: "10px" }}>
            Login
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default HRLogin;
