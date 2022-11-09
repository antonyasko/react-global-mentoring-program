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

  return (
    <ul className="cards">
      {cards.map(({ id, movieUrl, releaseDate, title, genre, overview, rating, runtime }) => (
        <Card
          key={id}
          id={id}
          movieUrl={movieUrl}
          releaseDate={releaseDate}
          title={title}
          genre={genre}
          overview={overview}
          rating={rating}
          runtime={runtime}
          onDeleteCard={deleteMovie}
        />
      ))}
    </ul>
  );
}

export default Cards;
