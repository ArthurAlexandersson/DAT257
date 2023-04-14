import { useState } from "react";
import "./mapLoader.css";

const MapLoader = () => {
  const [typedText, setTypedText] = useState(".");
  const dots = "...";

  const nextTypedText = dots.slice(
    0,
    typedText.length === dots.length ? 1 : typedText.length + 1
  );

  setTimeout(() => {
    setTypedText(nextTypedText);
  }, 300);

  return (
    <div className="load_div">
      <h1>{"Loading" + typedText}</h1>
    </div>
  );
};

export default MapLoader;
