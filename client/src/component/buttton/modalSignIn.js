import { useContext, useState } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../pages/syling/modalSignIn.css";
import { UserContext } from "../hook/userContext";

import { API, setAuthToken } from "../../config/api";

function ButtonSignIn() {
  const [show, setShow] = useState(false);

  const [state, dispacth] = useContext(UserContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [message, setMessage] = useState(null);

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { email, password } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const body = JSON.stringify(form);

      const response = await API.post("/login", body, config);
      console.log(response);

      if (response?.status == 200) {
        setAuthToken(response.data.data.token);

        dispacth({
          type: "LOGIN_SUCCESS",
          payload: response.data.data,
        });

        if (response.data.data.role == "admin") {
          navigate("/transactions-admin");
          console.log(response.data.data.role);
        } else {
          navigate("/home");
        }

        const alert = (
          <Alert variant="success" className="py-1">
            Login success
          </Alert>
        );
        setMessage(alert);
        // navigate("/home");
      }
    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          Login failed
        </Alert>
      );
      setMessage(alert);
      console.log(error);
    }
  };
  // console.log(state);

  return (
    <div>
      <Button
        className="px-5 mx-3 fw-bold"
        size="lg"
        variant="secondary"
        onClick={handleShow}
      >
        Sign In
      </Button>

      <Modal
        className="modal"
        show={show}
        onHide={handleClose}
        animation={false}
      >
        <Modal.Title className="mx-4 py-4">Sign In</Modal.Title>

        {message && message}
        <Form onSubmit={handleSubmit}>
          <Form.Group
            className="modalInput"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Control
              className="mb-4"
              type="email"
              value={email}
              placeholder="Email"
              onChange={handleChange}
              name="email"
            />
            <Form.Control
              className="mb-4"
              type="password"
              value={password}
              placeholder="Password"
              onChange={handleChange}
              name="password"
            />
          </Form.Group>
          <Button className="buttSignIn fw-bold" variant="danger" type="submit">
            <p> Sign In </p>
          </Button>
        </Form>

        <Modal.Footer className="justify-content-center">
          Don't have an account ? Klik <b>Here</b>{" "}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ButtonSignIn;
