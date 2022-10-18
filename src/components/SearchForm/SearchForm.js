import { useState, useRef, useId } from "react";
import './SearchForm.css'

export function SearchForm() {
  const searchInput = useRef(null);
  const [searchValue, setSearchValue] = useState("");
  const searchInputId = useId();

  function onInputChange() {
    setSearchValue(searchInput.current.value);
  }

  function onButtonClick(e) {
    e.preventDefault();

    console.log("What do you want to watch?", searchValue);
  }

  return (
    <div className="container search-form">
      <form>
        <label htmlFor={searchInputId}>Find your movie</label>
        <input
          id={searchInputId}
          onChange={onInputChange}
          placeholder="What do you want to watch?"
          ref={searchInput}
          value={searchValue}
        />
        <button onClick={onButtonClick}>Search</button>
      </form>
    </div>
  );
}
