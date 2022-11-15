import React, { memo, useContext } from 'react';

import GenreToggler from '../GenreToggler/GenreToggler';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Cards from '../Cards/Cards';
import CardsDataContext from '../../store/cardsDataContext';

import './Main.scss';

function Main(): JSX.Element {
  const { cards } = useContext(CardsDataContext);

  return (
    <main className="main-content">
      <ErrorBoundary>
        <nav className="cards-navigation">
          <GenreToggler genres={['all', 'documentary', 'comedy', 'horror', 'crime']} />
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
