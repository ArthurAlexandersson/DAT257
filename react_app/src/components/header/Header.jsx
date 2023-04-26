import React from "react";
import "./header.css";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Form,
  Collapse,
} from "react-bootstrap";
import NightModeIcon from "./NightModeIcon";
import LogoSVG from "../../svg/logo.svg";
import LeaderboardIcon from "./LeaderboardIcon";

function Header() {
  return (
    <Navbar style={{ backgroundColor: "var(--mainDark)" }} variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={LogoSVG}
            width="30px"
            height="30px"
            className="d-inline-block align-top"
          />{" "}
          FireWatcher
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#latest">Latest</Nav.Link>
          <Nav.Link href="#aboutus">About us</Nav.Link>
        </Nav>

        <div className="d-flex justify-content-center align-items-center flex-grow-1">
          <form className="form-inline">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                aria-label="Search"
              />
              <button type="submit" className="btn btn-outline-primary">
                Search
              </button>
            </div>
          </form>
        </div>

        <div className="d-flex align-items-center">
          <NightModeIcon />
          <LeaderboardIcon />
        </div>
      </Container>
    </Navbar>
  );
}
export default Header;
