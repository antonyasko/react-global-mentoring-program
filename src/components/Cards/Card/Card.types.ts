export interface ICardData {
  id: string;
  posterUrl: string;
  name: string;
  genre: string;
  year: number;
}

export interface ICard {
  id: string;
  posterUrl: string;
  name: string;
  genre: string;
  year: number;
  onDeleteCard: (id: string) => void;
  onEditCard: (updatedCard: ICardData) => void;
  onAddCard: (newCard: ICardData) => void;
}
