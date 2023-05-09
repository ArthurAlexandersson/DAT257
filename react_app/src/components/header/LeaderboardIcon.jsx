import React, { useContext, useState } from "react";
import { useSpring, animated } from "react-spring";
import "./header.css";
import { headerContext } from "../../App";

const LeaderboardIcon = () => {
  const { leaderboardShown, setLeaderboardShown, setFilterShown } =
    useContext(headerContext);
  const [isPressed, setPressed] = useState(false);

  const iconPressed = () => {
    setPressed((previous) => !previous);
  };
  const { height, width } = useSpring({
    height: isPressed ? 30 : 20,
    width: isPressed ? 30 : 20,
  });

  return (
    <animated.svg
      className="leaderboardIcon"
      width="30px"
      height="30px"
      viewBox="0 0 30 30"
      fill="#fff"
      onClick={() => {
        setLeaderboardShown(!leaderboardShown);
        iconPressed();
      }}
    >
      <animated.rect
        x="11.3"
        y="-10.1"
        width={width}
        height={height}
        transform="rotate(45)"
        rx={2}
        fill="white"
      />

      <rect
        x="13.47"
        y="8"
        width={3}
        height={10}
        fill="var(--mainDark)"
        rx={2}
      />
      <rect
        x="13.47"
        y="19"
        width={3}
        height={3}
        fill="var(--mainDark)"
        rx={2}
      />
    </animated.svg>
  );
};

export default LeaderboardIcon;
