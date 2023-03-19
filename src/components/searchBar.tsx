import React, { ChangeEvent, Component } from 'react';

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
      <form className="searchBar">
        <input type="text" placeholder="Search" onChange={this.handleChange} value={inputValue} />
      </form>
    );
  }
}
export default SearchBar;
