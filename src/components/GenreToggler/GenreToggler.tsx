/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState, SyntheticEvent, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IGenreTogglerProps } from './GenreToggler.types';

import { showByGenreAction } from '../../store/actions/cardsFiltersAction';
import { IFiltersState } from '../../store/types';

import './GenreToggler.scss';

function GenreToggler({ genres }: IGenreTogglerProps): JSX.Element {
  const dispatch = useDispatch();
  const { showByGenre } = useSelector((state: IFiltersState) => state.filters);

  function onButtonClick(e: SyntheticEvent<HTMLButtonElement>): void {
    // @ts-ignore
    dispatch(showByGenreAction((e.target as HTMLButtonElement).dataset.genre as string));
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
