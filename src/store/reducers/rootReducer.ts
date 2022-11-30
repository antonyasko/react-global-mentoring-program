import { combineReducers } from 'redux';

import { cardsDataReducer } from './cardsDataReducer';
// import { modalReducer } from '';
// import { movieDetailsReducer } from '';

const rootReducer = combineReducers({
  cardsData: cardsDataReducer,
  //   modal: modalReducer,
  //   movieDetails: movieDetailsReducer,
});

export default rootReducer;
