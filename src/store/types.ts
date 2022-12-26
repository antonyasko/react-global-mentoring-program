import { ICardData } from '../cardsData';

export interface ICardsDataState {
  cardsData: ICardData[];
}

export interface IFilters {
  sortBy: 'title' | 'release_date';
  showByGenre: string;
}

export interface IFiltersState {
  filters: IFilters;
}
