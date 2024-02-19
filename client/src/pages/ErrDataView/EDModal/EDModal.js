import React, { useState } from "react";
import Modal from "react-modal";
import "./EDModal.css";

function EDModal({ modalIsOpen, closeModal, rowObject }) {
  Modal.setAppElement("#root");

  const [errCuase, seterrCuase] = useState("");
  const [solution, setsolution] = useState("");

  const editDoneHandler = async () => {
    console.log("🚀 ~ EDModal ~ errCuase:", errCuase);
    console.log("🚀 ~ EDModal ~ solution:", solution);
    console.log("🚀 ~ EDModal ~ rowObject:", rowObject);

    //Todo: err data edit API 연동하기
    //await

    seterrCuase("");
    setsolution("");
    closeModal();
  };
  const editCancelHandler = () => {
    seterrCuase("");
    setsolution("");
    closeModal();
  };

  const errCuaseHandler = (e) => {
    seterrCuase(e.target.value);
  };

  const solutionHandler = (e) => {
    setsolution(e.target.value);
  };

  return (
    <Modal
      className="err_edit_modal"
      overlayClassName="Overlay"
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal">
      <div className="err-edit-modal--container">
        <div className="err-edit-modal--header">에러 정보 수정</div>
        <div className="err-edit-modal-content-container">
          <div className="err-edit-modal-content">
            <div className="err-edit-modal-content--divider"></div>
            <div className="err-edit-modal-content-container--container">
              <div className="err-edit-modal-content--label">에러 ID</div>
              <div className="err-edit-modal-content--field--text">05CZRhogTicXVCn1wFCf</div>
            </div>
          </div>
        </div>
        <div className="err-edit-modal-content-container">
          <div className="err-edit-modal-content">
            <div className="err-edit-modal-content--divider"></div>
            <div className="err-edit-modal-content-container--container">
              <div className="err-edit-modal-content--label">에러 원인</div>{" "}
              <textarea
                className="err-edit-modal-content--field--input"
                value={errCuase}
                onChange={errCuaseHandler}
              />
            </div>
          </div>
        </div>
        <div className="err-edit-modal-content-container">
          <div className="err-edit-modal-content">
            <div className="err-edit-modal-content--divider"></div>
            <div className="err-edit-modal-content-container--container">
              <div className="err-edit-modal-content--label">해결 방법</div>
              <textarea
                className="err-edit-modal-content--field--input"
                value={solution}
                onChange={solutionHandler}
              />
            </div>
          </div>
        </div>
        <div className="err-edit-modal--button-container">
          <div className="err-edit-modal--concel" onClick={editCancelHandler}>
            취소
          </div>
          <div className="err-edit-modal--done" onClick={editDoneHandler}>
            완료
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default EDModal;
