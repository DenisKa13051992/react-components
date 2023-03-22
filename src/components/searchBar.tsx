import React, { ChangeEvent, Component } from 'react';

import './SearchBar.css';

class SearchBar extends Component {
  state = { inputValue: localStorage.getItem('searchValue') || '' };

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    this.setState({ inputValue });
    localStorage.setItem('searchValue', inputValue);
  };

  render() {
    const inputValue = this.state.inputValue;
    return (
      <form className="search-bar">
        <input
          className="search-input"
          type="text"
          placeholder="Search"
          onChange={this.handleChange}
          value={inputValue}
        />
      </form>
    );
  }
}
export default SearchBar;
