/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from './Card/Card';

import { IState } from '../../store/types';
import { deleteCard } from '../../store/actions/cardsDataAction';

import './Cards.scss';

function Cards(): JSX.Element {
  const cards = useSelector((state: IState) => state?.cardsData);
  // For testing ErrorBoundary uncomment next line
  // throw Error;
  const dispatch = useDispatch();

  const deleteMovie = useCallback(
    (id: string): void => {
      // @ts-ignore
      dispatch(deleteCard(id));
    },
    [dispatch]
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

export default memo(Cards);
