import React, { useState } from "react";
import "./RawDataView.css";
import RDSelection from "./RDSelection/RDSelection";
import CustomTable from "../../components/CustomTable/CustomTable.js";
import ExcelDownloadButton from "../../components/DownloadButton/DownloadButton.js";
import { columns, tableData } from "./RDTableConfig.js";
import HourOptionButton from "../RawDataView/HourOptionButton/HourOptionButton.js";

function RawDataView() {
  const [selectedHourOption, setSelectedHourOption] = useState("0:00-3:00");

  const [caltableData, setcalTableData] = useState(
    tableData.filter((item) => {
      const timestamp = item.timestamp;
      return "00" <= timestamp.slice(0, 2) && "03" > timestamp.slice(0, 2);
    }) || []
  );

  const handleOptionClick = (option) => {
    setSelectedHourOption(option);

    const extractedTimes = extractTimes(option);
    setcalTableData(
      tableData.filter((item) => {
        const timestamp = item.timestamp;
        return (
          extractedTimes.startTime.hour <= timestamp.slice(0, 2) &&
          extractedTimes.endTime.hour > timestamp.slice(0, 2)
        );
      }) || []
    );
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
          data={caltableData ? caltableData : []}
        ></ExcelDownloadButton>
        <CustomTable
          data={caltableData ? caltableData : []}
          columns={columns}
          selectedHourOption={selectedHourOption}
        ></CustomTable>
      </div>
    </div>
  );
}

export default RawDataView;

function extractTimes(timeString) {
  // 정규 표현식을 사용하여 시간 문자열에서 숫자 부분을 추출
  const match = timeString.match(/(\d+):(\d+)-(\d+):(\d+)/);

  if (match) {
    // match 배열의 인덱스 1과 3은 시작 시간의 시와 분
    // match 배열의 인덱스 2와 4는 끝 시간의 시와 분
    const startTimeHour = parseInt(match[1], 10);
    const startTimeMinute = parseInt(match[2], 10);
    const endTimeHour = parseInt(match[3], 10);
    const endTimeMinute = parseInt(match[4], 10);

    return {
      startTime: {
        hour: startTimeHour,
        minute: startTimeMinute,
      },
      endTime: {
        hour: endTimeHour,
        minute: endTimeMinute,
      },
    };
  }

  // 일치하지 않을 경우 예외 처리 또는 기본값 반환
  return null;
}
