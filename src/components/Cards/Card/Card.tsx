import React, { useState, useCallback, useContext, memo } from 'react';

import { ICard } from './Card.types';

import CloseButton from '../../CloseButton/CloseButton';
import DeleteMovieForm from '../../DeleteMovieForm/DeleteMovieForm';
import ChangeMoviesForm from '../../ChangeMoviesForm/ChangeMoviesForm';

import ModalContext from '../../../store/modalContext';
// import MovieDetailsContext from '../../../store/movieDetailsContext';

import more from '../../../assets/svg/more.svg';

import './Card.scss';

function Card({
  movieUrl,
  title,
  genre,
  releaseDate,
  id,
  overview,
  rating,
  runtime,
  onDeleteCard,
}: ICard): JSX.Element {
  const [isSettingsShowing, setIsSettingsShowing] = useState<boolean>(false);

  const { setModalState } = useContext(ModalContext);
  // const { setMovieDetails } = useContext(MovieDetailsContext);

  const onButtonClick = useCallback(() => {
    setIsSettingsShowing((p) => !p);
  }, []);

  const onConfirmClick = useCallback(() => {
    onDeleteCard(id);
    setModalState({
      isOpen: false,
      content: null,
    });
  }, [id, onDeleteCard, setModalState]);

  function onEditClick(): void {
    setIsSettingsShowing(false);

    setModalState({
      isOpen: true,
      content: (
        <ChangeMoviesForm
          type="edit"
          heading="Edit movie"
          card={{
            movieUrl,
            title,
            genre,
            releaseDate,
            id,
            overview,
            rating,
            runtime,
          }}
        />
      ),
    });
  }

  function onDeleteClick(): void {
    setIsSettingsShowing(false);

    setModalState({
      isOpen: true,
      content: <DeleteMovieForm onConfirm={onConfirmClick} />,
    });
  }

  function onCardClick(): void {
    // setMovieDetails({ isMovieDetailsShowing: true, movieId: id });
  }

  return (
    <li className="card">
      <img
        className="card__poster"
        src={movieUrl}
        alt={title}
        onClick={onCardClick}
        role="presentation"
      />
      <div className="card__description">
        <p className="card__description__title">{title}</p>
        <p className="card__description__genre">{genre.join(', ')}</p>
        <p className="card__description__release-date">{new Date(releaseDate).getFullYear()}</p>
      </div>
      {!isSettingsShowing ? (
        <button onClick={onButtonClick} className="card__more-button" type="button">
          <img className="card__more-button__icon" src={more} alt="more" />
        </button>
      ) : (
        <div className="card__settings">
          <CloseButton onClick={onButtonClick} size="xs" />
          <button onClick={onEditClick} className="card__settings__edit-button" type="button">
            Edit
          </button>
          <button onClick={onDeleteClick} className="card__settings__delete-button" type="button">
            Delete
          </button>
        </div>
      )}
    </li>
  );
}

export default memo(Card);
