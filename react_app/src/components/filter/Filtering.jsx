import fireData from "../../fireValues/fireData.js";


export function filter (year, month, region) {
    const yearData = fireData[year];
    month = "-" + month + "-";

    let filteredData = yearData.filter(obj => obj.acq_date.includes(month));
    if (region !== "Whole world") {
        filteredData = filteredData.filter(obj => obj.region.includes(region));
    }
    return (filteredData);
}