import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import './SearchBar.css';
import { useActions, useAppSelector } from '../hooks/redux';

const SearchBar = () => {
  const { handleSubmit, register } = useForm<{ value: string }>({
    mode: 'onSubmit',
  });
  const query = useAppSelector((state) => state.search.searchValue);
  const { searchAdded } = useActions();
  // const [searchBarValue, setSearchBarValue] = useState(query);
  // const clearHandleClick = () => {
  //   setSearchBarValue('');
  //   searchAdded('');
  // };

  const onSubmit: SubmitHandler<{ value: string }> = (data) => {
    searchAdded(data.value);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit(onSubmit)}>
      <label className="search-label-input">Search:</label>
      <input
        className="search-input"
        placeholder="Search"
        {...register('value')}
        defaultValue={String(query)}
      />
      <button type="submit" className="button-search" value="Search">
        Submit
      </button>
      {/* <input type="button" className="button-clear" value="Clear" onClick={clearHandleClick} /> */}
    </form>
  );
};
export default SearchBar;
