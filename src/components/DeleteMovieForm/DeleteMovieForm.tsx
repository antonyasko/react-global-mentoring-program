import React, { memo } from 'react';

import { IDeleteMovieForm } from './DeleteMovieForm.types';

import './DeleteMovieForm.scss';

function DeleteMovieForm({ onConfirm }: IDeleteMovieForm): JSX.Element {
  return (
    <div className="delete-movie-form">
      <h2 className="delete-movie-form__title">Delete MOVIE</h2>
      <p className="delete-movie-form__description">Are you sure you want to delete this movie?</p>
      <button className="delete-movie-form__confirm-button" onClick={onConfirm} type="button">
        Confirm
      </button>
    </div>
  );
}

export default memo(DeleteMovieForm);
