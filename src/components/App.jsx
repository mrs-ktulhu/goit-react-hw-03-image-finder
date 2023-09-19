import React, { Component } from 'react';
import { fetchImages } from '../api';
import '../../src/styles.css';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';

export class App extends Component {
  state = {
    photos: [],
  };

handleSearch = async (searchQuery) => {
  try {
    const images = await fetchImages(searchQuery); 
    this.setState({ photos: images, searchQuery}); 
  } catch (error) {
    console.error('Ошибка при запросе:', error);
  }
}

 

  render() {
    return (
      <div className="App">
        <Searchbar handleSearch={this.handleSearch}/>
        <ImageGallery searchQuery={this.state.searchQuery} photos={this.state.photos} />
      </div>
    );
  }
}