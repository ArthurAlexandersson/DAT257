import React from "react";
import "./currentfiltering.css"
import dropDownMonth from "./MonthValues";

const CurrentFiltering = ({year, month, region }) => {
    const monthLabel = dropDownMonth.find(monthvalue => monthvalue.value === month).label;
    return (
        <div className="current-filter">
            <p className="text">{year}, {monthLabel}, {region}</p>
        </div>
    );
};

export default CurrentFiltering;