import React from 'react';
import * as ReactRedux from 'react-redux';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import GenreToggler from './GenreToggler';

const TEST_GENRE = 'test-genre';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(() => jest.fn()),
  useSelector: jest.fn(() => ({ showByGenre: 'all' })),
}));

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn,
}));

const genres = ['all', 'comedy', 'action', 'triller', TEST_GENRE];

describe('<GenreToggler />', () => {
  const TestGenreToggler = <GenreToggler genres={genres} />;

  it('should match snapshot', () => {
    const { container } = render(TestGenreToggler);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('All button should be active by default', () => {
    const { getByText } = render(TestGenreToggler);

    const allButton = getByText('all');

    expect(allButton).toHaveClass('active');
  });

  it('Test button should be active', () => {
    jest.spyOn(ReactRedux, 'useSelector').mockImplementation(() => ({ showByGenre: TEST_GENRE }));

    const { getByText } = render(TestGenreToggler);

    const testButton = getByText(TEST_GENRE);

    expect(testButton).toHaveClass('active');
  });
});
