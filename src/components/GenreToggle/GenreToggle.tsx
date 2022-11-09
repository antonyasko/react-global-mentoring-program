import React, { PureComponent, SyntheticEvent } from 'react';
import './GenreToggle.scss';

interface IGenreToggleProps {
  genres: string[];
}

interface IGenreToggleState extends IGenreToggleProps {
  activeGenre: string;
}

export class GenreToggle extends PureComponent<IGenreToggleProps, IGenreToggleState> {
  constructor(props: IGenreToggleProps) {
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
      <div className="container genre-toggle-container">
        {genres.map((genre) => (
          <button
            type="button"
            className={genre === activeGenre ? 'active' : ''}
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
