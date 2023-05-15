import React, { useContext, useEffect, useState } from "react";
import { searchContext } from "../../App";
import "./searchBar.css";

const SearchBar = () => {
  const { locationState, setLocationState } = useContext(searchContext);
  const [location, setLocation] = useState();

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLocationState(location);
  };
  const handleClick = () => {
    setLocationState(location);
  };

  return (
    <form onSubmit={handleSubmit} onkeydown={handleClick}>
      <div class="input-group" onkeydown={handleClick}>
        <input
          type="text"
          class="form-control"
          placeholder="Search"
          aria-label="Search"
          onChange={handleLocationChange}
          onkeydown={handleClick}
          tabIndex={0}
        />

        <button
          type="button"
          className="btn btn-outline-light"
          id="btnSearch"
          onClick={handleClick}
        >
          Search
        </button>
      </div>
    </form>
  );
};
export default SearchBar;
