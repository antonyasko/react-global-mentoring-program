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

export const cardsData: ICardData[] = [
  {
    id: '1',
    movieUrl:
      'https://media.kg-portal.ru/movies/s/schoolforgoodandevil/posters/schoolforgoodandevil_2.jpg',
    title: 'Pulp Fiction',
    genre: ['Action & Adventure'],
    releaseDate: '2021-03-25',
    overview:
      'Very interesting film Very interesting film Very interesting film Very interesting film Very interesting film',
    rating: '9.5',
    runtime: '128',
  },
  {
    id: '2',
    movieUrl:
      'https://media.kg-portal.ru/movies/s/schoolforgoodandevil/posters/schoolforgoodandevil_2.jpg',
    title: 'Pulp Fiction',
    genre: ['Action & Adventure'],
    releaseDate: '2004-03-25',
    overview: 'Very interesting film',
    rating: '8.5',
    runtime: '222',
  },
  {
    id: '3',
    movieUrl:
      'https://media.kg-portal.ru/movies/s/schoolforgoodandevil/posters/schoolforgoodandevil_2.jpg',
    title: 'Pulp Fiction Pulp Fiction Pulp Fiction',
    genre: ['Action & Adventure'],
    releaseDate: '2000-03-25',
    overview: 'Very interesting film Very interesting film',
    rating: '7.5',
    runtime: '876',
  },
  {
    id: '4',
    movieUrl:
      'https://media.kg-portal.ru/movies/s/schoolforgoodandevil/posters/schoolforgoodandevil_2.jpg',
    title: 'Pulp Fiction',
    genre: ['Action & Adventure'],
    releaseDate: '1997-03-25',
    overview: 'Very interesting film',
    rating: '9.5',
    runtime: '128',
  },
  {
    id: '5',
    movieUrl:
      'https://media.kg-portal.ru/movies/s/schoolforgoodandevil/posters/schoolforgoodandevil_2.jpg',
    title: 'Pulp Fiction',
    genre: ['Action & Adventure'],
    releaseDate: '2015-03-25',
    overview: 'Very interesting film',
    rating: '5.5',
    runtime: '78',
  },
  {
    id: '6',
    movieUrl:
      'https://media.kg-portal.ru/movies/s/schoolforgoodandevil/posters/schoolforgoodandevil_2.jpg',
    title: 'Pulp Fiction Pulp Fiction',
    genre: ['Action & Adventure'],
    releaseDate: '2003-01-02',
    overview: 'Very interesting film',
    rating: '2.5',
    runtime: '13',
  },
];
