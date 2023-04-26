import Slider from "react-slider";
import "./footer.css";
import image from "../../img.png";
import * as React from "react";
import { useState } from "react";
import { ReactComponent as ButtonImage } from './expand_more.svg';
import { ReactComponent as ButtonImage1 } from './expand_less.svg';
function Footer() {
    const [value1, setValue1] = useState(30);
    const [value2, setValue2] = useState(25);
    const [value3, setValue3] = useState(70);

    const handleChange1 = (newValue) => {
        setValue1(newValue);
    };

    const handleChange2 = (newValue) => {
        setValue2(newValue);
    };

    const handleChange3 = (newValue) => {
        setValue3(newValue);
    };

    // calculate the image size based on the second slider value
    const imageSize = value2 * 2;

    const [isOpen, setIsOpen] = useState(true);

    // Define the handleClose function
    const handleClose = () => {
        let footer = document.querySelector('.footer');
        let button = document.querySelector('.button');

        footer.classList.toggle('footer-exit');
        button.classList.toggle('button-active');

        // Update the isOpen state
        setIsOpen(!isOpen);
    };


    return (
    <div>
        <div className="footer">
            <img src={image} alt="image" style={{ width: imageSize }} />
            <div className="slider-container">
                <div className="slider1">
                    <Slider
                        value={value1}
                        onChange={handleChange1}
                        className="slider"
                        thumbClassName="thumb"
                        trackClassName="track"
                        ariaLabel={"Volume 1"}
                    />
                </div>
            </div>
            <div className="slider-container">
                <div className="slider2">
                    <Slider
                        value={value2}
                        onChange={handleChange2}
                        className="slider"
                        thumbClassName="thumb"
                        trackClassName="track"
                        ariaLabel={"Volume 2"}
                    />
                </div>
            </div>
            <div className="slider-container">
                <div className="slider3">
                    <Slider
                        value={value3}
                        onChange={handleChange3}
                        className="slider"
                        thumbClassName="thumb"
                        trackClassName="track"
                        ariaLabel={"Volume 3"}
                    />
                </div>
            </div>
        </div>
            <button className="button" onClick={handleClose}>
                {isOpen ? <ButtonImage style={{ width: "10px", height: "10px" }}/> : <ButtonImage1 style={{ width: "10px", height: "10px" }}/>}
            </button>
        </div>

    );
}

export default Footer;
