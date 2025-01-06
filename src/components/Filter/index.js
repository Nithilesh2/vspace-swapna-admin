import React, { useState } from 'react';
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import './index.css'; // Assuming you have a separate CSS file for styling

const Filter = () => {
  const [showFilter, setShowFilter] = useState(false); // State for toggling filter
  const [dateRange, setDateRange] = useState(''); // State for selected date range

  // Function to toggle filter visibility
  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  // Function to handle dropdown change
  const handleDateRangeChange = (e) => {
    setDateRange(e.target.value);
    // Here you can calculate and set the dates based on the selected range
    // For example, if you select "1 month", set the input fields accordingly
  };

  return (
    <div className="filter-container">
      {/* Dropdown menu for predefined date ranges */}
      {showFilter && (
        <select
          value={dateRange}
          onChange={handleDateRangeChange}
          className="date-range-dropdown"
        >
          <option value="">Select a range</option>
          <option value="1 year">1 Year</option>
          <option value="6 months">6 Months</option>
          <option value="3 months">3 Months</option>
          <option value="1 month">1 Month</option>
          <option value="10 days">10 Days</option>
        </select>
      )}

      {/* Filter form */}
      {showFilter && (
        <div className={`filter-form`}>
          <label htmlFor="from-date">From Date:</label>
          <input type="date" id="from-date" />

          <label htmlFor="to-date">To Date:</label>
          <input type="date" id="to-date" />
        </div>
      )}

      {/* Filter Icon */}
      <div 
        className={`filter-icon ${showFilter ? 'active' : ''}`} 
        onClick={toggleFilter}
      >
        <HiAdjustmentsHorizontal />
      </div>
    </div>
  );
};

export default Filter;
