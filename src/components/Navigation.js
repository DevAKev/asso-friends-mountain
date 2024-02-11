import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { Nav, Navbar } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import DonationsModal from "../components/DonationsModal";

const Navigation = () => {
  return (
    <div>
      {/* Modal DON */}
      <DonationsModal />
      <Navbar
        className="navigation navbar sticky-top"
        collapseOnSelect
        expand="lg"
      >
        <Navbar.Brand href="/">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink to="/" className="nav-link" activeclassname="nav-active">
              Accueil
            </NavLink>
            <NavLink
              to="/events"
              className="nav-link"
              activeclassname="nav-active"
            >
              Nos évènements
            </NavLink>
            <NavLink
              to="/subscribe"
              className="nav-link"
              activeclassname="nav-active"
            >
              Devenez adhérent
            </NavLink>
            <NavLink
              to="/members"
              className="nav-link"
              activeclassname="nav-active"
            >
              Espaces membres
            </NavLink>

            {/* Button DON */}
            <button
              type="button"
              className="btn btn-success"
              data-bs-toggle="modal"
              data-bs-target="#confirmDon"
            >
              Faire un don
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="16"
                fill="currentColor"
                className="bi bi-heart-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                />
              </svg>
            </button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
