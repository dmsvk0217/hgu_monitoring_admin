import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./NIDeleteModal.css";

import { deleteNodeInfoById } from "../../../api/axiosApi";
import { useQuery } from "@tanstack/react-query";
import { fetchNodeInfo } from "../../../api/axiosApi.js";

function NIDeleteModal({ deleteModalIsOpen, closeDeleteModal, rowObject, setIsUpdatedNode }) {
  Modal.setAppElement("#root");

  const deleteHandler = async () => {
    await deleteNodeInfoById(rowObject.id);
    setIsUpdatedNode(true);
    closeDeleteModal();
  };

  return (
    <Modal
      className="ni_edit_modal"
      overlayClassName="Overlay"
      isOpen={deleteModalIsOpen}
      onRequestClose={closeDeleteModal}
      contentLabel="Example Modal">
      <div className="ni-edit-modal--container">
        <div className="ni-edit-modal--header">노드 삭제</div>
        <div className="ni-edit-modal-content-container">
          <div className="ni-edit-modal-content--divider"></div>
          <div className="ni-edit-modal-content--label">정말로 삭제하시겠습니까?</div>
          <div className="ni-edit-modal-content--divider"></div>
          <div className="ni-edit-modal-content--label">ID: {rowObject.id}</div>
          <div className="ni-edit-modal-content--label">노드번호: {rowObject.nodeAddress}</div>
          <div className="ni-edit-modal-content--label">위치: {rowObject.location}</div>
          <div className="ni-edit-modal-content--label">위도: {rowObject.latitude}</div>
          <div className="ni-edit-modal-content--label">경도: {rowObject.longitude}</div>
          <div className="ni-edit-modal-content--divider"></div>
        </div>

        <div className="ni-edit-modal--button-container">
          <div className="ni-edit-modal--cancel" onClick={closeDeleteModal}>
            취소
          </div>
          <div className="ni-edit-modal--done" onClick={deleteHandler}>
            삭제
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default NIDeleteModal;
