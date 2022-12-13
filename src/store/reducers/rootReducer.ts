import { combineReducers } from 'redux';

import { cardsDataReducer } from './cardsDataReducer';
import { cardsFiltersReducer } from './cardsFiltersReducer';

const rootReducer = combineReducers({
  cardsData: cardsDataReducer,
  filters: cardsFiltersReducer,
});

export default rootReducer;
