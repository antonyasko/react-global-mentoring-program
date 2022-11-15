import { createContext, Dispatch, SetStateAction } from 'react';
/* eslint-disable @typescript-eslint/no-empty-function */

interface IMovieDetailsContext {
  isMovieDetailsShowing: boolean;
  movieId: string;
  setMovieDetails: Dispatch<
    SetStateAction<{
      isMovieDetailsShowing: boolean;
      movieId: string;
    }>
  >;
}

const MovieDetailsContext = createContext<IMovieDetailsContext>({
  isMovieDetailsShowing: false,
  movieId: '',
  setMovieDetails: () => {},
});

export default MovieDetailsContext;
