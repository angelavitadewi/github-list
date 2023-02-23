import { combineReducers, createStore } from 'redux';

import { commonReducer, commonInitialState } from './CommonReducer';

export const configureStore = () => {
  const store = createStore(
    combineReducers({
      common: commonReducer,
    }),

    {
      common: commonInitialState,
    },
  );

  return store;
};

export default configureStore;
