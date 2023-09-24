import React, { Component } from 'react';


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
        <div className="overlay" onClick={this.props.onClose}>
          <div className="modal">
            <img src={this.props.imageSrc} alt={this.props.imageAlt} />
          </div>
        </div>
      )
    );
  }
}

export default Modal;
