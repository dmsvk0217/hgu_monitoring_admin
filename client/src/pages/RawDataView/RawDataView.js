import React from "react";
import "./RawDataView.css";
import RDSelection from "./RDSelection/RDSelection";
import CustomTable from "../../components/CustomTable/CustomTable.js";
import DownloadButton from "../../components/DownloadButton/DownloadButton.js";
import { columns, tableData } from "./RDTableConfig.js";

function RawDataView() {
  return (
    <div className="RD-container">
      <p className="RD-title">로우 데이터 보기</p>
      <div className="RD-content-container">
        <RDSelection />
        <DownloadButton data={tableData ? tableData : []}></DownloadButton>
        <CustomTable
          data={tableData ? tableData : []}
          columns={columns}
        ></CustomTable>
      </div>
    </div>
  );
}

export default RawDataView;
