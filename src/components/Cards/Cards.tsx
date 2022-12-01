/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { memo, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from './Card/Card';

import { ICardsDataState, IFiltersState } from '../../store/types';
import { deleteCard } from '../../store/actions/cardsDataAction';

import './Cards.scss';

function Cards(): JSX.Element {
  // For testing ErrorBoundary uncomment next line
  // throw Error;
  const dispatch = useDispatch();
  const cards = useSelector((state: ICardsDataState) => state.cardsData);
  const { sortBy, showByGenre } = useSelector((state: IFiltersState) => state.filters);

  const deleteMovie = useCallback(
    (id: string): void => {
      // @ts-ignore
      dispatch(deleteCard(id));
    },
    [dispatch]
  );

  const filteredCards = useMemo(
    () =>
      cards
        .filter((card) => {
          if (showByGenre === 'all') {
            return true;
          }
          return card.genre.includes(showByGenre);
        })
        .sort((a, b) => {
          if (sortBy === 'title') {
            return a.title.localeCompare(b.title);
          }
          return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
        }),
    [cards, showByGenre, sortBy]
  );

  return (
    <ul className="cards">
      {filteredCards.map(
        ({ id, movieUrl, releaseDate, title, genre, overview, rating, runtime }) => (
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
        )
      )}
    </ul>
  );
}

export default memo(Cards);
