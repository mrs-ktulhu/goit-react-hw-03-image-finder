import React, { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
import '../../src/styles.css';

export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSearch(this.state.searchQuery);
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" role="search" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <BsSearch>
              {' '}
              <span className="SearchForm-button-label">Search</span>
            </BsSearch>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="searchQuery"
            value={this.state.searchQuery}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
