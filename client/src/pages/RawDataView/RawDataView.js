import React from "react";
import "./RawDataView.css";
import RDSelection from "./RDSelection/RDSelection";
import CustomTable from "../../components/CustomTable/CustomTable.js";
import ExcelDownloadButton from "../../components/DownloadButton/DownloadButton.js";
import { columns, tableData } from "./RDTableConfig.js";

function RawDataView() {
  return (
    <div className="RD-container">
      <p className="RD-title">로우 데이터 보기</p>
      <div className="RD-content-container">
        <RDSelection />
        <ExcelDownloadButton
          data={tableData ? tableData : []}
        ></ExcelDownloadButton>
        <CustomTable
          data={tableData ? tableData : []}
          columns={columns}
        ></CustomTable>
      </div>
    </div>
  );
}

export default RawDataView;
