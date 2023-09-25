import React, { Component } from 'react';
import { Searchbar } from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Modal from '../Modal/Modal';
import Loader from '../Loader';
import { AppStyled} from './App.styled';


export class App extends Component {
  state = {
    photos: [],
    showModal: false,
    selectedImage: '',
    isLoading: false,
  };


  openModal = imageSrc => {
    this.setState({ showModal: true, selectedImage: imageSrc });
  };

  closeModal = () => {
    this.setState({ showModal: false, selectedImage: '' });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.setState({ isLoading: true, photos: [], page: 1 });
      this.fetchImages(this.props.searchQuery, 1);
    }
  }

  render() {
    const { showModal, selectedImage, closeModal, isLoading } = this.state;

    return (
      <AppStyled>
        <Searchbar />
        {isLoading && <Loader />}
        <ImageGallery
          searchQuery={this.state.searchQuery}
          photos={this.state.photos}
          handleSearch={this.handleSearch}
          openModal={this.openModal}
        />
        {showModal && (
          <Modal
            isOpen={showModal}
            onClose={closeModal}
            imageSrc={selectedImage}
            imageAlt="Large Image"
          />
        )}
      </AppStyled>
    );
  }
}
