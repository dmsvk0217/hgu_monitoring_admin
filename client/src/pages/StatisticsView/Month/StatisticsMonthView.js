import React, { useEffect } from "react";
import "./StatisticsMonthView.css";
import CustomGraph from "../../../components/CustomGraph/CustomGraph";
import CustomTable from "../../../components/CustomTable/CustomTable";
import SMSelection from "./SMSelection/SMSelection";
import { chartData, chartOptions } from "./SMGraphConfig";
import { data, columns } from "./SMTableConfig";
import DownloadButton from "../../../components/DownloadButton/DownloadButton";

import util from "../../../util.js";

function StatisticsMonthView() {
  return (
    <div className="SM-container">
      <div className="SM-content-container">
        <SMSelection />
        <DownloadButton data={data}></DownloadButton>
        <CustomTable data={data} columns={columns}></CustomTable>
        <hr className="SM-Month"></hr>
        <p className="SM-graph-title"> | 그래프 보기 | </p>
        <CustomGraph data={chartData} options={chartOptions}></CustomGraph>
      </div>
    </div>
  );
}

export default StatisticsMonthView;
