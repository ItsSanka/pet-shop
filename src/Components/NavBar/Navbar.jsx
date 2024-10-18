import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import "./Navbar.css";
import { assets } from "../Assets/images";

function NavBar() {
  const [menu, setMenu] = useState("home");
  return (
    <>
      <div className="navigation flex items-center justify-between w-full py-4">
        <div className="nav-logo">
          <img src={assets.logo} alt="logo" />
        </div>
        <Navbar expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto gap-4">
              <Nav.Link
                onClick={() => {
                  setMenu("shop");
                }}
                href="#home"
              >
                Home{menu === "shop" ? <hr /> : <></>}
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  setMenu("category");
                }}
                href="#link"
              >
                Category{menu === "category" ? <hr /> : <></>}
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  setMenu("about");
                }}
                href="#link"
              >
                About{menu === "about" ? <hr /> : <></>}
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  setMenu("contact");
                }}
                href="#link"
              >
                Contact{menu === "contact" ? <hr /> : <></>}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div>
          <form>
            <input
              className="py-2 px-6 rounded-full text-grey fas"
              type="search"
              placeholder="&#xF002; Search something here!"
            />
          </form>
        </div>

        <div>
          <button
            type="button"
            href="#"
            className="rounded-full text-white bg-blue-950 py-2 px-6 font-bold"
          >
            Join the community
          </button>
        </div>

        <div>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" className="flex bg-transparent border-none text-blue-950 items-center gap-2 hover:text-black"><img src={assets.star} alt="star" />VND</Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">VND</Dropdown.Item>
              <Dropdown.Item href="#/action-2">USD</Dropdown.Item>
              <Dropdown.Item href="#/action-3">LKR</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </>
  );
}

export default NavBar;
