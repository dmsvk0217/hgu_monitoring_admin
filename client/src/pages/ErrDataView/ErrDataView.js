import React, { useState } from "react";
import { columns, tableData } from "./EDTableConfig.js";

import RDSelection from "./EDSelection/EDSelection.js";
import ErrDataTable from "./ErrDataTable/ErrDataTable.js";
import ExcelDownloadButton from "../../components/DownloadButton/DownloadButton.js";
import ErrOptionButton from "./ErrOptionButton/ErrOptionButton.js";
import EDModal from "./EDModal/EDModal.js";

import "./ErrDataView.css";

function ErrDataView() {
  const [selectedDoneOption, setSelectedDoneOption] = useState("all");

  const [caltableData, setcalTableData] = useState(tableData || []);

  const handleOptionClick = (option) => {
    setSelectedDoneOption(option);
    if (option == "all") {
      setcalTableData(tableData || []);
    }
    if (option == "onlyDone") {
      setcalTableData(
        tableData.filter((item) => {
          return item.done == "yes";
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
        <ExcelDownloadButton data={caltableData ? caltableData : []} />
        <ErrDataTable
          data={caltableData ? caltableData : []}
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
