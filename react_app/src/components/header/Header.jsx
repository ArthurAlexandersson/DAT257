import * as React from "react";
  
// importing material UI components

import './header.css';

export default function Header() {
  return (
      <div className="Header">
        <h1>FIRE!</h1>
        <button className="Button" onClick={()=> console.log('yeet')}></button>
      </div>
  );
}