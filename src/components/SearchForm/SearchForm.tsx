import React, { memo, SyntheticEvent, useState, useRef, useId } from 'react';

import './SearchForm.scss';

function SearchForm(): JSX.Element {
  const searchInput = useRef<HTMLInputElement>(null);
  const [searchValue, setSearchValue] = useState('');
  const searchInputId = useId();

  function onInputChange(): void {
    setSearchValue((searchInput.current as HTMLInputElement).value);
  }

  function onButtonClick(e: SyntheticEvent): void {
    e.preventDefault();

    console.log('What do you want to watch?', searchValue);
  }

  return (
    <div className="container search-form-container">
      <form className="search-form">
        <label className="search-form__label" htmlFor={searchInputId}>
          Find your movie
        </label>
        <input
          className="search-form__input"
          id={searchInputId}
          onChange={onInputChange}
          placeholder="What do you want to watch?"
          ref={searchInput}
          value={searchValue}
        />
        <button className="search-form__button" type="button" onClick={onButtonClick}>
          Search
        </button>
      </form>
    </div>
  );
}

export default memo(SearchForm);
