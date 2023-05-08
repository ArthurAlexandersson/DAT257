import React, { useContext, useState } from "react";
import { useSpring, animated } from "react-spring";
import "./header.css";
import { headerContext } from "../../App";

const LeaderboardIcon = () => {
  const { leaderboardShown, setLeaderboardShown, setFilterShown } = useContext(headerContext);
  const [isPressed, setPressed] = useState(false);

  const properties = {
    opened: {
      transform: "rotate(0deg)",
    },
    closed: {
      transform: "rotate(10deg)",
    },
    springConfig: { mass: 10, tension: 100, friction: 0 },
  };

  const iconPressed = () => {
    setPressed((previous) => !previous);
  };

  const { transform } = properties[isPressed ? "opened" : "closed"];

  const svgContainerProps = useSpring({
    transform,
    config: properties.springConfig,
  });

  return (
    <animated.svg
      className={"leaderboardIcon"}
      fill="#ffffff"
      height="30px"
      width="30px"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 490 490"
      onClick={() => {
        iconPressed();
        setLeaderboardShown(!leaderboardShown);
        setFilterShown(false);
      }}
      style={{
        cursor: "pointer",
        ...svgContainerProps,
      }}
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>

      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>

      <g id="SVGRepo_iconCarrier">
        {" "}
        <g>
          {" "}
          <g>
            {" "}
            <g>
              {" "}
              <path d="M143.9,354.7L121.7,490h246.9L346,354.7H143.9z M162.9,457.3l11.3-70.4h141.6l11.3,70.4H162.9z"></path>{" "}
              <polygon points="140.8,321.2 245,266.4 349.2,321.2 329.4,204.9 413.8,122.5 297.1,105.8 245,0 192.9,105.8 76.2,122.5 160.6,204.9 "></polygon>{" "}
              <polygon points="192.9,316.2 192.9,334.4 297.1,334.4 297.1,316.2 245,288.9 "></polygon>{" "}
            </g>{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </animated.svg>
  );
};

export default LeaderboardIcon;
