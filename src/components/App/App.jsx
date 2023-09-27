import React, { Component } from 'react';
import { fetchImages } from 'api';
import Button from 'components/Buton/Button';
import { Searchbar } from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Modal from '../Modal/Modal';
import Loader from '../Loader';
import { AppStyled } from './App.styled';

export class App extends Component {
  state = {
    photos: [],
    showModal: false,
    largeImageUrl: '',
    isLoading: false,
    searchQuery: '',
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.fetchImages();
    }
  }

  handleFormSubmit = query => {
    this.setState({ query, page: 1, images: [] });
  };

  openModal = imageSrc => {
    this.setState({ showModal: true, selectedImage: imageSrc });
  };

  closeModal = () => {
    this.setState({ showModal: false, selectedImage: '' });
  };

  handleClickLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleSearch = async searchQuery => {
    try {
      const photos = await fetchImages(searchQuery);
      this.setState({ photos: photos, searchQuery });
    } catch (error) {
      console.error('Ошибка при запросе:', error);
    }
  };
  handleImageClick = id => {
    const clickedImage = this.state.photos.find(photo => photo.id === id);
    if (clickedImage) {
      this.setState({
        largeImageUrl: clickedImage.largeImageURL,
        showModal: true,
      });
    }
  };

  fetchImages = () => {
    const { query, page } = this.state;

    this.setState({ loading: true });

    fetchImages(query, page)
      .then(photos => {
        this.setState(prevState => ({
          photos: [...prevState.photos, ...photos],
          loading: false,
        }));
      })
      .catch(error => {
        console.log('Error fetching images:', error);
        this.setState({ loading: false });
      });
  };

  render() {
    const { showModal, isLoading, photos, largeImageUrl } = this.state;

    return (
      <AppStyled>
        <Searchbar handleFormSubmit={this.handleFormSubmit} />
        {isLoading && <Loader />}
        <ImageGallery
          photos={photos}
          onPhotoClick={this.handleImageClick}
          searchQuery={this.state.searchQuery}
        />
        {!!photos.length && !isLoading && (
          <Button onClick={this.handleClickLoadMore}>Load more</Button>
        )}
        {showModal && (
          <Modal
            largeImageUrl={largeImageUrl}
            alt="Large Image"
            onClose={this.closeModal}
          />
        )}
      </AppStyled>
    );
  }
}
