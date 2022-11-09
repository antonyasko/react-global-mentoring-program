import React, { useState, useCallback, useContext } from 'react';

import { ICard } from './Card.types';

import CloseButton from '../../CloseButton/CloseButton';
import DeleteMovieForm from '../../DeleteMovieForm/DeleteMovieForm';
import ChangeMoviesForm from '../../ChangeMoviesForm/ChangeMoviesForm';
import ModalContext from '../../../store/modalContext';

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

  return (
    <li className="card">
      <img className="poster" src={movieUrl} alt={title} />
      <div className="description">
        <p className="title">{title}</p>
        <p className="genre">{genre.join(', ')}</p>
        <p className="release-date">{new Date(releaseDate).getFullYear()}</p>
      </div>
      {!isSettingsShowing ? (
        <button onClick={onButtonClick} className="more" type="button">
          <img src={more} alt="more" />
        </button>
      ) : (
        <div className="settings">
          <CloseButton onClick={onButtonClick} size="xs" />
          <button onClick={onEditClick} className="edit" type="button">
            Edit
          </button>
          <button onClick={onDeleteClick} className="delete" type="button">
            Delete
          </button>
        </div>
      )}
    </li>
  );
}

export default Card;
