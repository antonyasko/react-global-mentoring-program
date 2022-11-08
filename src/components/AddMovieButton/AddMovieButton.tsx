import React, { useContext } from 'react';

import ChangeMoviesForm from '../ChangeMoviesForm/ChangeMoviesForm';
import ModalContext from '../../store/modalContext';

import './AddMovieButton.scss';

function AddMovieButton(): JSX.Element {
  const { setModalState } = useContext(ModalContext);

  // setModalContent(
  //   <ChangeMoviesForm
  //     onConfirm={(): void => {
  //       setIsModalOpen(false);
  //     }}
  //   />
  // );
  function onButtonClick(): void {
    setModalState({
      isOpen: true,
      content: (
        <ChangeMoviesForm
          type="add"
          heading="Add movie"
          onReset={() => console.log('reset')}
          onSubmit={() => console.log('submit')}
        />
      ),
    });
  }

  return (
    <button type="button" className="add-movie" onClick={onButtonClick}>
      + add movie
    </button>
  );
}

export default AddMovieButton;
