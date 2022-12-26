import { cardsFiltersReducer, initialFilters } from '../cardsFiltersReducer';
import { CardsFilters } from '../../actions/cardsFiltersAction';

test('SortBy should be equal value from the payload', () => {
  const TEST_SORT = 'title';

  expect(
    cardsFiltersReducer(initialFilters, {
      type: CardsFilters.SORT_CARDS,
      payload: TEST_SORT,
    }).sortBy
  ).toBe(TEST_SORT);
});

test('ShowByGenre should be equal value from the payload', () => {
  const TEST_GENRE = 'comedy';

  expect(
    cardsFiltersReducer(initialFilters, {
      type: CardsFilters.SHOW_BY_GENRE_CARDS,
      payload: TEST_GENRE,
    }).showByGenre
  ).toBe(TEST_GENRE);
});
