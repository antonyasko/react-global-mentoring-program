import React, { memo, useContext } from 'react';
import { useSelector } from 'react-redux';

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

  function onBackToSearchClick(): void {
    setMovieDetails({ isMovieDetailsShowing: false, movieId: '' });
  }

  return (
    <header
      className="header"
      style={{
        background: `url('${logo}')`,
      }}
    >
      <Logo isMain />

      <AddMovieButton />
      <SearchForm />
    </header>
  );
}

export default memo(Header);
