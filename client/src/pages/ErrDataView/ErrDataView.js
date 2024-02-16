import React, { useState } from "react";
import "./ErrDataView.css";
import RDSelection from "./EDSelection/EDSelection.js";
import ErrDataTable from "./ErrDataTable/ErrDataTable.js";
import ExcelDownloadButton from "../../components/DownloadButton/DownloadButton.js";
import { columns, tableData } from "./EDTableConfig.js";
import ErrOptionButton from "./ErrOptionButton/ErrOptionButton.js";

function ErrDataView() {
  const [selectedDoneOption, setSelectedDoneOption] = useState("all");

  const [caltableData, setcalTableData] = useState(tableData || []);

  const handleOptionClick = (option) => {
    setSelectedDoneOption(option);
    setcalTableData(
      tableData.filter((item) => {
        const done = item.done;
        return done;
      }) || []
    );
  };

  return (
    <div className="ED-container">
      <p className="ED-title">에러 데이터 보기</p>
      <div className="ED-content-container">
        <RDSelection />
        <ErrOptionButton
          selectedDoneOption={selectedDoneOption}
          handleOptionClick={handleOptionClick}
        />
        <ExcelDownloadButton
          data={caltableData ? caltableData : []}
        ></ExcelDownloadButton>
        <ErrDataTable
          data={caltableData ? caltableData : []}
          columns={columns}
        ></ErrDataTable>
      </div>
    </div>
  );
}

export default ErrDataView;
