import React, { useState, useEffect } from "react";
import "./RawDataView.css";
import RDSelection from "./RDSelection/RDSelection";
import CustomTable from "../../components/CustomTable/CustomTable.js";
import ExcelDownloadButton from "../../components/DownloadButton/DownloadButton.js";
import { columns } from "./RDTableConfig.js";
import HourOptionButton from "../RawDataView/HourOptionButton/HourOptionButton.js";
import { getCurrentTimeFilerOption, getCurrentDate, extractTimes } from "../../util.js";

import { fetchRawData } from "../../api/axiosApi.js";

function RawDataView() {
  const currentTimeFilerOption = getCurrentTimeFilerOption();
  const { startTime, endTime } = currentTimeFilerOption;
  const [selectedHourOption, setSelectedHourOption] = useState(`${startTime}-${endTime}`);

  const [dayRawData, setdayRawData] = useState([]);
  const [filtereddayRawData, setfiltereddayRawData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentDate = getCurrentDate();
        const fetchedData = await fetchRawData(currentDate);
        setdayRawData(fetchedData);

        const filteredData = fetchedData.filter((data) => {
          const timestamp = data.timestamp;
          return startTime <= timestamp.slice(0, 4) && endTime > timestamp.slice(0, 4);
        });

        filteredData.sort((a, b) => {
          const timeA = new Date("1970-01-01T" + a.timestamp);
          const timeB = new Date("1970-01-01T" + b.timestamp);

          if (timeA.getTime() === timeB.getTime()) {
            const addressA = parseInt(a.nodeAddress, 10);
            const addressB = parseInt(b.nodeAddress, 10);
            return addressB - addressA;
          }

          return timeA - timeB;
        });

        console.log("🚀 ~ useEffect ~ filteredData:", filteredData);
        setfiltereddayRawData(filteredData);
      } catch (error) {
        console.error("데이터를 가져오거나 처리하는 중 오류가 발생했습니다:", error);
      }
    };

    fetchData();
  }, []);

  const handleOptionClick = (option) => {
    setSelectedHourOption(option);
    const extractedTimes = extractTimes(option);

    setfiltereddayRawData(
      dayRawData.filter((item) => {
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
        <ExcelDownloadButton data={filtereddayRawData ? filtereddayRawData : []} />
        <CustomTable
          data={filtereddayRawData ? filtereddayRawData : []}
          columns={columns}
          selectedHourOption={selectedHourOption}
        />
      </div>
    </div>
  );
}

export default RawDataView;
