import React, { useMemo, memo } from 'react';
import { useSelector } from 'react-redux';

import { IState } from '../../store/types';
import GenreToggler from '../GenreToggler/GenreToggler';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Cards from '../Cards/Cards';

import './Main.scss';

function Main(): JSX.Element {
  const cards = useSelector((state: IState) => state?.cardsData);

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

  return (
    <main className="main-content">
      <ErrorBoundary>
        <nav className="cards-navigation">
          <GenreToggler genres={genres.slice(0, 5)} />
          <div className="cards-navigation__filters">
            <label className="cards-navigation__filters__label" htmlFor="filters">
              sort by
            </label>
            <select className="cards-navigation__filters__select" id="filters">
              <option className="cards-navigation__filters__option" value="release date">
                release date
              </option>
              <option className="cards-navigation__filters__option" value="title">
                title
              </option>
            </select>
          </div>
        </nav>
        <div className="line" />
        <span className="cards-counter">
          <span className="cards-counter__value">{cards.length}</span> movies found
        </span>
        <Cards />
      </ErrorBoundary>
    </main>
  );
}

export default memo(Main);
