import React, { useState } from "react";
import Navigasi from "../component/nav";
import { Form } from "react-bootstrap";
import KlipWhite from "../asset/klipWhite.png";
import "./syling/addBook.css";
import PinWhite from "../asset/pinWhite.png";
// import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { API } from "../config/api";
// import { Navigate } from "react-router-dom";

function AddBook() {
  // const [preview, setPreview] = useState(null);
  // const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    publicationsDate: "",
    pages: "",
    author: "",
    isbn: "",
    about: "",
    bookFile: "",
    imgCover: "",
  });

  // const handleAlert = (e) => {
  //   if (response.status == "success") {
  //     Swal.fire("Well Done!", "Add Book Successfully!", "success");
  //   } else {
  //   }
  // };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      // Configuration Content-type
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };

      // Data body
      const formData = new FormData();
      formData.set("title", form.title);
      formData.set("publicationsDate", form.publicationsDate);
      formData.set("pages", form.pages);
      formData.set("author", form.author);
      formData.set("isbn", form.isbn);
      formData.set("about", form.about);
      formData.set("bookFile", form.bookFile[0], form.bookFile[0].name);
      formData.set("imgCover", form.imgCover[0], form.imgCover[0].name);

      // console.log(formData);
      // Insert data user to database
      const response = await API.post("/addbook", formData, config);
      console.log(response);

      if (response.status === 200) {
        Swal.fire("Well Done!", "Add Book Successfully!", "success");
      } else {
        Swal.fire("failed!", "cannot added book!", "warning");
      }
    } catch (error) {
      Swal.fire("failed!", "cannot added book!", "warning");
      console.log(error);
    }
  };

  return (
    <div className="addBookScreen">
      <div>
        <Navigasi />
      </div>

      <div className="fillScreen py-2" style={{ padding: "10%" }}>
        <h1>Add Book</h1>
        <Form onSubmit={handleSubmit} className="">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="text"
              placeholder="Title"
              name="title"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="text"
              placeholder="Publication Date"
              name="publicationsDate"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="text"
              placeholder="Pages"
              name="pages"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group
            className="text mb-3"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Control
              type="text"
              placeholder="Author"
              name="author"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="text"
              placeholder="ISBN"
              name="isbn"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="About This Book"
              name="about"
              onChange={handleChange}
            />
          </Form.Group>
          <div className="buttom">
            <div>
              <label>
                Attache Book File
                <input
                  type="file"
                  className="addFile"
                  name="bookFile"
                  gap={3}
                  onChange={handleChange}
                />
                <img src={KlipWhite} alt="" />
              </label>
              <label className="mx-3">
                Add image cover
                <input
                  type="file"
                  className="addFile"
                  name="imgCover"
                  gap={3}
                  onChange={handleChange}
                />
                <img src={KlipWhite} alt="" />
              </label>
            </div>

            <div className="buttonLogout">
              <button type="submit">
                Add Book <img src={PinWhite} alt="" />
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default AddBook;
