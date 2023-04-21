import * as React from "react";

import './header.css';
import NightModeIcon from "./NightModeIcon";


function Header(props) {
  return (
      <div className="header">
        <h1>Title</h1>
        <NightModeIcon onClick={props.toggleNightMode}/>
      </div>
  );
}
export default Header;