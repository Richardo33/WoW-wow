// import React, { useState } from "react";
import Account from "../component/account";
import SubscribeBook from "../asset/Frame1.png";
import { dataForBook } from "../component/dataDummy/listBook";
import { Modal } from "react-bootstrap";
import { useState } from "react";

// import { useNavigate } from "react-router-dom";

function AfterLogin() {
  console.log(dataForBook);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  function handleShow() {
    setShow(true);
  }

  return (
    <>
      <Modal show={show} onHide={handleClose} className="text-danger">
        <div className="px-5 py-3">
          PLEASE SUBSCRIBE FIRST TO ACCESS THE BOOKS
        </div>
      </Modal>

      <div className="pageBar">
        <div className="afterLoginLeft position-relative">
          <div className="position-fixed">
            <Account />
          </div>
        </div>

        <div className=" afterLoginRight ">
          <div className="rightTop">
            <img src={SubscribeBook} alt="" />
          </div>
          <h2>List Book</h2>
          <div className="rightBottom">
            <br />

            {dataForBook.map((item, index) => {
              return (
                <div key={index} className="listBookkk" onClick={handleShow}>
                  <img src={item.image} alt="" />
                  <h3>{item.title}</h3>
                  <p>{item.author}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default AfterLogin;
