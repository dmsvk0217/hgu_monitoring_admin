import React, { useState } from "react";
import "./NodeInfoView.css";
import NIDataTable from "./NIDataTable/NIDataTable.js";
import NIEditModal from "./NIEditModal/NIEditModal.js";
import NIDeleteModal from "./NIDeleteModal/NIDeleteModal.js";
import { columns, tableData } from "./NITableConfig.js";

import { QueryCache } from "@tanstack/react-query";
import { fetchNodeInfo } from "../../api/axiosApi.js";
import { useQueryClient, useQuery } from "@tanstack/react-query";

function NodeInfoView() {
  const [rowObject, setRowObject] = useState({});
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["nodeInfo"],
    queryFn: () => fetchNodeInfo(),
  });

  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const openEditModal = () => {
    setEditModalIsOpen(true);
  };
  const closeEditModal = () => {
    setEditModalIsOpen(false);
  };

  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const openDeleteModal = () => {
    setDeleteModalIsOpen(true);
  };
  const closeDeleteModal = () => {
    setDeleteModalIsOpen(false);
  };

  return (
    <div className="NI-container">
      <p className="NI-title">노드 정보 보기</p>
      <div className="NI-content-container">
        <NIEditModal
          editModalIsOpen={editModalIsOpen}
          closeEditModal={closeEditModal}
          rowObject={rowObject}
        />
        <NIDeleteModal
          deleteModalIsOpen={deleteModalIsOpen}
          closeDeleteModal={closeDeleteModal}
          rowObject={rowObject}
        />
        <div className="add-button-container">노드추가</div>
        <NIDataTable
          data={data ? data : []}
          columns={columns}
          openEditModal={openEditModal}
          openDeleteModal={openDeleteModal}
          setRowObject={setRowObject}></NIDataTable>
      </div>
    </div>
  );
}

export default NodeInfoView;
