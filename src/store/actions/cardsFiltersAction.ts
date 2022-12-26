export enum CardsFilters {
  SORT_CARDS = 'SORT_CARDS',
  SHOW_BY_GENRE_CARDS = 'SHOW_BY_GENRE_CARDS',
}

export type CardsSortBy = 'title' | 'release_date';

interface ISortByAction {
  type: CardsFilters.SORT_CARDS;
  payload: CardsSortBy;
}

interface IShowByAction {
  type: CardsFilters.SHOW_BY_GENRE_CARDS;
  payload: string;
}

export function sortByAction(sortBy: CardsSortBy): ISortByAction {
  return {
    type: CardsFilters.SORT_CARDS,
    payload: sortBy,
  };
}

export function showByGenreAction(genre: string): IShowByAction {
  return {
    type: CardsFilters.SHOW_BY_GENRE_CARDS,
    payload: genre,
  };
}

export type CardsFiltersActions = ISortByAction | IShowByAction;
