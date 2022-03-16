import React from "react";
import Account from "../component/account";
import "./syling/profilePages.css";
import ProfilePict from "../asset/Rich.png";
import Mail from "../asset/mail.png";
import Gender from "../asset/gender.png";
import Phone from "../asset/phone.png";
import Address from "../asset/address.png";
import { dataMyBook } from "../component/dataDummy/myListBook";
import { Link } from "react-router-dom";
// import { SubsContext } from "../component/hook/subscribeContext";

function ProfilePages() {
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
                    <b>egigans@gmail.com</b>
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
                    <b>Male</b>
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
                    <b>0812-8623-8911</b>
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
                    <b>Perumahan Permata Bintaro Residence C-3</b>
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

        <div className="bottomPart">
          <h1>My List Book</h1>
          {dataMyBook.map((item, index) => {
            return (
              <div key={index} className="listBookkk">
                <Link
                  to="/bookDetail"
                  className="text-muted text-decoration-none"
                >
                  <img src={item.image} alt="" />
                  <h3>{item.title}</h3>
                  <p>{item.author}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProfilePages;
