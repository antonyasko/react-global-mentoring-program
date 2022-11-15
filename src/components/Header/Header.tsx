import React, { memo, useContext, useState } from 'react';

import AddMovieButton from '../AddMovieButton/AddMovieButton';
import Logo from '../Logo/Logo';
import MovieDetails from '../MovieDetails/MovieDetails';
import SearchForm from '../SearchForm/SearchForm';

import MovieDetailsContext from '../../store/movieDetailsContext';

import logo from '../../assets/images/header.jpg';
import search from '../../assets/svg/search.svg';

import './Header.scss';
import CardsDataContext from '../../store/cardsDataContext';

function Header(): JSX.Element {
  const { cards } = useContext(CardsDataContext);
  const { isMovieDetailsShowing, movieId, setMovieDetails } = useContext(MovieDetailsContext);
  const {
    movieUrl = '',
    title = '',
    overview = '',
    releaseDate = '',
    rating = '',
    runtime = '',
    id = '',
    genre = [''],
  } = cards.find((item) => item.id === movieId) || {};

  function onBackToSearchClick(): void {
    setMovieDetails({ isMovieDetailsShowing: false, movieId: '' });
  }

  return (
    <header
      className={`header${isMovieDetailsShowing ? ' with-movie-details' : ''}`}
      style={{
        background: isMovieDetailsShowing ? '#232323' : `url('${logo}')`,
      }}
    >
      <Logo isMain />
      {isMovieDetailsShowing ? (
        <>
          <button onClick={onBackToSearchClick} className="header__back-to-search" type="button">
            <img className="card__more-button__icon" src={search} alt="search" />
          </button>
          <MovieDetails
            movieUrl={movieUrl}
            title={title}
            overview={overview}
            releaseDate={releaseDate}
            rating={rating}
            runtime={runtime}
            id={id}
            genre={genre}
          />
        </>
      ) : (
        <>
          <AddMovieButton />
          <SearchForm />
        </>
      )}
    </header>
  );
}

export default memo(Header);
