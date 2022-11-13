import React, { PureComponent, SyntheticEvent } from 'react';

import { IGenreTogglerProps, IGenreTogglerState } from './GenreToggler.types';

import './GenreToggler.scss';

export class GenreToggler extends PureComponent<IGenreTogglerProps, IGenreTogglerState> {
  constructor(props: IGenreTogglerProps) {
    super(props);
    this.state = {
      activeGenre: 'all',
      genres: props.genres,
    };
  }

  onButtonClick(e: SyntheticEvent<HTMLButtonElement>): void {
    console.log('Genre: ', (e.target as HTMLButtonElement).dataset.genre);

    this.setState((state) => ({
      ...state,
      activeGenre: (e.target as HTMLButtonElement).dataset.genre as string,
    }));
  }

  render(): JSX.Element {
    const { activeGenre, genres } = this.state;

    return (
      <div className="container genre-toggler">
        {genres.map((genre) => (
          <button
            type="button"
            className={`genre-toggler__button ${genre === activeGenre ? 'active' : ''}`}
            data-genre={genre}
            key={genre}
            onClick={this.onButtonClick.bind(this)}
          >
            {genre}
          </button>
        ))}
      </div>
    );
  }
}
