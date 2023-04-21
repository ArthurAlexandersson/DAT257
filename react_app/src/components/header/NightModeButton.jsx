import React, {useContext} from "react";
import './header.css';
import {darkModeContext} from '../../App'

const NightModeButton = () => {
  return (
    <button className="nightModeButton"
      onClick={()=>setDarkmode(!isDarkmode)}
      style={{
        backgroundColor: "white",
        padding: 8,
        borderRadius: "4px",
        boxShadow: "rgba(0, 0, 0, 0.3) 0px 1px 4px -1px",
        border: "none",
        cursor: "pointer",
      }}
    >
      Toggle Night Mode
    </button>
  );
};

export default NightModeButton;