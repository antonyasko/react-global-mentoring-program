import React, { ChangeEvent, useId, useState, useContext, SyntheticEvent } from 'react';

import { IChangeMoviesForm } from './ChangeMoviesForm.types';

import CardsDataContext from '../../store/cardsDataContext';
import ModalContext from '../../store/modalContext';

import { ICardData } from '../Cards/Card/Card.types';
import { genres } from './ChangeMoviesForm.data';

import './ChangeMoviesForm.scss';

function ChangeMoviesForm({ heading, type, card }: IChangeMoviesForm): JSX.Element {
  const { setCards } = useContext(CardsDataContext);
  const { setModalState } = useContext(ModalContext);

  const initialCardData =
    type === 'add'
      ? {
          id: '',
          movieUrl: '',
          title: '',
          genre: [],
          releaseDate: '',
          overview: '',
          rating: '',
          runtime: '',
        }
      : card!;

  const [cardData, setCardData] = useState<ICardData>(initialCardData);
  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);

  const inputTitleId = useId();
  const inputDateId = useId();
  const inputMovieUrlId = useId();
  const inputRatingId = useId();
  const inputGenreId = useId();
  const inputRuntimeId = useId();

  function onTextInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    setCardData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function onCheckboxInputChange({ target }: ChangeEvent<HTMLInputElement>): void {
    const { checked, value } = target;

    setCardData((prev) => ({
      ...prev,
      genre: checked ? [...prev.genre, value] : prev.genre.filter((genre) => genre !== value),
    }));
  }

  function resetForm(): void {
    setCardData(initialCardData);
  }

  function submitForm(event: SyntheticEvent): void {
    event.preventDefault();

    if (type === 'add') {
      setCards((prev) => [...prev, { ...cardData, id: cardData.movieUrl }]);
    } else {
      setCards((prev) =>
        prev.map((prevCard) => {
          if (prevCard.id === card!.id) {
            return { ...prevCard, ...cardData };
          }

          return prevCard;
        })
      );
    }

    setModalState({
      isOpen: false,
      content: null,
    });
  }

  function onSelectClick(): void {
    setIsSelectOpen((prev) => !prev);
  }

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
            onChange={onTextInputChange}
            value={cardData.title}
          />
        </div>

        <div className="input-wrapper">
          <label className="change-movies-form__label" htmlFor={inputDateId}>
            Release Date
          </label>
          <input
            className="change-movies-form__text-input"
            name="releaseDate"
            id={inputDateId}
            type="date"
            placeholder="Select date"
            onChange={onTextInputChange}
            value={cardData.releaseDate}
          />
        </div>

        <div className="input-wrapper">
          <label className="change-movies-form__label" htmlFor={inputMovieUrlId}>
            Movie url
          </label>
          <input
            className="change-movies-form__text-input"
            name="movieUrl"
            id={inputMovieUrlId}
            type="text"
            placeholder="https://"
            onChange={onTextInputChange}
            value={cardData.movieUrl}
          />
        </div>

        <div className="input-wrapper">
          <label className="change-movies-form__label" htmlFor={inputRatingId}>
            Rating
          </label>
          <input
            className="change-movies-form__text-input"
            name="rating"
            id={inputRatingId}
            type="text"
            placeholder="7.8"
            onChange={onTextInputChange}
            value={cardData.rating}
          />
        </div>

        <div className="input-wrapper">
          <label className="change-movies-form__label" htmlFor={inputGenreId}>
            Genre
          </label>
          <button
            type="button"
            className="change-movies-form__text-input button"
            onClick={onSelectClick}
          >
            Select Genre
          </button>
          {isSelectOpen && (
            <ul className="checkbox_list">
              {genres.map((genre) => {
                return (
                  <li key={genre} className="checkbox-item">
                    <label className="checkbox-item__label" htmlFor={genre}>
                      <input
                        className="checkbox-item__input"
                        type="checkbox"
                        id={genre}
                        value={genre}
                        checked={cardData.genre.includes(genre)}
                        onChange={onCheckboxInputChange}
                      />
                      {genre}
                    </label>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="input-wrapper">
          <label className="change-movies-form__label" htmlFor={inputRuntimeId}>
            Runtime
          </label>
          <input
            className="change-movies-form__text-input"
            name="runtime"
            id={inputRuntimeId}
            type="text"
            placeholder="minutes"
            onChange={onTextInputChange}
            value={cardData.runtime}
          />
        </div>

        <div className="input-wrapper textarea">
          <label className="change-movies-form__label" htmlFor={inputRuntimeId}>
            Overview
          </label>
          <textarea
            className="change-movies-form__text-input"
            name="overview"
            id={inputRuntimeId}
            placeholder="Movie description"
            onChange={onTextInputChange}
            value={cardData.overview}
          />
        </div>
      </div>

      <div className="change-movies-form__form-controls">
        <button className="reset-button" type="button" onClick={resetForm}>
          Reset
        </button>
        <button className="submit-button" type="submit" onClick={submitForm}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default ChangeMoviesForm;
