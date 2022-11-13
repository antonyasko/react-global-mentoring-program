export interface IGenreTogglerProps {
  genres: string[];
}

export interface IGenreTogglerState extends IGenreTogglerProps {
  activeGenre: string;
}
