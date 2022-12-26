export interface ICardData {
  id: string;
  movieUrl: string;
  title: string;
  genre: string[];
  releaseDate: string;
  overview: string;
  rating: string;
  runtime: string;
}

export interface ICard {
  id: string;
  movieUrl: string;
  title: string;
  genre: string[];
  releaseDate: string;
  overview: string;
  rating: string;
  runtime: string;
  onDeleteCard: (id: string) => void;
}
