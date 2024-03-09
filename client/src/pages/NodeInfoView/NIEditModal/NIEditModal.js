import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./NIEditModal.css";

import { updateNodeInfo } from "../../../api/axiosApi.js";

function NIEditModal({ editModalIsOpen, closeEditModal, setIsUpdatedNode, rowObject }) {
  Modal.setAppElement("#root");

  const [updateObject, setupdateObject] = useState({});

  useEffect(() => {
    setupdateObject(rowObject);
  }, [editModalIsOpen == true]);

  const editDoneHandler = async () => {
    await updateNodeInfo(updateObject);
    setupdateObject({});
    setIsUpdatedNode(true);
    closeEditModal();
  };

  const editCancelHandler = () => {
    setupdateObject({});
    closeEditModal();
  };

  const locationHandler = (e) => {
    setupdateObject((prevObject) => ({
      ...prevObject,
      location: e.target.value,
    }));
  };

  const longitudeHandler = (e) => {
    setupdateObject((prevObject) => ({
      ...prevObject,
      longitude: e.target.value,
    }));
  };

  const latitudeHandler = (e) => {
    setupdateObject((prevObject) => ({
      ...prevObject,
      latitude: e.target.value,
    }));
  };

  const nodeAddressHandler = (e) => {
    setupdateObject((prevObject) => ({
      ...prevObject,
      nodeAddress: e.target.value,
    }));
  };

  return (
    <Modal
      className="ni_edit_modal"
      overlayClassName="Overlay"
      isOpen={editModalIsOpen}
      onRequestClose={closeEditModal}
      contentLabel="Example Modal">
      <div className="ni-edit-modal--container">
        <div className="ni-edit-modal--header">노드 정보 수정</div>
        <div className="ni-edit-modal-content-container">
          <div className="ni-edit-modal-content">
            <div className="ni-edit-modal-content--divider"></div>
            <div className="ni-edit-modal-content-container--container">
              <div className="ni-edit-modal-content--label">노드 번호</div>
              <input
                className="ni-edit-modal-content--field--input"
                value={updateObject.nodeAddress}
                onChange={nodeAddressHandler}
              />
            </div>
          </div>
        </div>
        <div className="ni-edit-modal-content-container">
          <div className="ni-edit-modal-content">
            <div className="ni-edit-modal-content--divider"></div>
            <div className="ni-edit-modal-content-container--container">
              <div className="ni-edit-modal-content--label">노드 명칭</div>{" "}
              <input
                className="ni-edit-modal-content--field--input"
                value={updateObject.location}
                onChange={locationHandler}
              />
            </div>
          </div>
        </div>
        <div className="ni-edit-modal-content-container">
          <div className="ni-edit-modal-content">
            <div className="ni-edit-modal-content--divider"></div>
            <div className="ni-edit-modal-content-container--container">
              <div className="ni-edit-modal-content--label">노드 위치</div>
              <div className="ni-edit-modal-content-location-container">
                <div className="ni-edit-modal-content--label--label">위도</div>
                <input
                  className="ni-edit-modal-content-location--field--input"
                  value={updateObject.longitude}
                  onChange={longitudeHandler}
                />
                <div className="ni-edit-modal-content--label--label">경도</div>
                <input
                  className="ni-edit-modal-content-location--field--input"
                  value={updateObject.latitude}
                  onChange={latitudeHandler}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="ni-edit-modal--button-container">
          <div className="ni-edit-modal--cancel" onClick={editCancelHandler}>
            취소
          </div>
          <div className="ni-edit-modal--done" onClick={editDoneHandler}>
            완료
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default NIEditModal;
