import React from "react";
import { Navbar, Container, Dropdown } from "react-bootstrap";
import Logo from "../asset/IconItalic.png";
import DropPicture from "../asset/drop.png";
import "../pages/syling/nav.css";
import AddDrop from "../asset/addDrop.png";
import Logout from "../asset/logoutRed.png";

function Navigasi() {
  return (
    <div>
      <Navbar bg="" variant="" fixed="top" className="navbar">
        <Container>
          <Navbar.Brand href="#home">
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
              <Dropdown.Item href="#/action-1">
                <img src={AddDrop} alt="" /> Add Book
              </Dropdown.Item>{" "}
              <hr />
              <Dropdown.Item href="#/action-2">
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
