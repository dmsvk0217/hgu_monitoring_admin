import React, { useState, useEffect } from "react";
import "./ErrDataView.css";
import { columns } from "./EDTableConfig.js";

import RDSelection from "./EDSelection/EDSelection.js";
import ErrDataTable from "./ErrDataTable/ErrDataTable.js";
import ExcelDownloadButton from "../../components/DownloadButton/DownloadButton.js";
import ErrOptionButton from "./ErrOptionButton/ErrOptionButton.js";
import EDModal from "./EDModal/EDModal.js";

import { getCurrentDate } from "../../util.js";
import { fetchErrorData } from "../../api/axiosApi.js";

function ErrDataView() {
  const [selectedDoneOption, setSelectedDoneOption] = useState("all");

  const [errData, seterrData] = useState([]);
  const [optionedErrData, setoptionedErrData] = useState([]);

  useEffect(() => {
    const fetchErrData = async () => {
      try {
        const currentDate = getCurrentDate();
        const fetchedData = await fetchErrorData(currentDate);
        console.log("🚀 ~ fetchErrData ~ fetchedData:", fetchedData);

        seterrData(fetchedData || []);
        setoptionedErrData(fetchedData || []);
      } catch (error) {
        console.error("데이터를 가져오거나 처리하는 중 오류가 발생했습니다:", error);
      }
    };

    fetchErrData();
  }, []);

  const handleOptionClick = (option) => {
    setSelectedDoneOption(option);
    if (option == "all") {
      setoptionedErrData(errData || []);
    }
    if (option == "notYet") {
      setoptionedErrData(
        errData.filter((item) => {
          return item.done == false;
        }) || []
      );
    }
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const [rowObject, setRowObject] = useState({});

  return (
    <div className="ED-container">
      <p className="ED-title">에러 데이터 보기</p>
      <div className="ED-content-container">
        <EDModal modalIsOpen={modalIsOpen} closeModal={closeModal} rowObject={rowObject} />
        <RDSelection />
        <ErrOptionButton
          selectedDoneOption={selectedDoneOption}
          handleOptionClick={handleOptionClick}
        />
        <ExcelDownloadButton data={optionedErrData ? optionedErrData : []} />
        <ErrDataTable
          data={optionedErrData ? optionedErrData : []}
          columns={columns}
          selectedDoneOption={selectedDoneOption}
          openModal={openModal}
          setRowObject={setRowObject}
        />
      </div>
    </div>
  );
}

export default ErrDataView;
