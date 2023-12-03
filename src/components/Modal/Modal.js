import React from "react";
import "./Modal.scss";
import useModal from "./useModal";

const Modal = (props) => {
  const {
    showModal,
    closeModal,
    handleYesClick,
    handleCancelClick,
  } = useModal(props);

  return showModal ? (
    <div className="modal-overlay">
      <div className="modal">
        <button onClick={closeModal} className="close-button">
          X
        </button>
        <div className="modal-content">
          <p>Are you sure you want to delete multiple messages?</p>
          <div className="buttons">
            <button onClick={handleYesClick}>Yes</button>
            <button onClick={handleCancelClick}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
