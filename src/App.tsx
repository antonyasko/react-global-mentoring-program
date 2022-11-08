import React, { useState, useMemo } from 'react';

import HomePage from './pages/HomePage/HomePage';

import { cardsData } from './cardsData';
import CardsDataContext from './store/cardsDataContext';
import ModalContext from './store/modalContext';

import './App.scss';

function App(): JSX.Element {
  const [cards, setCards] = useState(cardsData);
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    content: JSX.Element | JSX.Element[] | null;
  }>({
    isOpen: false,
    content: null,
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

  return (
    <div className="App">
      <ModalContext.Provider value={modalContext}>
        <CardsDataContext.Provider value={cardsContext}>
          <HomePage />
        </CardsDataContext.Provider>
      </ModalContext.Provider>
    </div>
  );
}

export default App;
