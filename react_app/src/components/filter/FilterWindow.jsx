import React, {useState} from "react";
import "./filterwindow.css"
import Select from "react-select";
import dropDownRegion from "./RegionValues";
import dropDownMonth from "./MonthValues";
import dropDownYear from "./YearValues"

const FilterWindow = ({filterData, filteredYear, setFilteredYear, filteredMonth, setFilteredMonth, filteredRegion, setFilteredRegion }) => {
    const [year, setYear] = useState(filteredYear);
    const [month, setMonth] = useState(filteredMonth);
    const [region, setRegion] = useState(filteredRegion);


    const handleChangeYear = (newYear) => {
        setYear(newYear.value);
        setFilteredYear(newYear.value);
        filterData(newYear.value, month, region);
    };

    const handleChangeMonth = (newMonth) => {
        setMonth(newMonth.value)
        setFilteredMonth(newMonth.value)
        filterData(year, newMonth.value, region)
    };

    const handleChangeRegion = (newRegion) => {
        setRegion(newRegion.value)
        setFilteredRegion(newRegion.value)
        filterData(year, month, newRegion.value)
    };




    return (
        <div className="filter">
            <h2 className="h2">Filter</h2>
            <div className="filter-container">
                <div className="filter-item">
                    <p className="p">Year</p>
                    <Select
                        value={dropDownYear.find(option => option.value === year)}
                        onChange={handleChangeYear}
                        className="filter-box"
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
                    <p className="p">Month</p>
                    <Select
                        value={dropDownMonth.find(option => option.value === month)}

                        onChange={handleChangeMonth}
                        className="filter-box"
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
                    <p className="p">Region</p>
                    <Select
                        defaultValue={dropDownRegion.find(option => option.value === region)}

                        className="filter-box"
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