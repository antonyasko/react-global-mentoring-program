import React, { memo } from 'react';

import AddMovieButton from '../AddMovieButton/AddMovieButton';
import Logo from '../Logo/Logo';
import MovieDetails from '../MovieDetails/MovieDetails';
import SearchForm from '../SearchForm/SearchForm';

import { cardsData } from '../../cardsData';

import img from '../../assets/images/header.jpg';

import './Header.scss';

function Header(): JSX.Element {
  const { movieUrl, title, overview, releaseDate, rating, runtime, id, genre } = cardsData[0];

  const isMovieDetailsOpen = true;

  return (
    <header
      className={`header${isMovieDetailsOpen ? ' with-movie-details' : ''}`}
      style={{
        background: isMovieDetailsOpen ? '#232323' : `url('${img}')`,
      }}
    >
      <Logo isMain />
      {isMovieDetailsOpen ? (
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
