import React, {useContext, useState} from "react";

import { headerContext } from "../../App";
import {animated, useSpring} from "react-spring";

const FilterButton = () => {
  const { filterShown, setFilterShown, setLeaderboardShown } = useContext(headerContext);
  const [ filterToggled, setFilterToggled ] = useState(false);

  const iconPressed = () => {
    setFilterToggled((previous) => !previous);
  }

  const properties = {
    opened: {
      transform: "rotate(0deg)",
    },
    closed: {
      transform: "rotate(360deg)",
    },
    springConfig: { mass: 20, tension: 500, friction: 35 },
  };

  const { transform } = properties[filterToggled ? "opened" : "closed"];

  const svgContainerProps = useSpring({
    transform,
    config: properties.springConfig,
  });

  return (
      <svg
          width="30px"
          height="30px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => {
            iconPressed();
            setFilterShown(!filterShown);
            setLeaderboardShown(false);
          }}
      >
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15 10.5A3.502 3.502 0 0 0 18.355 8H21a1 1 0 1 0 0-2h-2.645a3.502 3.502 0 0 0-6.71 0H3a1 1 0 0 0 0 2h8.645A3.502 3.502 0 0 0 15 10.5zM3 16a1 1 0 1 0 0 2h2.145a3.502 3.502 0 0 0 6.71 0H21a1 1 0 1 0 0-2h-9.145a3.502 3.502 0 0 0-6.71 0H3z"
            fill="#ffffff"
        />
      </svg>
  );
};

export default FilterButton;