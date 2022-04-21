import React from "react";
import Account from "../component/account";
import "./syling/profilePages.css";
import ProfilePict from "../asset/Rich.png";
import Mail from "../asset/mail.png";
import Gender from "../asset/gender.png";
import Phone from "../asset/phone.png";
import Address from "../asset/address.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { API } from "../config/api";
import { useEffect } from "react";
import Delete from "../asset/del.png"
import {Alert} from "react-bootstrap"

function ProfilePages() {
  const navigate = useNavigate();
  const [myBooks, setMyBooks] = useState([]);
  const [message, setMessage] = useState(null)

  const getMyBooks = async () => {
    try {
      const response = await API.get("/myListBook");
      setMyBooks(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteMyBooks= async(idBooks) => {
    try {
      const id = idBooks

      const response = await API.delete(`/deleteListBook/${id}`)

      if (response.status == 200){
        const alert = <Alert variant="success">
        Success removed book
      </Alert>
      setMessage(alert)
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleDetail = (id) => {
    navigate(`/bookDetail/${id}`);
  };

  useEffect(() => {
    getMyBooks();
  }, []);

  return (
    <div className="profileScreen">
      <div className="leftSide position-relative">
        <div className="position-fixed">
          <Account />
        </div>
      </div>
    
      <div className="rightPart">
        <h1>Profile</h1>
        <div className="topPart">
          <div className="leftDiv">
            <div>
              <div className="mail">
                <div className="Icon">
                  <img src={Mail} alt="" />
                </div>
                <div className="iconName">
                  <p>
                    <b style={{ color: "black" }}>egigans@gmail.com</b>
                  </p>
                  <p style={{ color: "gray" }}>Email</p>
                </div>
              </div>
              <div className="gender">
                <div className="Icon">
                  <img src={Gender} alt="" />
                </div>
                <div className="iconName">
                  <p>
                    <b style={{ color: "black" }}>Male</b>
                  </p>
                  <p style={{ color: "gray" }}>Gender</p>
                </div>
              </div>
              <div className="phone">
                <div className="Icon">
                  <img src={Phone} alt="" />
                </div>
                <div className="iconName">
                  <p>
                    <b style={{ color: "black" }}>0812-8623-8911</b>
                  </p>
                  <p style={{ color: "gray" }}>Mobile phone</p>
                </div>
              </div>
              <div className="address">
                <div className="Icon">
                  <img src={Address} alt="" />
                </div>
                <div className="IconName">
                  <p>
                    <b style={{ color: "black" }}>
                      Perumahan Permata Bintaro Residence C-3
                    </b>
                  </p>
                  <p style={{ color: "gray" }}>Address</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rightDiv">
            <div>
              <div>
                <img src={ProfilePict} alt="" />
              </div>
              <div>
                <button>Edit Profile</button>
              </div>
            </div>
          </div>
        </div>
        {message}
        <div className="bottomPart">
          <h1>My List Book</h1>
          <div className="d-flex row">
            {myBooks.map((item, index) => {
              console.log(item);
              return (
                <div className="listBookkk col-3">
                  <div
                    className=" text-start mb-5"
                    style={{height: 450}}
                  >
                    <img
                      style={{ height: 300, width: 200, cursor:"pointer" }}
                      onClick={() => {
                        handleDetail(item.books.id);
                      }}
                      src={`http://localhost:5000/uploads/${item.books.imgCover}`}
                      alt=""
                    />
                    <div onClick={()=>deleteMyBooks(item.idBooks)} style={{width: 200, backgroundColor: "#fff", textAlign: "center", margin: "5% 0", cursor:"pointer"}}>
                      <img style={{ height: "auto", width: 30}} src={Delete} alt="" />
                    </div>
                    <h3 style={{cursor: "pointer"}} onClick={() => {
                        handleDetail(item.books.id);
                      }}>{item.books.title}</h3>
                    <p>{item.books.author}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePages;
