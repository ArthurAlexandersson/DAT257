import React, { useState, useContext } from "react";
import { animated, useSpring } from "react-spring";
import { headerContext } from "../../App";
import "./header.css";

const FilterButton = () => {
  const { filterShown, setFilterShown, setLeaderboardShown } =
    useContext(headerContext);
  const [filterToggled, setFilterToggled] = useState(false);

  const { cx1 cx2} = useSpring({
    cx1: filterShown ? 8.5 : 15,

    cx2: filterShown ? 15 : 8.5,
  });
  const color = "#fff";

  return (
    <animated.svg
      className={"filterButton"}
      width="30px"
      height="30px"
      viewBox="0 0 24 24"
      fill="none"
      onClick={() => {
        setFilterShown(!filterShown);
        setLeaderboardShown(false);
      }}
    >
      <animated.circle cx={cx1} cy={7} r="3.502" fill={color} />
      <animated.circle cx={cx2} cy={17} r="3.502" fill={color} />

      <rect x="1" y="5.5" width="21" height="2.9" rx="2" fill={color} />
      <rect x="1" y="15.5" width="21" height="2.9" rx="2" fill={color} />
    </animated.svg>
  );
};

export default FilterButton;
