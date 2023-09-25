import React, { Component } from 'react';
import { Overlay, Modals } from './Modal.styled';


class Modal extends Component {

  handleKeyDown = (e) => {
    console.log('Key pressed:', e.key);
    if (e.key === 'Esc' || e.key === 'Escape') {
      this.closeModal();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }


  render() {
    return (
      this.props.isOpen && (
        <Overlay onClick={this.props.onClose}>
          <Modals>
            <img src={this.props.imageSrc} alt={this.props.imageAlt} />
          </Modals>
        </Overlay>
      )
    );
  }
}

export default Modal;
