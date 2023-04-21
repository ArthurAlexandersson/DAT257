import React from "react";
import './header.css';
const NightModeButton = ({ onClick }) => {
  return (
    <button className="nightModeButton"
      onClick={onClick}
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