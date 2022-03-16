import React from "react";
import Navigasi from "../component/nav";
import { Form } from "react-bootstrap";
import KlipWhite from "../asset/klipWhite.png";
import "./syling/addBook.css";
import PinWhite from "../asset/pinWhite.png";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const navigate = useNavigate();
  function handleAddBookAdmin() {
    navigate("/transactions");
  }

  return (
    <div className="addBookScreen">
      <div>
        <Navigasi />
      </div>

      <div className="fillScreen" style={{ padding: "10%" }}>
        <h1>Add Book</h1>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="Title" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="Publication Date" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="Pages" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="Author" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="ISBN" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="About This Book"
            />
          </Form.Group>
        </Form>
        <div className="buttom">
          <div>
            <label>
              Attache Book File
              <input type="file" className="addFile" gap={3} />
              <img src={KlipWhite} alt="" />
            </label>
          </div>
          <div className="buttonLogout">
            <button onClick={handleAddBookAdmin}>
              Add Book <img src={PinWhite} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBook;
