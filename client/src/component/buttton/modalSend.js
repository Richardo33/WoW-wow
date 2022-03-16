import { Modal, Button } from "react-bootstrap";
import "../../pages/syling/modalSignIn.css";
import { useState, useContext } from "react";
import { SubsContext } from "../hook/subscribeContext";

function SendModal() {
  const [state, dispacth] = useContext(SubsContext);

  const [show, setShow] = useState(false);
  console.log(state);

  const handleClose = () => {
    setShow(false);

    dispacth({
      type: "SUBSCRIBE",
      payload: true,
    });
    console.log(state);
  };

  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Send
      </Button>

      <Modal show={show} onHide={handleClose} className="text-success">
        {/* <Modal.Header closeButton></Modal.Header> */}

        <Modal.Body>
          Thank you for subscribing to premium, your premium package will be
          active after our admin approves your transaction, thank you
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SendModal;
