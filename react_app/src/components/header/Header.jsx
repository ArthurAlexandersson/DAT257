import React from "react";
import './header.css';
import NightModeIcon from "./NightModeIcon";
import OpenLeaderboardIcon from './OpenLeaderboardIcon'


function Header(props) {


  return (
      <div className="header">
        <h1>Title</h1>
        <NightModeIcon/>
        <OpenLeaderboardIcon onClick={props.openLeaderboard}/>
      </div>
  );
}
export default Header;