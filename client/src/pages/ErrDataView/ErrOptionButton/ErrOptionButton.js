import React from "react";
import style from "./ErrOptionButton.module.css";

const ErrOptionButton = ({ selectedDoneOption, handleOptionClick }) => {
  return (
    <div className={style["err-select-unit"]}>
      <dl className={style["err-option-dl"]}>
        <dd
          className={`${style["err-option-dd"]} ${
            selectedDoneOption === "all" ? style.active : ""
          }`}
          onClick={() => handleOptionClick("all")}>
          전체보기
        </dd>
        <dd
          className={`${style["err-option-dd"]} ${
            selectedDoneOption === "notYet" ? style.active : ""
          }`}
          onClick={() => handleOptionClick("notYet")}>
          미처리건만 보기
        </dd>
      </dl>
    </div>
  );
};

export default ErrOptionButton;
