import React, { useState } from "react";
import "./NodeInfoView.css";
import NIDataTable from "./NIDataTable/NIDataTable.js";
import NIModal from "./NIModal/NIModal.js";
import { columns, tableData } from "./NITableConfig.js";

import { QueryCache } from "@tanstack/react-query";
import { fetchNodeInfo } from "../../api/axiosApi.js";
import { useQueryClient, useQuery } from "@tanstack/react-query";

function NodeInfoView() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const [rowObject, setRowObject] = useState({});

  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["nodeInfo"],
    queryFn: () => fetchNodeInfo(),
  });

  return (
    <div className="NI-container">
      <p className="NI-title">노드 정보 보기</p>
      <div className="NI-content-container">
        <NIModal modalIsOpen={modalIsOpen} closeModal={closeModal} rowObject={rowObject} />
        <div className="add-button-container">노드추가</div>
        <NIDataTable
          data={data ? data : []}
          columns={columns}
          openModal={openModal}
          setRowObject={setRowObject}></NIDataTable>
      </div>
    </div>
  );
}

export default NodeInfoView;
