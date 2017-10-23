import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
  return (
    <Modal
      isOpen = {props.isModalOpen}
      onRequestClose = {props.handleCloseModal}
      contentLabel = "Selected Option"
      closeTimeoutMS = { 200 }
      className = "modal"
    >
      <h3>Selected Option</h3>
      {props.selectedOption && <p>{props.selectedOption}</p>}
      <button onClick={ props.handleCloseModal }>Close me</button>
    </Modal>
  )
}

export default OptionModal;