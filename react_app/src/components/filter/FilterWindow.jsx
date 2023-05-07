import React, {useState} from "react";
import "./filterwindow.css"
import Slider from "react-slider";
import Select from "react-select";
import dropDownPopulation from "./RegionValues";

const FilterWindow = ({filterData}) => {
    const [year, setYear] = useState(2021);
    const [month, setMonth] = useState(1);
    const [region, setRegion] = useState("Whole world");

    const handleChangeYear = (newYear) => {
        setYear(newYear);
        filterData(newYear, month, region);
    };

    const handleChangeMonth = (newMonth) => {
        setMonth(newMonth)
        filterData(year, newMonth, region)
    };

    const handleChangeRegion = (newRegion) => {
        setRegion(newRegion.value)
        filterData(year, month, newRegion.value)
    };

    return (
        <div className="filter">
            <h2>Filter</h2>
            <div className="filter-container">
                <div className="filter-item">
                    <Slider
                        value={year}
                        onAfterChange={handleChangeYear}
                        className="filter-slider"
                        thumbClassName="thumb"
                        trackClassName="track"
                        ariaLabel={"Volume 1"}
                        step={1}
                        min={2000}
                        max={2021}
                    />
                </div>
                <div className="filter-item">
                    <Slider
                        value={month}
                        onAfterChange={handleChangeMonth}
                        className="filter-slider"
                        thumbClassName="thumb"
                        trackClassName="track"
                        ariaLabel={"Volume 2"}
                        step={1}
                        min={1}
                        max={12}
                    />
                </div>

                <div className="filter-item">
                    <Select
                        defaultValue={dropDownPopulation.find(option => option.value === region)}

                        className="region_box"
                        options={dropDownPopulation}
                        menuPlacement="bottom"
                        onChange={handleChangeRegion}
                    />
                </div>

            </div>
        </div>
    );
};

export default FilterWindow;