import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import "./Navbar.css";
import { assets } from "../Assets/images";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="navigation flex items-center justify-between w-full py-4">
        <div className="nav-logo xl:block min-[320px]:hidden">
          <Link to="/">
            <img src={assets.logo} alt="logo" />
          </Link>
        </div>
        <Navbar expand="lg" className="lg:w-auto md:w-4/12 min-[320px]:w-full">
          <Navbar.Brand className="xl:hidden">
            <Link to="/">
              <img src={assets.logo} alt="logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto gap-4">
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/category">Category</Link>
              </Nav.Link>
              <Nav.Link><Link to="/about">About</Link></Nav.Link>
              <Nav.Link><Link to="/contact">Contact</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div className="lg:block md:block sm:block min-[320px]:hidden">
          <form>
            <input
              className="py-2 px-6 rounded-full text-grey fas"
              type="search"
              placeholder="&#xF002; Search something here!"
            />
          </form>
        </div>

        <div className="lg:block md:block sm:block min-[320px]:hidden">
          <button
            type="button"
            href="#"
            className="rounded-full text-white bg-blue-950 py-2 px-6 font-bold"
          >
            Join the community
          </button>
        </div>

        <div className="xl:block min-[320px]:hidden">
          <Dropdown>
            <Dropdown.Toggle
              id="dropdown-basic"
              className="flex bg-transparent border-none text-blue-950 items-center gap-2 hover:text-black"
            >
              <img src={assets.star} alt="star" />
              VND
            </Dropdown.Toggle>

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
