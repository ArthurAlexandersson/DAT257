import React from "react";
import "./header.css";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import NightModeIcon from "./NightModeIcon";
import LogoSVG from "../../svg/logo.svg";
import LeaderboardIcon from "./LeaderboardIcon";
import SearchBar from "./SearchBar";

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
      </Container>
    </Navbar>
  );
}
export default Header;
