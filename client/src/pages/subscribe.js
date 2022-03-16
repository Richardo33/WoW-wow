import React from "react";
import Account from "../component/account";
import "./syling/subscribe.css";
import WowPict from "../asset/Wow.png";
import Pin from "../asset/pin.png";
import { Form, Card, Stack } from "react-bootstrap";

import SendModal from "../component/buttton/modalSend";

function Subscribe() {
  return (
    <div className="subscribeScreen">
      <div className="position-relative leftSide">
        <div className="position-fixed">
          <Account />
        </div>
      </div>

      <div className="rightSide d-flex justify-content-center align-item-center">
        <div className="form">
          <Card className="text-center" border="light">
            <Card.Body className="cardBody">
              <Card.Title>Premium</Card.Title>
              <Card.Text>
                Pay now and access all the latest books from{" "}
                <img src={WowPict} alt="" /> <br />
                <img src={WowPict} alt="" /> : 0981312323
              </Card.Text>
              <Form.Control
                type="text"
                placeholder="Input your account number"
              />
              <br />
              <label>
                Attache proof of transfer
                <input type="file" className="fileInput" gap={3} />
                <img src={Pin} alt="" />
              </label>
              <br /> <br />
              <Stack gap={2} className="col-md-auto mx-auto">
                <SendModal />
              </Stack>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
