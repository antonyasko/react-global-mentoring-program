import React, { useCallback, useContext } from 'react';

import Card from './Card/Card';
import { ICardData } from './Card/Card.types';

import CardsDataContext from '../../store/cardsDataContext';

import './Cards.scss';

function Cards(): JSX.Element {
  // For testing ErrorBoundary
  // throw Error;
  const { cards, setCards } = useContext(CardsDataContext);

  const deleteMovie = useCallback(
    (id: string): void => {
      setCards(cards.filter((card) => card.id !== id));
    },
    [cards, setCards]
  );

  const editCard = useCallback((updatedCard: ICardData): void => {
    console.log(updatedCard);
  }, []);

  const addCard = useCallback((newCard: ICardData): void => {
    setCards([...cards, newCard]);
  }, []);

  return (
    <ul className="cards">
      {cards.map(({ id, posterUrl, year, name, genre }) => (
        <Card
          key={id}
          id={id}
          posterUrl={posterUrl}
          year={year}
          name={name}
          genre={genre}
          onDeleteCard={deleteMovie}
          onEditCard={editCard}
          onAddCard={addCard}
        />
      ))}
    </ul>
  );
}

export default Cards;
