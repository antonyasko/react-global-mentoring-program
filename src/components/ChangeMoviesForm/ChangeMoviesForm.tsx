import React, { useId, useState } from 'react';

import { IChangeMoviesForm } from './ChangeMoviesForm.types';

import './ChangeMoviesForm.scss';

function ChangeMoviesForm({ heading, type, onReset, onSubmit }: IChangeMoviesForm): JSX.Element {
  // const [data, setData] = useState({
  //   ...cardData,
  // });

  const inputTitleId = useId();
  const inputMovieUrlId = useId();
  const inputRatingId = useId();
  const inputRuntimeId = useId();

  return (
    <form className="change-movies-form">
      <h2 className="change-movies-form__heading">{heading}</h2>

      <div className="change-movies-form__inputs">
        <div className="input-wrapper">
          <label className="change-movies-form__label" htmlFor={inputTitleId}>
            Title
          </label>
          <input
            className="change-movies-form__text-input"
            name="title"
            id={inputTitleId}
            type="text"
            placeholder="Movie"
          />
        </div>

        <div className="input-wrapper">
          <label className="change-movies-form__label" htmlFor={inputTitleId}>
            Release Date
          </label>
          <input
            className="change-movies-form__text-input"
            name="title"
            id={inputTitleId}
            type="date"
            placeholder="Movie"
          />
        </div>

        <div className="input-wrapper">
          <label className="change-movies-form__label" htmlFor={inputMovieUrlId}>
            Movie url
          </label>
          <input
            className="change-movies-form__text-input"
            name="title"
            id={inputMovieUrlId}
            type="text"
            placeholder="https://"
          />
        </div>

        <div className="input-wrapper">
          <label className="change-movies-form__label" htmlFor={inputRatingId}>
            Rating
          </label>
          <input
            className="change-movies-form__text-input"
            name="title"
            id={inputRatingId}
            type="text"
            placeholder="7.8"
          />
        </div>

        <div className="input-wrapper">
          <label className="change-movies-form__label" htmlFor={inputRuntimeId}>
            Runtime
          </label>
          <input
            className="change-movies-form__text-input"
            name="title"
            id={inputRuntimeId}
            type="text"
            placeholder="minutes"
          />
        </div>
      </div>
    </form>
  );
}

export default ChangeMoviesForm;
