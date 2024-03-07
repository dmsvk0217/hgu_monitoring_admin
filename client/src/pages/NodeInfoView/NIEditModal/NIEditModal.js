import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./NIEditModal.css";

function NIEditModal({ editModalIsOpen, closeEditModal, rowObject }) {
  Modal.setAppElement("#root");

  // console.log("🚀 ~ NIEditModal ~ rowObject:", rowObject.location);
  // console.log("🚀 ~ NIEditModal ~ rowObject:", rowObject.longitude);
  // console.log("🚀 ~ NIEditModal ~ rowObject:", rowObject.latitude);

  const [location, setlocation] = useState(rowObject.location);
  const [longitude, setlongitude] = useState(rowObject.longitude);
  const [latitude, setlatitude] = useState(rowObject.latitude);

  useEffect(() => {
    setlocation(rowObject.location);
    setlongitude(rowObject.longitude);
    setlatitude(rowObject.latitude);
  }, [editModalIsOpen == true]);

  const editDoneHandler = async () => {
    console.log("🚀 ~ NIEditModal ~ location:", location);
    console.log("🚀 ~ NIEditModal ~ longitude:", longitude);
    console.log("🚀 ~ NIEditModal ~ latitude:", latitude);
    console.log("🚀 ~ NIEditModal ~ rowObject:", rowObject);

    //Todo: ni data edit API 연동하기
    //await

    setlocation("");
    setlongitude("");
    setlatitude("");
    closeEditModal();
  };

  const editCancelHandler = () => {
    setlocation("");
    setlongitude("");
    setlatitude("");
    closeEditModal();
  };

  const locationHandler = (e) => {
    setlocation(e.target.value);
  };

  const longitudeHandler = (e) => {
    setlongitude(e.target.value);
  };

  const latitudeHandler = (e) => {
    setlatitude(e.target.value);
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
              <div className="ni-edit-modal-content--field--text">13</div>
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
                value={location}
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
                  value={longitude}
                  onChange={longitudeHandler}
                />
                <div className="ni-edit-modal-content--label--label">경도</div>
                <input
                  className="ni-edit-modal-content-location--field--input"
                  value={latitude}
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
