import React, { useMemo, memo, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import GenreToggler from '../GenreToggler/GenreToggler';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Cards from '../Cards/Cards';

import { CardsSortBy, sortByAction } from '../../store/actions/cardsFiltersAction';
import { ICardsDataState, IFiltersState } from '../../store/types';

import './Main.scss';

function Main(): JSX.Element {
  const cards = useSelector((state: ICardsDataState) => state.cardsData);
  const { sortBy, showByGenre } = useSelector((state: IFiltersState) => state.filters);
  const dispatch = useDispatch();

  const genres = useMemo(
    () =>
      Array.from(
        new Set(
          cards.reduce(
            (acc, { genre }) => {
              acc.push(...genre);
              return acc;
            },
            ['all']
          )
        )
      ),
    [cards]
  );

  const filteredCards = useMemo(
    () =>
      cards.filter((card) => {
        if (showByGenre === 'all') {
          return true;
        }
        return card.genre.includes(showByGenre);
      }),
    [cards, showByGenre]
  );

  function onOptionClick(e: ChangeEvent<HTMLSelectElement>): void {
    dispatch(sortByAction(e.target.value as CardsSortBy));
  }

  return (
    <main className="main-content">
      <ErrorBoundary>
        <nav className="cards-navigation">
          <GenreToggler genres={genres.slice(0, 5)} />
          <div className="cards-navigation__filters">
            <label className="cards-navigation__filters__label" htmlFor="filters">
              sort by
            </label>
            <select
              value={sortBy}
              onChange={onOptionClick}
              className="cards-navigation__filters__select"
              id="filters"
            >
              <option className="cards-navigation__filters__option" value="title">
                title
              </option>
              <option className="cards-navigation__filters__option" value="release_date">
                release date
              </option>
            </select>
          </div>
        </nav>
        <div className="line" />
        <span className="cards-counter">
          <span className="cards-counter__value">{filteredCards.length}</span> movies found
        </span>
        <Cards />
      </ErrorBoundary>
    </main>
  );
}

export default memo(Main);
