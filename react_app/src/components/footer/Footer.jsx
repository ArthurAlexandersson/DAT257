import * as React from "react";
import './footer.css';
import { useState } from "react";

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
      <button className="button" onClick={handleClose}>Click me!</button>
       </div>
      
  );
}

export default Footer;