import React, { useState, SyntheticEvent, memo } from 'react';

import { IGenreTogglerProps } from './GenreToggler.types';

import './GenreToggler.scss';

function GenreToggler({ genres }: IGenreTogglerProps): JSX.Element {
  const [togglerState, setTogglerState] = useState({
    activeGenre: 'all',
    genres,
  });

  function onButtonClick(e: SyntheticEvent<HTMLButtonElement>): void {
    console.log('Genre: ', (e.target as HTMLButtonElement).dataset.genre);

    setTogglerState((prevState) => ({
      ...prevState,
      activeGenre: (e.target as HTMLButtonElement).dataset.genre as string,
    }));
  }

  return (
    <div className="container genre-toggler">
      {togglerState.genres.map((genre) => (
        <button
          type="button"
          className={`genre-toggler__button ${genre === togglerState.activeGenre ? 'active' : ''}`}
          data-genre={genre}
          key={genre}
          onClick={onButtonClick}
        >
          {genre}
        </button>
      ))}
    </div>
  );
}

export default memo(GenreToggler);
