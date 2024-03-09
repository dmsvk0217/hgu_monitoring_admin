import React, { useState, useEffect } from "react";
import "./NodeInfoView.css";
import NIDataTable from "./NIDataTable/NIDataTable.js";
import NIEditModal from "./NIEditModal/NIEditModal.js";
import NIDeleteModal from "./NIDeleteModal/NIDeleteModal.js";
import { columns } from "./NITableConfig.js";

import { fetchNodeInfo } from "../../api/axiosApi.js";

function NodeInfoView() {
  const [rowObject, setRowObject] = useState({});
  const [nodeInfo, setNodeInfo] = useState([]);
  const [isUpdatedNode, setIsUpdatedNode] = useState(false);
  const [isDeletedNode, setIsDeletedNode] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setNodeInfo(await fetchNodeInfo());
    }
    setIsUpdatedNode(false);
    setIsDeletedNode(false);
    fetchData();
  }, [isUpdatedNode === true || isDeletedNode === true]);

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
          setIsUpdatedNode={setIsUpdatedNode}
        />
        <NIDeleteModal
          deleteModalIsOpen={deleteModalIsOpen}
          closeDeleteModal={closeDeleteModal}
          rowObject={rowObject}
          setIsDeletedNode={setIsDeletedNode}
        />
        <div className="add-button-container">노드추가</div>
        <NIDataTable
          data={nodeInfo ? nodeInfo : []}
          columns={columns}
          openEditModal={openEditModal}
          openDeleteModal={openDeleteModal}
          setRowObject={setRowObject}></NIDataTable>
      </div>
    </div>
  );
}

export default NodeInfoView;
