import React from "react";
import "./BatteryInfo.css";
import { columns, tableData } from "./BatteryTable/BatteryTableConfig.js";
import BatteryTable from "./BatteryTable/BatteryTable.js";

function BatteryInfo(props) {
  return (
    <div className="node-battery-info">
      <div className="node-battery-info-header">
        <div>노드별 배터리 잔량</div>
        <div className="timestamp">2024년 01월 29일 17시</div>
      </div>
      <BatteryTable
        data={tableData ? tableData : []}
        columns={columns}
      ></BatteryTable>
    </div>
  );
}

export default BatteryInfo;
