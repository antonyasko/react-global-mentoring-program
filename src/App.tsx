import React from 'react';

import './App.scss';

import { Counter } from './components/Counter/Counter';
import { Hello } from './components/Hello/Hello';
import { SearchForm } from './components/SearchForm/SearchForm';
import { GenreToggle } from './components/GenreToggle/GenreToggle';

function App(): JSX.Element {
  return (
    <div className="App">
      <Counter />
      <Hello />
      <SearchForm />
      <GenreToggle genres={['all', 'documentary', 'comedy', 'horror', 'crime']} />
    </div>
  );
}

export default App;
