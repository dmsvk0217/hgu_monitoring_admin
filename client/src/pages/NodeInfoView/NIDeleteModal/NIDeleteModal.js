import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./NIDeleteModal.css";

function NIDeleteModal({ deleteModalIsOpen, closeDeleteModal, rowObject }) {
  Modal.setAppElement("#root");

  // console.log("🚀 ~ NIDeleteModal ~ rowObject:", rowObject.location);
  // console.log("🚀 ~ NIDeleteModal ~ rowObject:", rowObject.longitude);
  // console.log("🚀 ~ NIDeleteModal ~ rowObject:", rowObject.latitude);

  const [location, setlocation] = useState(rowObject.location);
  const [longitude, setlongitude] = useState(rowObject.longitude);
  const [latitude, setlatitude] = useState(rowObject.latitude);

  useEffect(() => {
    setlocation(rowObject.location);
    setlongitude(rowObject.longitude);
    setlatitude(rowObject.latitude);
  }, [deleteModalIsOpen == true]);

  const editDoneHandler = async () => {
    console.log("🚀 ~ NIDeleteModal ~ location:", location);
    console.log("🚀 ~ NIDeleteModal ~ longitude:", longitude);
    console.log("🚀 ~ NIDeleteModal ~ latitude:", latitude);
    console.log("🚀 ~ NIDeleteModal ~ rowObject:", rowObject);

    //Todo: ni data edit API 연동하기
    //await

    setlocation("");
    setlongitude("");
    setlatitude("");
    closeDeleteModal();
  };

  const editCancelHandler = () => {
    setlocation("");
    setlongitude("");
    setlatitude("");
    closeDeleteModal();
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
      isOpen={deleteModalIsOpen}
      onRequestClose={closeDeleteModal}
      contentLabel="Example Modal">
      <div className="ni-edit-modal--container">
        <div className="ni-edit-modal--header">노드 삭제</div>
        <div className="ni-edit-modal-content-container">
          <div className="ni-edit-modal-content">
            <div className="ni-edit-modal-content--divider"></div>
            <div className="ni-edit-modal-content-container--container">
              <div className="ni-edit-modal-content--label">정말로 삭제하시겠습니까?</div>
            </div>
          </div>
        </div>

        <div className="ni-edit-modal--button-container">
          <div className="ni-edit-modal--cancel" onClick={editCancelHandler}>
            취소
          </div>
          <div className="ni-edit-modal--done" onClick={editDoneHandler}>
            삭제
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default NIDeleteModal;
