import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "../../../components/SubmitButton/SubmitButton.css";

import "react-datepicker/dist/react-datepicker.css";
import "./EDSelection.css";
import { FaCalendarAlt } from "react-icons/fa";
import CustomDropDown from "../../../components/CustomDropDown/CustomDropDown";

import { selectLocationOptions, selectHourOptions } from "../../../constants/selectOption";

function EDSelection({
  setSelectedDate,
  setSelectedHour,
  setSelectedLocation,
  selectedDate,
  selectedHour,
  selectedLocation,
}) {
  const handleNodeSelect = (node) => {
    setSelectedLocation(node);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleHourSelect = (hour) => {
    setSelectedHour(hour);
  };

  const CustomDatePickerIcon = React.forwardRef(({ onClick }, ref) => (
    <button onClick={onClick} ref={ref} style={{ background: "none", border: "none" }}>
      <FaCalendarAlt style={{ color: "rgba(85,183,107)", fontSize: "1.2em" }} />
    </button>
  ));

  const handleSearchButton = () => {
    console.log("🚀 ~ handleSearchButton ~ selectedLocation:", selectedLocation);
    console.log("🚀 ~ handleSearchButton ~ selectedHour:", selectedHour);
    console.log("🚀 ~ handleSearchButton ~ selectedDate:", selectedDate);
  };
  return (
    <div className="EDTable">
      <div className="ED-table-select-container">
        <div className="location-and-unit">
          <div className="ED-table-location">
            <p>측정위치</p>
            <CustomDropDown
              optionData={selectLocationOptions}
              selectedValue={selectedLocation}
              handleSelectedValue={handleNodeSelect}
            />
          </div>
          <div className="ED-table-time">
            <p>측정일시</p>
            <div className="time-dropdown">
              {selectedDate && <div>{selectedDate.toLocaleDateString()}</div>}
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                showTimeSelect={false}
                dateFormat="MMMM d, yyyy h:mm aa"
                customInput={<CustomDatePickerIcon />}
              />
            </div>
          </div>
          <div className="ED-table-location">
            <p>시간단위</p>
            <CustomDropDown
              optionData={selectHourOptions}
              selectedValue={selectedHour}
              handleSelectedValue={handleHourSelect}
            />
          </div>
        </div>

        <div className="search-btn-container">
          <button className="search-btn" onClick={handleSearchButton}>
            {" "}
            검색{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default EDSelection;
