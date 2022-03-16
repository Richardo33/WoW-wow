import React, { useContext } from "react";
import "../pages/syling/afterLogin.css";
import "../pages/syling/account.css";
import Logo2 from "../asset/IconItalic.png";
import ImageProfile from "../asset/Ellipse 1.png";
import IconProfile from "../asset/user 1.png";
import IconSubscribe from "../asset/bill1.png";
import IconLogOut from "../asset/logout1.png";
import { Navbar, Container } from "react-bootstrap";

import { SubsContext } from "./hook/subscribeContext";
// import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

function Account() {
  const [state, dispacth] = useContext(SubsContext);

  console.log(state);

  // const navigate = useNavigate();

  // const handleAfteLogIn = () => {
  //   navigate("/home");
  // };

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

        <h3 className="fw-bold mt-3">Richardddddd</h3>
        <p>
          {state.isSubs ? (
            <p className="text-success">Subscribed</p>
          ) : (
            <p>Not Subscribed Yet</p>
          )}
        </p>
      </div>
      <hr />

      <Navbar bg="" className="mt-3" fixed>
        <Container>
          <Navbar.Brand>
            {" "}
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
            <Link className="text-decoration-none text-muted fw-bold" to="/">
              <img className="pe-3" src={IconLogOut} alt="" />
              Logout
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Account;
