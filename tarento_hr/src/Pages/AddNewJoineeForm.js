import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";

import "../App.css"

const AddNewJoineeForm = () => {
  const [roles, setRoles] = useState([]);
  const [education, setEducation] = useState([]);
  const [eduId, setEduId] = useState(null);
  const [ibus, setIbu] = useState([]);
  const [manager, setManager] = useState("");
  const [empId, setEmpId] = useState(null);
  const [empImage, setEmpImage] = useState(null);
  const [empName, setEmpName] = useState("");
  const [empEmail, setEmpEmail] = useState("");
  const [empPhone, setEmpPhone] = useState(null);
  const [empAddress, setEmpHometown] = useState("");
  const [empExperience, setEmpExperice] = useState(null);
  const [wwib, setEmpWwib] = useState("");
  const [empQuote, setEmpQuote] = useState("");
  const [empRole, setEmpRole] = useState(null);
  const [empIbu, setEmpIbu] = useState(null);
  const [empHobbie, setEmpHobbies] = useState("");
  const [empSkills, setEmpCoreSkills] = useState("");

  const handleEmpIdChange = (e) => {
    setEmpId(parseInt(e.target.value, 10));
  };
  const handleEmpNameChange = (e) => {
    setEmpName(e.target.value);
  };
  const handleEmpEmaliChange = (e) => {
    setEmpEmail(e.target.value);
  };
  const handleEmpExperinceChange = (e) => {
    setEmpExperice(parseInt(e.target.value, 10));
  };
  const handleEmpHometownChange = (e) => {
    setEmpHometown(e.target.value);
  };
  const handleEmpWwibChange = (e) => {
    setEmpWwib(e.target.value);
  };
  const handleEmpQuoteChange = (e) => {
    setEmpQuote(e.target.value);
  };
  const handleEmpRoleChange = (e) => {
    setEmpRole(parseInt(e.target.value, 10));
  };
  const handleEducationChange = (e) => {
    setEduId(parseInt(e.target.value, 10));
  };
  const handleEmpPhoneChange = (e) => {
    setEmpPhone(parseInt(e.target.value, 10));
  };
  const handleEmpHobbiesChange = (e) => {
    setEmpHobbies(e.target.value);
  };
  const handleEmpCoreSkillsChange = (e) => {
    setEmpCoreSkills(e.target.value);
  };
  const handleImageInputChange = (e) => {
    console.log(e.target.files[0]);
    setEmpImage(e.target.files[0]);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8081/roles/")
      .then((response) => {
        setRoles(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    axios
      .get("http://localhost:8081/education/")
      .then((response) => {
        setEducation(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get("http://localhost:8081/ibus/")
      .then((response) => {
        setIbu(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const selectMangerChange = (event) => {
    const selectedIbuId = event.target.value;
    setEmpIbu(parseInt(selectedIbuId, 10));
    const selectedIbuManager = ibus.find((ibu) => ibu.ibuId == selectedIbuId);
    if (selectedIbuManager) {
      setManager(selectedIbuManager.manager);
    } else {
      setManager("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      empId,
      empName,
      empEmail,
      empAddress,
      empExperience,
      empPhone,
      empQuote,
      wwib,
      empHobbie,
      empSkills,
      ibuId: { ibuId: empIbu },
      roleId: { roleId: empRole },
      eduId: { eduId: eduId } // Assuming edu_name is the property in your education data
    };

    console.log(formData);

    axios
      .post("http://localhost:8081/newjoinee/post", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        console.log(response.data);
      })
      .catch((error) => {console.log(error);

    alert("Data submitted successfully");
  });
   const formImage = new FormData();
    formImage.append("file", empImage);

    axios
      .post(
        `http://localhost:8081/newjoinee/images/upload/${empId}`,
        formImage,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };


  return (
  
          <Container className="py-4 h-100">
      <h1>Fill Details </h1>
      <Form onSubmit={handleSubmit}>
        <Card className="my-3">
          <Card.Body>
            <Form.Control
              type="number"
              placeholder="Enter employee id"
              className="my-3"
              onChange={handleEmpIdChange}
            />
            <Form.Control
              type="text"
              placeholder="Enter employee name"
              className="my-3"
              onChange={handleEmpNameChange}
            />
            <Form.Control
              type="email"
              placeholder="Enter employee email"
              className="my-3"
              onChange={handleEmpEmaliChange}
            />
            <Form.Control
              type="number"
              placeholder="Enter emplyee phone number"
              className="my-3"
              onChange={handleEmpPhoneChange}
            />
            <Form.Control
              type="text"
              placeholder="Enter employee hometown"
              className="my-3"
              onChange={handleEmpHometownChange}
            />
            <Form.Control
              type="number"
              placeholder="Enter emloyee experience"
              className="my-3"
              onChange={handleEmpExperinceChange}
            />
            <Form.Control
              type="text"
              placeholder="What would you become if I was not this profession"
              className="my-3"
              onChange={handleEmpWwibChange}
            />
            <Form.Control
              type="text"
              placeholder="Hobbies"
              className="my-3"
              onChange={handleEmpHobbiesChange}
            />
            <Form.Control
              type="text"
              placeholder="Your favourite quote"
              className="my-3"
              onChange={handleEmpQuoteChange}
            />
            <Form.Control
              type="text"
              placeholder="Core Skills"
              className="my-3"
              onChange={handleEmpCoreSkillsChange}
            />
            <Form.Select
              aria-label="roleSelect"
              className="my-3"
              onChange={handleEmpRoleChange}
              >
              <option value={-1}> select the designation</option>
              {roles.map((role, index) => (
                <option key={index} value={role.roleId}>
                  {role.roleName}
                </option>
              ))}
            </Form.Select>
            <Form.Select
              aria-label="eduSelect"
              className="my-3"
              onChange={handleEducationChange}
            >
              <option value={-1}> select highest Education</option>
              {education.map((edu, index) => (
                <option key={index} value={edu.eduId}>
                  {edu.eduName}
                </option>
              ))}
            </Form.Select>
            <Form.Select
              aria-label="ibuSelector"
              className="my-3"
              onChange={selectMangerChange}
            >
              <option value={-1}>select the IBU</option>
              {ibus.map((ibu, index) => (
                <option key={index} value={ibu.ibuId}>
                  {ibu.ibuName}
                </option>
              ))}
            </Form.Select>
            <Form.Control
              type="text"
              placeholder="Manager"
              value={manager}
              readOnly
              className="my-3"
            />
            <Form.Group className="my-3">
                <Form.Label>Insert your picture (max size 50kb)</Form.Label>
                <Form.Control type="file" onChange={handleImageInputChange} />
              </Form.Group>
          
            <Button variant="primary" type="submit" className="mx-4">
              Submit
            </Button>
            {/* <Link to="/deck" className="btn btn-primary">
              View The deck
            </Link> */}
          </Card.Body>
        </Card>
      </Form>
    </Container>
  );
};

export default AddNewJoineeForm;
