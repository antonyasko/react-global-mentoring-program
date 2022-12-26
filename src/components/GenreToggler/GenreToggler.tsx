import React, { SyntheticEvent, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { IGenreTogglerProps } from './GenreToggler.types';

import { showByGenreAction } from '../../store/actions/cardsFiltersAction';
import { IFiltersState } from '../../store/types';

import './GenreToggler.scss';

function GenreToggler({ genres }: IGenreTogglerProps): JSX.Element {
  const dispatch = useDispatch();
  const { showByGenre } = useSelector((state: IFiltersState) => state.filters);
  const navigate = useNavigate();

  function onButtonClick(e: SyntheticEvent<HTMLButtonElement>): void {
    const genre = (e.target as HTMLButtonElement).dataset.genre as string;
    dispatch(showByGenreAction(genre));
    navigate(`genre=${genre}`);
  }

  return (
    <div className="container genre-toggler">
      {genres.map((genre) => (
        <button
          type="button"
          className={`genre-toggler__button ${genre === showByGenre ? 'active' : ''}`}
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
