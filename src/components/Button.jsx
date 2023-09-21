import React, { Component } from 'react';
import '../../src/styles.css';

export class Button extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSearch(this.state.searchQuery);
  };
  render() {
    return (
      <form className="SearchForm" role="search" onSubmit={this.handleSubmit}>
        <button className="Button" type="button">
          LOAD MORE
        </button>
      </form>
    );
  }
}
