import React from 'react';

function Modal({ isOpen, onClose, imageSrc, imageAlt }) {
  return (
    isOpen && (
      <div className="overlay" onClick={onClose}>
        <div className="modal">
          <img src={imageSrc} alt={imageAlt} />
          <button type="button" onClick={onClose}>
            Закрыть
          </button>
        </div>
      </div>
    )
  );
}

export default Modal;
