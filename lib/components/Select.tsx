import React from "react";

interface Props {}

const Select = (props: Props) => {
    return (
        <div className="d-flex flex-column text-end">
            <label htmlFor="dateRange">Date Range</label>
            <select name="dateRange" id="dateRange">
                <option value="past-week">Past Week</option>
                <option value="past-month">Past Month</option>
                <option value="past-90-days">Past 90 days</option>
                <option value="this-year">This Year</option>
                <option value="past-year">Past Year</option>
            </select>
        </div>
    );
};

export default Select;
