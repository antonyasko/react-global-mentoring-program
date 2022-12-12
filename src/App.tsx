import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';

import HomePage from './pages/HomePage/HomePage';

import ModalContext from './store/modalContext';
import MovieDetailsContext from './store/movieDetailsContext';

import './App.scss';
import { getCards } from './store/actions/cardsDataAction';

function App(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dispatch(getCards());
  }, [dispatch]);
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    content: JSX.Element | JSX.Element[] | null;
  }>({
    isOpen: false,
    content: null,
  });
  const [movieDetails, setMovieDetails] = useState<{
    isMovieDetailsShowing: boolean;
    movieId: string;
  }>({
    isMovieDetailsShowing: false,
    movieId: '',
  });

  const modalContext = useMemo(
    () => ({
      ...modalState,
      setModalState,
    }),
    [modalState, setModalState]
  );

  const movieDetailsContext = useMemo(
    () => ({
      ...movieDetails,
      setMovieDetails,
    }),
    [movieDetails, setMovieDetails]
  );

  return (
    <div className="App">
      <MovieDetailsContext.Provider value={movieDetailsContext}>
        <ModalContext.Provider value={modalContext}>
          <HomePage />
        </ModalContext.Provider>
      </MovieDetailsContext.Provider>
    </div>
  );
}

export default App;
