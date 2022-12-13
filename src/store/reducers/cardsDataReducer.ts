/* eslint-disable camelcase */
import { CardsDataActions, CardsDataActionTypes } from '../actions/cardsDataAction';
import { ICardData } from '../../cardsData';

// eslint-disable-next-line default-param-last
export function cardsDataReducer(cards: ICardData[] = [], action: CardsDataActions): ICardData[] {
  switch (action.type) {
    case CardsDataActionTypes.LOAD_CARDS: {
      return action.payload.map(
        ({ id, poster_path, title, genres, release_date, overview, vote_average, runtime }) => ({
          releaseDate: release_date,
          rating: vote_average,
          movieUrl: poster_path,
          id,
          title,
          genre: genres.map((i) => i.toLowerCase()),
          overview,
          runtime,
        })
      );
    }

    case CardsDataActionTypes.DELETE_CARD: {
      return cards.filter((card) => card.id !== action.payload);
    }

    case CardsDataActionTypes.CREATE_CARD: {
      return [...cards, action.payload];
    }

    case CardsDataActionTypes.UPDATE_CARD: {
      return cards.map((card) => {
        if (card.id === action.payload.id) {
          return {
            ...card,
            ...action.payload,
          };
        }

        return card;
      });
    }

    default:
      return cards;
  }
}
