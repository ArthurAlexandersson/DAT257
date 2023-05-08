import React, { useState } from "react";
import { animated, useSpring } from "react-spring";

const FilterButton = () => {
  const [pressed, setPressed] = useState(false);

  const { cx1, cy1, cx2, cy2 } = useSpring({
    cx1: pressed ? 8.5 : 15,

    cx2: pressed ? 15 : 8.5,
  });
  const color = "#fff";

  return (
    <animated.svg
      width="30px"
      height="30px"
      viewBox="0 0 24 24"
      fill="none"
      onClick={() => setPressed(!pressed)}
    >
      <animated.circle cx={cx1} cy={7} r="3.502" fill={color} />
      <animated.circle cx={cx2} cy={17} r="3.502" fill={color} />

      <rect x="1" y="5.5" width="21" height="2.9" rx="2" fill={color} />
      <rect x="1" y="15.5" width="21" height="2.9" rx="2" fill={color} />
    </animated.svg>
  );
};

export default FilterButton;
