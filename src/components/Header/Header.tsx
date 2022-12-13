import React, { memo, useContext } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import AddMovieButton from '../AddMovieButton/AddMovieButton';
import Logo from '../Logo/Logo';
import MovieDetails from '../MovieDetails/MovieDetails';
import SearchForm from '../SearchForm/SearchForm';

import MovieDetailsContext from '../../store/movieDetailsContext';
import { ICardsDataState } from '../../store/types';

import logo from '../../assets/images/header.jpg';
import search from '../../assets/svg/search.svg';

import './Header.scss';

function Header(): JSX.Element {
  const cards = useSelector((state: ICardsDataState) => state.cardsData);
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

  const navigate = useNavigate();

  function onBackToSearchClick(): void {
    setMovieDetails({ isMovieDetailsShowing: false, movieId: '' });
    navigate('/search');
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
