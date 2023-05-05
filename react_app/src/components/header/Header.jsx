import React, { useContext } from "react";
import "./header.css";
import { Container, Navbar } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import NightModeIcon from "./NightModeIcon";
import LogoSVG from "../../svg/logo.svg";
import LeaderboardIcon from "./LeaderboardIcon";
import { headerContext } from "../../App";
import FilterButton from "./FilterButton";

function Header() {
  const { firetipsPopupShown, setFiretipsPopupShown } =
    useContext(headerContext);
  return (
    <Navbar style={{ backgroundColor: "var(--mainDark)" }} variant="dark">
      <div className="container-fluid">
        <Link to={"/DAT257/"} style={{ textDecoration: "none" }}>
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
        <div className="collapse navbar-collapse" id="navBarNavMarkup">
          <ul class="navbar-nav">
            <a class="nav-item nav-link active" href="#home">
              Home
            </a>
            <a
              class="nav-item nav-link info"
              onClick={() => {
                setFiretipsPopupShown(!firetipsPopupShown);
              }}
            >
              Fire Awareness Tips
            </a>
          </ul>
        </div>

        <div class="ms-auto">
          <NightModeIcon />
          <LeaderboardIcon />
          <FilterButton />
        </div>
      </div>
    </Navbar>
  );
}
export default Header;
