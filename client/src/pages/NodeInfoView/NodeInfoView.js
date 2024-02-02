import React from "react";
import "./NodeInfoView.css";
import NIDataTable from "./NIDataTable/NIDataTable.js";
import { columns, tableData } from "./NITableConfig.js";

function NodeInfoView() {
  return (
    <div className="NI-container">
      <p className="NI-title">노드 정보 보기</p>
      <div className="NI-content-container">
        <NIDataTable
          data={tableData ? tableData : []}
          columns={columns}
        ></NIDataTable>
      </div>
    </div>
  );
}

export default NodeInfoView;
