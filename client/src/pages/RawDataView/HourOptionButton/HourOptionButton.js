import React, { useState, useEffect } from "react";
import style from "./HourOptionButton.module.css";

const HourOptionButton = ({ selectedHourOption, handleOptionClick }) => {
  const numbers = Array.from({ length: 8 }, (_, index) => index);
  return (
    <dl className={`${style.select_unit} ${style.hour_option_dl}`}>
      {numbers.map((number) => {
        let divStyle;
        if (number != 0) divStyle = { borderLeft: "none" };

        return (
          <dd
            key={number}
            className={`${style.hour_option_dd} ${
              selectedHourOption === `${number * 3}:00-${number * 3 + 3}:00`
                ? style.active
                : ""
            }`}
            style={divStyle}
            onClick={() =>
              handleOptionClick(`${number * 3}:00-${number * 3 + 3}:00`)
            }
          >
            {number * 3}:00-{number * 3 + 3}:00
          </dd>
        );
      })}
    </dl>
  );
};

export default HourOptionButton;
