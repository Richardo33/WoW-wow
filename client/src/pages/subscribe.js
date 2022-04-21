import React from "react";
import Account from "../component/account";
import "./syling/subscribe.css";
import WowPict from "../asset/Wow.png";
import Pin from "../asset/pin.png";
import { Form, Card } from "react-bootstrap";
import { useState } from "react";
import { API } from "../config/api";
// import SendModal from "../component/buttton/modalSend";
import Swal from "sweetalert2";

function Subscribe() {
  const [form, setForm] = useState({
    transactionProof: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.files,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };
      console.log(form.transactionProof[0].name);

      const formData = new FormData();
      formData.set(
        "transactionProof",
        form.transactionProof[0],
        form.transactionProof[0].name
      );

      const response = await API.post("/transaction", formData, config);
      console.log(response);

      if (response.status === 200) {
        Swal.fire(
          "sent your request successfully",
          "Wait for admin to confirm your subscribe!",
          "success"
        );
      } else {
        Swal.fire("failed!", "cannot added transaction!", "warning");
      }
    } catch (error) {
      Swal.fire("failed!", "cannot added transaction!", "warning");
      console.log(error);
    }
  };
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
                <img src={WowPict} alt="" /> : <b>0981312323</b>
              </Card.Text>
              <Form onSubmit={handleSubmit}>
                <Form.Control
                  type="text"
                  placeholder="Input your account number"
                />
                <br />
                {/* <label className="text-start px-2 bg-info text-danger fw-bold mt-3 py-2 ps-3">
                  Attache proof of transfer
                  <input
                    type="file"
                    className="fileInput "
                    name="transactionProof"
                    onChange={handleChange}
                  />
                  <img src={Pin} className="float-end pe-3" alt="" />
                </label> */}
                <label className="col-10 border mt-3 ps-3 py-2 fw-bold text-start text-danger">
                  Attache proof of transfer
                  <input
                    type="file"
                    className="fileInput d-none"
                    name="transactionProof"
                    onChange={handleChange}
                  />
                  <img src={Pin} alt="" className="float-end pe-3" />
                </label>
                <br /> <br />
                {/* <Stack gap={2} className="col-md-auto mx-auto">
                <SendModal />
              </Stack> */}
                <button
                  type="submit"
                  // style={{ width: "10px" }}
                  className="butttonSend"
                >
                  Send
                </button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
