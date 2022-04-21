import React, { useContext, useEffect, useState } from "react";
import "../pages/syling/afterLogin.css";
import "../pages/syling/account.css";
import Logo2 from "../asset/IconItalic.png";
import ImageProfile from "../asset/Ellipse 1.png";
import IconProfile from "../asset/user 1.png";
import IconSubscribe from "../asset/bill1.png";
import IconLogOut from "../asset/logout1.png";
import { Navbar, Container } from "react-bootstrap";

import { API, setAuthToken } from "../config/api";

import { SubsContext } from "./hook/subscribeContext";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import { UserContext } from "./hook/userContext";
// import { Button } from "bootstrap";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function Account() {
  // const [state, dispacth] = useContext(SubsContext);
  // console.log(state);

  const [dat, setdat] = useState([]);

  const [user, setUser] = useContext(UserContext);
  // console.log(user);

  const userData = async (req, res) => {
    try {
      const res = await API.get("/user");
      // console.log(res);
      setdat(res.data.data.user);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(user);
  useEffect(() => {
    userData();
  }, []);

  const navigate = useNavigate();

  function handleLogout() {
    setUser({
      type: "LOGOUT",
      user: {},
    });
    navigate("/");
  }

  return (
    <div className="leftSide">
      <div className="leftSection">
        <Link className="text-decoration-none text-muted fw-bold" to="/home">
          <img className="pe-3" src={Logo2} alt="" />
        </Link>

        <div className="imageProfile">
          <Link to="/profilePages">
            <img src={ImageProfile} alt="" />
          </Link>
        </div>

        <h3 className="fw-bold mt-3">{dat.fullName}</h3>

        {/* {dat.status == "admin" ? null : dat.isSubs == "true" &&
          dat.status == "user" ? (
          <p className="text-success">Subscribed</p>
        ) : (
          <p>not subscrIbed yet</p>
        )} */}

        {dat.isSubs == "true" ? (
          <p className="text-success">Subscribed</p>
        ) : (
          <p>not Subscribed</p>
        )}
      </div>
      <hr />

      <Navbar bg="" className="mt-3" fixed>
        <Container>
          <Navbar.Brand>
            <Link
              className="text-decoration-none text-muted fw-bold "
              to="/profilePages"
            >
              <img className="pe-3" src={IconProfile} alt="" />
              Profile
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar bg="">
        <Container>
          <Navbar.Brand>
            <Link
              className="text-decoration-none text-muted fw-bold"
              to="/subscribe"
            >
              <img className="pe-2" src={IconSubscribe} alt="" />
              Subscribe
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <hr />

      <Navbar bg="">
        <Container>
          <Navbar.Brand>
            <button
              className="text-secondary fw-bold"
              style={{ border: "none" }}
              onClick={handleLogout}
            >
              <img className="pe-3" src={IconLogOut} alt="" />
              Logout
            </button>
            {/* <Link className="text-decoration-none text-muted fw-bold" to="/">
              <img className="pe-3" src={IconLogOut} alt="" />
              Logout
            </Link> */}
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Account;
