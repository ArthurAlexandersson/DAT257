import React, {useState} from "react";
import "./filterwindow.css"
import Select from "react-select";
import dropDownRegion from "./RegionValues";
import dropDownMonth from "./MonthValues";
import dropDownYear from "./YearValues"

const FilterWindow = ({filterData}) => {
    const [year, setYear] = useState('2021');
    const [month, setMonth] = useState('01');
    const [region, setRegion] = useState("Whole world");

    const handleChangeYear = (newYear) => {
        setYear(newYear.value);
        filterData(newYear.value, month, region);
    };

    const handleChangeMonth = (newMonth) => {
        setMonth(newMonth.value)
        filterData(year, newMonth.value, region)
        console.log(newMonth.value)
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

                    <Select
                        value={dropDownYear.find(option => option.value === year)}

                        onChange={handleChangeYear}
                        className="region_box"
                        options = {dropDownYear}
                        styles={{
                            menu: (provided) => ({
                                ...provided,
                                maxHeight: '200px',
                                overflow: 'hidden',
                                '&::-webkit-scrollbar': {
                                    width: '5px',
                                    height: '5px',
                                },
                                '&::-webkit-scrollbar-track': {
                                    background: 'transparent',
                                },
                                '&::-webkit-scrollbar-thumb': {
                                    background: 'gray',
                                    borderRadius: '5px',
                                },
                            }),
                        }}
                        menuPosition={'fixed'}
                    />

                </div>
                <div className="filter-item">

                    <Select
                        value={dropDownMonth.find(option => option.value === month)}

                        onChange={handleChangeMonth}
                        className="region_box"
                        options={dropDownMonth}
                        styles={{
                            menu: (provided) => ({
                                ...provided,
                                maxHeight: '200px',
                                overflow: 'hidden',
                                '&::-webkit-scrollbar': {
                                    width: '5px',
                                    height: '5px',
                                },
                                '&::-webkit-scrollbar-track': {
                                    background: 'transparent',
                                },
                                '&::-webkit-scrollbar-thumb': {
                                    background: 'gray',
                                    borderRadius: '5px',
                                },
                            }),
                        }}
                        menuPosition={'fixed'}
                    />

                </div>

                <div className="filter-item">
                    <Select
                        defaultValue={dropDownRegion.find(option => option.value === region)}

                        className="region_box"
                        options={dropDownRegion}
                        menuPlacement="bottom"
                        onChange={handleChangeRegion}
                        styles={{
                            menu: (provided) => ({
                                ...provided,
                                maxHeight: '200px',
                                overflow: 'hidden',
                                '&::-webkit-scrollbar': {
                                    width: '5px',
                                    height: '5px',
                                },
                                '&::-webkit-scrollbar-track': {
                                    background: 'transparent',
                                },
                                '&::-webkit-scrollbar-thumb': {
                                    background: 'gray',
                                    borderRadius: '5px',
                                },
                            }),
                        }}
                        menuPosition={'fixed'}
                    />
                </div>

            </div>
        </div>
    );
};

export default FilterWindow;