import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../pages/syling/modalSignUp.css";

function ButtonSignUp() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/home");
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

        <Form>
          <Form.Group className="modalInput" controlId="inputInSignUp">
            <Form.Control className="mb-4" type="email" placeholder="Email" />
            <Form.Control
              className="mb-4"
              type="password"
              placeholder="Password"
            />
            <Form.Control
              className="mb-4"
              type="text"
              placeholder="Full Name"
            />
          </Form.Group>
        </Form>

        <Button className="buttSignUp" variant="danger" onClick={handleSignUp}>
          <p> Sign Up </p>
        </Button>

        <Modal.Footer className="justify-content-center">
          Already have an account ? Klik <b>Here</b>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ButtonSignUp;
