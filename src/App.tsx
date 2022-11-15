import React, { useState, useMemo } from 'react';

import HomePage from './pages/HomePage/HomePage';

import { cardsData } from './cardsData';
import CardsDataContext from './store/cardsDataContext';
import ModalContext from './store/modalContext';

import './App.scss';
import MovieDetailsContext from './store/movieDetailsContext';

function App(): JSX.Element {
  const [cards, setCards] = useState(cardsData);
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

  const cardsContext = useMemo(
    () => ({
      cards,
      setCards,
    }),
    [cards, setCards]
  );

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
          <CardsDataContext.Provider value={cardsContext}>
            <HomePage />
          </CardsDataContext.Provider>
        </ModalContext.Provider>
      </MovieDetailsContext.Provider>
    </div>
  );
}

export default App;
