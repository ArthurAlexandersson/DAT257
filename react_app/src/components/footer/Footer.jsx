import Slider from "react-slider";
import "./footer.css";
import image from "../../img.png";
import * as React from "react";
import { useState, useEffect} from "react";
import { ReactComponent as ButtonImage } from './expand_more.svg';
import { ReactComponent as ButtonImage1 } from './expand_less.svg';


function Footer() {
    const [value1, setValue1] = useState(600);
    const [value2, setValue2] = useState(50);
    const [value3, setValue3] = useState(-600);

    const handleChange1 = (newValue) => {
        setValue1(newValue);
    };

    const handleChange2 = (newValue) => {
        setValue2(newValue);
    };

    const handleChange3 = (newValue) => {
        setValue3(newValue);
    };

    const [isOpen, setOpen] = useState(true);

    const handleClose = () => {
        let footer = document.querySelector('.footer');
        let button = document.querySelector('.button');

        footer.classList.toggle('footer-exit');
        button.classList.toggle('button-active');
        setOpen(!isOpen);
    };
    useEffect(() => {
        const imageElement = document.querySelector(".image-container img");
        if (imageElement) {
            imageElement.style.right = value1;
            imageElement.style.top = value3;
        }
    }, [value1, value2]);


    return (
    <div>
        <div className="footer">
            <div className="slider-container">
                <div className="slider1">
                    <Slider
                        value={value1}
                        onChange={handleChange1}
                        className="slider"
                        thumbClassName="thumb"
                        trackClassName="track"
                        ariaLabel={"Volume 1"}
                        step={10}
                        min={1}
                        max={1000}
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
                        step={10}
                        min={-1450}
                        max={150}
                    />
                </div>
            </div>
        </div>
            <button className="button" onClick={handleClose}>
                {isOpen ? <ButtonImage style={{ width: "10px", height: "10px" }}/> : <ButtonImage1 style={{ width: "10px", height: "10px" }}/>}
            </button>
        <div className="image-container">
            <img
                src={image}
                alt = "image"
                style={{
                    position: "absolute",
                    bottom: value1,
                    width: value2 * 2,
                    right: -value3,
                }}
            />
        </div>
        </div>

    );
}

export default Footer;