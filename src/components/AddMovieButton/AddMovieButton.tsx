import React, { useContext, memo } from 'react';

import ChangeMoviesForm from '../ChangeMoviesForm/ChangeMoviesForm';
import ModalContext from '../../store/modalContext';

import './AddMovieButton.scss';

function AddMovieButton(): JSX.Element {
  const { setModalState } = useContext(ModalContext);

  function onButtonClick(): void {
    setModalState({
      isOpen: true,
      content: <ChangeMoviesForm type="add" heading="Add movie" />,
    });
  }

  return (
    <button type="button" className="add-movie" onClick={onButtonClick}>
      + add movie
    </button>
  );
}

export default memo(AddMovieButton);
