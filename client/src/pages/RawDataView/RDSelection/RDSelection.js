import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "../../../components/SubmitButton/SubmitButton.css";

import "react-datepicker/dist/react-datepicker.css";
import "./RDSelection.css";
import { FaCalendarAlt } from "react-icons/fa";
import CustomDropDown from "../../../components/CustomDropDown/CustomDropDown";

import {
  selectLocationOptions,
  selectHourOptions,
} from "../../../constants/selectOption";

function RDSelection() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedHour, setSelectedHour] = useState(selectHourOptions[0]);
  const [selectedLocation, setSelectedLocation] = useState(
    selectLocationOptions[0]
  );

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
    <button
      onClick={onClick}
      ref={ref}
      style={{ background: "none", border: "none" }}
    >
      <FaCalendarAlt style={{ color: "rgba(85,183,107)", fontSize: "1.2em" }} />
    </button>
  ));

  const handleSearchButton = () => {};

  return (
    <div className="RDTable">
      <div className="RD-table-select-container">
        <div className="location-and-unit">
          <div className="RD-table-location">
            <p>측정위치</p>
            <CustomDropDown
              optionData={selectLocationOptions}
              selectedValue={selectedLocation}
              handleSelectedValue={handleNodeSelect}
            />
          </div>
          <div className="RD-table-time">
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
          {/* <div className="RD-table-location">
            <p>시간단위</p>
            <CustomDropDown
              optionData={selectHourOptions}
              selectedValue={selectedHour}
              handleSelectedValue={handleHourSelect}
            />
          </div> */}
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

export default RDSelection;
