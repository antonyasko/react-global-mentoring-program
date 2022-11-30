import { Dispatch } from 'react';
import { ICardData } from '../../cardsData';

export enum CardsDataActionTypes {
  LOAD_CARDS = 'LOAD_CARDS',
  DELETE_CARD = 'DELETE_CARD',
  CREATE_CARD = 'CREATE_CARD',
  UPDATE_CARD = 'UPDATE_CARD',
}

interface IMovie {
  budget: number;
  genres: string[];
  id: string;
  overview: string;
  poster_path: string;
  release_date: string;
  revenue: number;
  runtime: string;
  tagline: string;
  title: string;
  vote_average: string;
  vote_count: number;
}

export interface IGetCardsAction {
  type: CardsDataActionTypes.LOAD_CARDS;
  payload: IMovie[];
}

export interface IDeleteCardAction {
  type: CardsDataActionTypes.DELETE_CARD;
  payload: string;
}

export interface ICreateCardAction {
  type: CardsDataActionTypes.CREATE_CARD;
  payload: ICardData;
}

export interface IUpdateCardAction {
  type: CardsDataActionTypes.UPDATE_CARD;
  payload: ICardData;
}

// export interface IUpdateCardAction {
//   type: CardsDataActionTypes.UPDATE_CARD;
//   payload: ICardData;
// }

export function getCards() {
  return async (dispatch: Dispatch<IGetCardsAction>): Promise<void> => {
    const response = await fetch('http://localhost:4000/movies');
    const { data } = await response.json();

    dispatch({
      type: CardsDataActionTypes.LOAD_CARDS,
      payload: data,
    } as IGetCardsAction);
  };
}

// export function sortCards(predicate: string) {
//   return {
//     type: CardsDataActionTypes.LOAD_CARDS,
//     payload: predicate,
//   };
// }

export function deleteCard(id: string) {
  return async (dispatch: Dispatch<IDeleteCardAction>): Promise<void> => {
    await fetch(`http://localhost:4000/movies/${id}`, {
      method: 'DELETE',
    });

    dispatch({
      type: CardsDataActionTypes.DELETE_CARD,
      payload: id,
    } as IDeleteCardAction);
  };
}

export function createCard(body: ICardData) {
  return async (dispatch: Dispatch<ICreateCardAction>): Promise<void> => {
    await fetch('http://localhost:4000/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        budget: Math.floor(Math.random() * 100000000),
        genres: body.genre,
        overview: body.overview,
        poster_path: body.movieUrl,
        release_date: body.releaseDate,
        revenue: Math.floor(Math.random() * 100000000),
        runtime: +body.runtime,
        tagline: 'New movie',
        title: body.title,
        vote_average: +body.rating,
        vote_count: Math.floor(Math.random() * 10000),
      }),
    });

    dispatch({
      type: CardsDataActionTypes.CREATE_CARD,
      payload: body,
    } as ICreateCardAction);
  };
}

export function updateCard(body: ICardData) {
  return async (dispatch: Dispatch<IUpdateCardAction>): Promise<void> => {
    await fetch('http://localhost:4000/movies', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: body.id,
        genres: body.genre,
        overview: body.overview,
        poster_path: body.movieUrl,
        release_date: body.releaseDate,
        runtime: +body.runtime,
        title: body.title,
        vote_average: +body.rating,
      }),
    });

    dispatch({
      type: CardsDataActionTypes.UPDATE_CARD,
      payload: body,
    } as IUpdateCardAction);
  };
}

export type CardsDataActions =
  | IGetCardsAction
  | IDeleteCardAction
  | ICreateCardAction
  | IUpdateCardAction;
