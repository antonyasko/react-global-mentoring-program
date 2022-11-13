import { createContext, Dispatch, SetStateAction } from 'react';
import { ICardData } from '../components/Cards/Card/Card.types';
/* eslint-disable @typescript-eslint/no-empty-function */

interface ICardsDataContext {
  cards: ICardData[];
  setCards: Dispatch<SetStateAction<ICardData[]>>;
}

const CardsDataContext = createContext<ICardsDataContext>({
  cards: [],
  setCards: () => {},
});

export default CardsDataContext;
