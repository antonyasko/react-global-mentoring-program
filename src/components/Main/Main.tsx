import React, { useContext } from 'react';

import { GenreToggle } from '../GenreToggle/GenreToggle';
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
          <GenreToggle genres={['all', 'documentary', 'comedy', 'horror', 'crime']} />
          <div className="card-filters">
            <label className="filters-label" htmlFor="filters">
              sort by
            </label>
            <select id="filters">
              <option value="release date">release date</option>
              <option value="title">title</option>
            </select>
          </div>
        </nav>
        <div className="line" />
        <span className="cards-counter">
          <span className="count">{cards.length}</span> movies found
        </span>
        <Cards />
      </ErrorBoundary>
    </main>
  );
}

export default Main;
