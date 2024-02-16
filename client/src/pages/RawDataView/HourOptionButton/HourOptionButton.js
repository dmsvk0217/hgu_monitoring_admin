import React, { useState, useEffect } from "react";
import "./HourOptionButton.css";

const HourOptionButton = ({ selectedHourOption, handleOptionClick }) => {
  const [isSecondActive, setIsSecondActive] = useState(
    selectedHourOption === "0:00-3:00"
  );

  useEffect(() => {
    setIsSecondActive(selectedHourOption === "3:00-6:00");
  }, [selectedHourOption]);

  const numbers = Array.from({ length: 8 }, (_, index) => index);

  return (
    <dl className="select-unit">
      {numbers.map((number) => (
        <dd
          key={number}
          className={
            selectedHourOption === `${number * 3}:00-${number * 3 + 3}:00`
              ? "active"
              : ""
          }
          onClick={() =>
            handleOptionClick(`${number * 3}:00-${number * 3 + 3}:00`)
          }
        >
          {number * 3}:00-{number * 3 + 3}:00
        </dd>
      ))}
    </dl>
  );
};

export default HourOptionButton;