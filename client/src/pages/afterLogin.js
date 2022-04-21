// import React, { useState } from "react";
import Account from "../component/account";
import SubscribeBook from "../asset/Frame1.png";
// import { dataForBook } from "../component/dataDummy/listBook";
import { Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import { API } from "../config/api";
// import { Navigate } from "react-router-dom";
// import { dataMyBook } from "../component/dataDummy/myListBook";

import { useNavigate } from "react-router-dom";

function AfterLogin() {
  // console.log(dataForBook);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  // function handleShow() {
  //   setShow(true);
  // }

  const navigate = useNavigate();

  const [book, setBook] = useState([]);

  const getBooks = async () => {
    try {
      // console.log(book);
      const response = await API.get("/showbooks");
      setBook(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  const handleDetail = (id) => {
    navigate(`/bookDetail/${id}`);
  };

  return (
    <div className="pageBar row">
      <Modal show={show} onHide={handleClose} className="text-danger">
        <div className="px-5 py-3">
          PLEASE SUBSCRIBE FIRST TO ACCESS THE BOOKS
        </div>
      </Modal>

      <div className="row">
        <div className="col-3 position-relative">
          <div className="position-fixed">
            <Account />
          </div>
        </div>

        <div className="col-9  ">
          <div className="">
            <img src={SubscribeBook} alt="" />
          </div>
          <h2 className="">List Book</h2>
          <div className="row d-flex">
            <div className="row text-center">
              {book.map((item) => {
                console.log(item);
                return (
                  <div
                    key={item.id}
                    className="col-3 text-start"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleDetail(item.id)}
                  >
                    <img
                      src={`http://localhost:5000/uploads/${item.imgCover}`}
                      alt=""
                      style={{
                        width: 200,
                        height: 300,
                        // boxShadow: "5px 5px #888888",
                      }}
                      className="py-2"
                    />
                    <h3>{item.title}</h3>
                    <p>{item.author}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AfterLogin;
