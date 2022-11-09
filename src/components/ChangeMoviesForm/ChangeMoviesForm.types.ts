import { ICardData } from '../Cards/Card/Card.types';

export interface IChangeMoviesForm {
  heading: string;
  type: 'add' | 'edit';
  card?: ICardData;
}
