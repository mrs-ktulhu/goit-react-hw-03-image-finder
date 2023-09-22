import React, { Component } from 'react';
import { fetchImages } from '../api';
import '../../src/styles.css';
import { Searchbar } from './Searchbar';
import ImageGallery from './ImageGallery';
import Modal from './Modal';

export class App extends Component {
  state = {
    photos: [],
    showModal: false,
    selectedImage: '',
  };

  componentDidMount() {
   
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
   
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (e) => {
  
    if (e.key === 'Escape' && this.state.showModal) {
      this.closeModal();
    }
  };

  handleSearch = async (searchQuery) => {
    try {
      const images = await fetchImages(searchQuery);
      this.setState({ photos: images, searchQuery });
    } catch (error) {
      console.error('Ошибка при запросе:', error);
    }
  };

  openModal = (imageSrc) => {
    this.setState({ showModal: true, selectedImage: imageSrc });
  };

  closeModal = () => {
    this.setState({ showModal: false, selectedImage: '' });
  };

  render() {
    const { showModal, selectedImage } = this.state;

    return (
      <div className="App">
        <Searchbar handleSearch={this.handleSearch} />
        <ImageGallery
          searchQuery={this.state.searchQuery}
          photos={this.state.photos}
          handleSearch={this.handleSearch}
          openModal={this.openModal}
        />
        {showModal && (
          <Modal
            isOpen={showModal}
            onClose={this.closeModal}
            imageSrc={selectedImage}
            imageAlt="Large Image"
          />
        )}
      </div>
    );
  }
}
