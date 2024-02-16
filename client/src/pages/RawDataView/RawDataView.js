import React, { useState } from "react";
import "./RawDataView.css";
import RDSelection from "./RDSelection/RDSelection";
import CustomTable from "../../components/CustomTable/CustomTable.js";
import ExcelDownloadButton from "../../components/DownloadButton/DownloadButton.js";
import { columns, tableData } from "./RDTableConfig.js";
import HourOptionButton from "../RawDataView/HourOptionButton/HourOptionButton.js";

function RawDataView() {
  const [selectedHourOption, setSelectedHourOption] = useState("0:00-3:00");

  const handleOptionClick = (option) => {
    setSelectedHourOption(option);
  };

  return (
    <div className="RD-container">
      <p className="RD-title">로우 데이터 보기</p>
      <div className="RD-content-container">
        <RDSelection />
        <HourOptionButton
          selectedHourOption={selectedHourOption}
          handleOptionClick={handleOptionClick}
        />
        <ExcelDownloadButton
          data={tableData ? tableData : []}
        ></ExcelDownloadButton>
        <CustomTable
          data={tableData ? tableData : []}
          columns={columns}
          selectedHourOption={selectedHourOption}
        ></CustomTable>
      </div>
    </div>
  );
}

export default RawDataView;
