// import { ICardData } from '../Cards/Card/Card.types';

export interface IChangeMoviesForm {
  // cardData: ICardData;
  heading: string;
  type: 'add' | 'edit';
  onReset: () => void;
  onSubmit: () => void;
}
