import React, { Component } from 'react';
import '../../src/styles.css';
import * as API from '../api';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';

export class App extends Component {
  state = {
    photos: [
      (id = ''),
      (webformatURL = ''),
      (largeImageURL = '')
    ],
  };

  addPhoto(values) {}
  render() {
    return (
      <div className="App">
        <Searchbar />
        <ImageGallery />
      </div>
    );
  }
}
