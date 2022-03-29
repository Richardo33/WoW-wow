import React from "react";
import { Navbar, Container, Dropdown } from "react-bootstrap";
import Logo from "../asset/IconItalic.png";
import DropPicture from "../asset/drop.png";
import "../pages/syling/nav.css";
import AddDrop from "../asset/addDrop.png";
import Logout from "../asset/logoutRed.png";
import Trans from "../asset/trans.png";

function Navigasi() {
  return (
    <div>
      <Navbar bg="" variant="" className="navbar pb-3">
        <Container>
          <Navbar.Brand href="/home">
            <img
              alt=""
              src={Logo}
              width="100"
              height="100"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Dropdown>
            <Dropdown.Toggle variant="" id="dropdown-basic" className="dropTop">
              <img src={DropPicture} alt="" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/addBook-admin">
                <img src={AddDrop} alt="" /> Add Book
              </Dropdown.Item>{" "}
              <hr />
              <Dropdown.Item href="/transactions-admin">
                <img src={Trans} style={{ width: "40px" }} alt="" /> Transaction
              </Dropdown.Item>
              <hr />
              <Dropdown.Item href="/">
                <img src={Logout} alt="" /> Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigasi;
