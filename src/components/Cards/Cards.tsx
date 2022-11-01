import React from 'react';

import { ICard } from '../Main/cards';
import Card from './Card/Card';

import './Cards.scss';

interface ICards {
  cards: ICard[];
}

function Cards({ cards }: ICards): JSX.Element {
  // For testing ErrorBoundary
  // throw Error;

  return (
    <ul className="cards">
      {cards.map(({ id, posterUrl, year, name, genre }) => (
        <Card key={id} id={id} posterUrl={posterUrl} year={year} name={name} genre={genre} />
      ))}
    </ul>
  );
}

export default Cards;
