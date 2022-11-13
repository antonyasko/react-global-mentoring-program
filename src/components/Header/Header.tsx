import React, { memo } from 'react';
import AddMovieButton from '../AddMovieButton/AddMovieButton';
import Logo from '../Logo/Logo';
import SearchForm from '../SearchForm/SearchForm';
import img from '../../assets/images/header.jpg';

import './Header.scss';

function Header(): JSX.Element {
  return (
    <header
      className="header"
      style={{
        backgroundImage: `url('${img}')`,
      }}
    >
      <Logo isMain />
      <AddMovieButton />
      <SearchForm />
    </header>
  );
}

export default memo(Header);
