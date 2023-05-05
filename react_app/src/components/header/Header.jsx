import React from "react";
import "./header.css";
import { Container, Navbar } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import NightModeIcon from "./NightModeIcon";
import LogoSVG from "../../svg/logo.svg";
import LeaderboardIcon from "./LeaderboardIcon";

function Header() {
  return (
    <Navbar style={{ backgroundColor: "var(--mainDark)" }} variant="dark">
      <Container>
        <Link to={"/DAT257/"} style={{ textDecoration: 'none' }}>
        <Navbar.Brand>

          <img
            alt=""
            src={LogoSVG}
            width="30px"
            height="30px"
            className="d-inline-block align-top"
          />{" "}
          FireWatcher

        </Navbar.Brand>
        </Link>

        <form class="form-inline">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="Search"
              aria-label="Search"
            />

            <button type="submit" class="btn btn-outline-secondary  ">
              Search
            </button>
          </div>
        </form>

        <div class="ms-auto">
          <NightModeIcon />
          <LeaderboardIcon />
        </div>
      </Container>
    </Navbar>
  );
}
export default Header;
