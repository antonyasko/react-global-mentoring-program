/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, {
  ChangeEvent,
  useId,
  useState,
  useContext,
  SyntheticEvent,
  memo,
  useMemo,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { IChangeMoviesForm } from './ChangeMoviesForm.types';

import { ICardData } from '../Cards/Card/Card.types';

import ModalContext from '../../store/modalContext';
import { ICardsDataState } from '../../store/types';
import { createCard, updateCard } from '../../store/actions/cardsDataAction';

import './ChangeMoviesForm.scss';

function ChangeMoviesForm({ heading, type, card }: IChangeMoviesForm): JSX.Element {
  const dispatch = useDispatch();
  const { setModalState } = useContext(ModalContext);
  const cards = useSelector((state: ICardsDataState) => state.cardsData);

  const genres = useMemo(
    () =>
      Array.from(
        new Set(
          cards.reduce((acc, { genre }) => {
            acc.push(...genre);
            return acc;
          }, [] as string[])
        )
      ),
    [cards]
  );

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

  function submitForm(values: ICardData): void {
    if (type === 'add') {
      // @ts-ignore
      dispatch(createCard({ ...values, genre: cardData.genre }));
    } else {
      // @ts-ignore
      dispatch(updateCard({ ...values, genre: cardData.genre }));
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
    <Formik
      initialValues={cardData}
      validationSchema={Yup.object().shape({
        title: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required(),
        releaseDate: Yup.date().required(),
        movieUrl: Yup.string().url().required(),
        rating: Yup.number()
          .min(0, 'Must be more than 0')
          .max(10, 'Must be less than 10')
          .required(),
        runtime: Yup.number().min(1, 'Must be more than 1').max(999999).required(),
        overview: Yup.string().min(2, 'Too Short!').max(1000, 'Too Long!').required(),
      })}
      onSubmit={(values): void => {
        submitForm(values);
      }}
    >
      {({ errors, touched, values, handleChange }): JSX.Element => (
        <Form className="change-movies-form">
          <h2 className="change-movies-form__heading">{heading}</h2>

          <div className="change-movies-form__inputs">
            <div className="change-movies-form__inputs__input-wrapper">
              <label className="change-movies-form__label" htmlFor={inputTitleId}>
                {errors.title && touched.title ? errors.title : 'Title'}
              </label>
              <Field
                className="change-movies-form__text-input"
                name="title"
                id={inputTitleId}
                type="text"
                placeholder="Movie"
                onChange={handleChange}
                value={values.title}
              />
            </div>

            <div className="change-movies-form__inputs__input-wrapper">
              <label className="change-movies-form__label" htmlFor={inputDateId}>
                {errors.releaseDate && touched.releaseDate ? errors.releaseDate : 'Release Date'}
              </label>
              <Field
                className="change-movies-form__text-input"
                name="releaseDate"
                id={inputDateId}
                type="date"
                placeholder="Select date"
                onChange={handleChange}
                value={values.releaseDate}
              />
            </div>

            <div className="change-movies-form__inputs__input-wrapper">
              <label className="change-movies-form__label" htmlFor={inputMovieUrlId}>
                {errors.movieUrl && touched.movieUrl ? errors.movieUrl : 'Movie url'}
              </label>
              <Field
                className="change-movies-form__text-input"
                name="movieUrl"
                id={inputMovieUrlId}
                type="text"
                placeholder="https://"
                onChange={handleChange}
                value={values.movieUrl}
              />
            </div>

            <div className="change-movies-form__inputs__input-wrapper">
              <label className="change-movies-form__label" htmlFor={inputRatingId}>
                {errors.rating && touched.rating ? errors.rating : 'Rating'}
              </label>
              <Field
                className="change-movies-form__text-input"
                name="rating"
                id={inputRatingId}
                type="text"
                placeholder="7.8"
                onChange={handleChange}
                value={values.rating}
              />
            </div>

            <div className="change-movies-form__inputs__input-wrapper">
              <label className="change-movies-form__label" htmlFor={inputGenreId}>
                Genre
              </label>
              <button
                type="button"
                className="change-movies-form__text-input button"
                onClick={onSelectClick}
              >
                {errors.genre?.length === 0 && touched.genre ? 'Must be selected' : 'Select Genre'}
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
                            // checked={values.genre.includes(genre)}
                            onChange={(e): void => {
                              onCheckboxInputChange(e);
                              const isChecked = values.genre.includes(genre);

                              if (isChecked) {
                                values.genre.push(genre);
                              } else {
                                values.genre.filter((i) => i !== genre);
                              }
                            }}
                          />
                          {genre}
                        </label>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            <div className="change-movies-form__inputs__input-wrapper">
              <label className="change-movies-form__label" htmlFor={inputRuntimeId}>
                {errors.runtime && touched.runtime ? errors.runtime : 'Runtime'}
              </label>
              <Field
                className="change-movies-form__text-input"
                name="runtime"
                id={inputRuntimeId}
                type="text"
                placeholder="minutes"
                onChange={handleChange}
                value={values.runtime}
              />
            </div>

            <div className="change-movies-form__inputs__input-wrapper textarea">
              <label className="change-movies-form__label" htmlFor={inputRuntimeId}>
                {errors.overview && touched.overview ? errors.overview : 'Overview'}
              </label>
              <Field
                as="textarea"
                className="change-movies-form__text-input"
                name="overview"
                id={inputRuntimeId}
                placeholder="Movie description"
                onChange={handleChange}
                value={values.overview}
              />
            </div>
          </div>

          <div className="change-movies-form__form-controls">
            <button
              className="change-movies-form__form-controls__reset-button"
              type="button"
              onClick={resetForm}
            >
              Reset
            </button>
            <button
              className="change-movies-form__form-controls__submit-button"
              type="submit"
              disabled={Object.keys(errors).length !== 0}
              onClick={(): void => {
                const errorList = Object.keys(errors);

                if (errorList.length !== 0) {
                  errorList.forEach((i) => {
                    // @ts-ignore
                    // eslint-disable-next-line no-param-reassign
                    touched[i] = true;
                  });
                }
              }}
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default memo(ChangeMoviesForm);
