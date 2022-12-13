import React, { memo } from 'react';

import { ICardData } from '../../cardsData';
import { getTimeFromMinutes } from '../../utils/getTimeFromMinutes';

import './MovieDetails.scss';

function MovieDetails({
  movieUrl,
  title,
  rating,
  runtime,
  genre,
  releaseDate,
  overview,
}: ICardData): JSX.Element {
  return (
    <div className="movie-details">
      <img className="movie-details__poster" alt="poster" src={movieUrl} />
      <h2 className="movie-details__heading">
        <p className="movie-details__heading__title">{title}</p>
        <p className="movie-details__heading__rating">{rating}</p>
      </h2>
      <p className="movie-details__genre">{genre.join(' ,')}</p>
      <p className="movie-details__release-date">{new Date(releaseDate).getFullYear()}</p>
      <p className="movie-details__runtime">{getTimeFromMinutes(runtime)}</p>
      <p className="movie-details__overview">{overview}</p>
    </div>
  );
}

export default memo(MovieDetails);
