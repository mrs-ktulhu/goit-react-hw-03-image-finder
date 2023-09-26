import React, { Component } from 'react';
import { Searchbar } from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Modal from '../Modal/Modal';
import Loader from '../Loader';
import { AppStyled } from './App.styled';
import Button from 'components/Buton/Button';
import { fetchImages } from 'api';

export class App extends Component {
  state = {
    photos: [],
    showModal: false,
    selectedImage: '',
    isLoading: false,
    searchQuery: null,
  };

  openModal = imageSrc => {
    this.setState({ showModal: true, selectedImage: imageSrc });
  };

  closeModal = () => {
    this.setState({ showModal: false, selectedImage: '' });
  };

  handleClickLoadMore = async () => {
    this.setState((prevState) => ({
      page: prevState.page + 1, 
    }));
  };

  handleSearch = async (searchQuery) => {
    try {
      const images = await fetchImages(searchQuery);
      this.setState({ photos: images, searchQuery });
    } catch (error) {
      console.error('Ошибка при запросе:', error);
    }
  };

render() {
  const { showModal, selectedImage, closeModal, isLoading, photos } = this.state;

  return (
    <AppStyled>
      <Searchbar handleSearch={this.handleSearch}/>
      {isLoading && <Loader />}
      <ImageGallery
        photos={this.state.photos}
        openModal={this.openModal}
        searchQuery={this.state.searchQuery}
      />
      {showModal && (
        <Modal
          isOpen={showModal}
          onClose={closeModal}
          imageSrc={selectedImage}
          imageAlt="Large Image"
        />
      )}

      {photos.length > 0 && (
        < Button onClick={this.handleClickLoadMore}/>
      )}
    </AppStyled>
  );
}
}
