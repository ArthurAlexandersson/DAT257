import * as React from "react";
import './footer.css';
import { useState } from "react";
import { ReactComponent as ButtonImage } from './expand_more.svg';
import { ReactComponent as ButtonImage1 } from './expand_less.svg';
function Footer() {
  let footer_size=60;
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => {
    const footer = document.querySelector('.footer');
    if (isOpen) {
      footer.classList.add('slide-down');
      footer.classList.remove('slide-up');
      setIsOpen(false);
      footer_size=0;
    } else {
      footer.classList.add('slide-up');
      footer.classList.remove('slide-down');
      setIsOpen(true);
      footer_size=60;
    }
  };
  return (
      <div className={`footer`}> Footer
      <button className="button" onClick={handleClose}>
      {isOpen ? <ButtonImage style={{ width: "10px", height: "10px" }}/> : <ButtonImage1 style={{ width: "10px", height: "10px" }}/>}
      </button>
       </div>
      
  );
}

export default Footer;