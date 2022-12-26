/* eslint-disable default-param-last */
import { CardsFiltersActions, CardsFilters } from '../actions/cardsFiltersAction';

import { IFilters } from '../types';

export const initialFilters: IFilters = {
  sortBy: 'title',
  showByGenre: 'all',
};

export function cardsFiltersReducer(
  filters = initialFilters,
  action: CardsFiltersActions
): IFilters {
  switch (action.type) {
    case CardsFilters.SORT_CARDS: {
      return {
        ...filters,
        sortBy: action.payload,
      };
    }

    case CardsFilters.SHOW_BY_GENRE_CARDS: {
      return {
        ...filters,
        showByGenre: action.payload,
      };
    }

    default:
      return filters;
  }
}
