import React from "react";
import "./ErrDataView.css";
import RDSelection from "./EDSelection/EDSelection.js";
import ErrDataTable from "./ErrDataTable/ErrDataTable.js";
import ExcelDownloadButton from "../../components/DownloadButton/DownloadButton.js";
import { columns, tableData } from "./EDTableConfig.js";

function ErrDataView() {
  return (
    <div className="ED-container">
      <p className="ED-title">에러 데이터 보기</p>
      <div className="ED-content-container">
        <RDSelection />
        <ExcelDownloadButton
          data={tableData ? tableData : []}
        ></ExcelDownloadButton>
        <ErrDataTable
          data={tableData ? tableData : []}
          columns={columns}
        ></ErrDataTable>
      </div>
    </div>
  );
}

export default ErrDataView;
