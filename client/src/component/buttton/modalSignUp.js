import { useState } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../pages/syling/modalSignUp.css";

import { API } from "../../config/api";

function ButtonSignUp() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const [message, setMessage] = useState(null);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { fullName, email, password } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify(form);

      const response = await API.post("/register", body, config);
      console.log(response);
      if (response.data.status == "success bung") {
        console.log(response);
        const alert = (
          <Alert variant="success" className="py-1">
            Success
          </Alert>
        );
        setMessage(alert);
        // navigate("/home");
      } else {
        const alert = (
          <Alert variant="danger" className="py-1">
            Failed
          </Alert>
        );
        setMessage(alert);
      }
    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          Failed
        </Alert>
      );
      setMessage(alert);
    }
  };

  return (
    <div className="buttonnnModal">
      <div className="butt">
        <Button
          className="px-5 ms-3"
          variant="danger"
          size="lg"
          onClick={handleShow}
        >
          Sign Up
        </Button>
      </div>

      <Modal
        className="modalll"
        show={show}
        onHide={handleClose}
        animation={false}
      >
        <Modal.Title className="mx-4 py-4">Sign Up</Modal.Title>
        {message && message}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="modalInput" controlId="inputInSignUp">
            <Form.Control
              className="mb-4"
              type="email"
              placeholder="Email"
              value={email}
              name="email"
              onChange={handleChange}
            />
            <Form.Control
              className="mb-4"
              type="password"
              placeholder="Password"
              value={password}
              name="password"
              onChange={handleChange}
            />
            <Form.Control
              className="mb-4"
              type="text"
              placeholder="Full Name"
              value={fullName}
              name="fullName"
              onChange={handleChange}
            />
          </Form.Group>
          <Button className="buttSignUp fw-bold" variant="danger" type="submit">
            <p> SignUp </p>
          </Button>
        </Form>

        <Modal.Footer className="justify-content-center">
          Already have an account ? Klik <b>Here</b>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ButtonSignUp;
