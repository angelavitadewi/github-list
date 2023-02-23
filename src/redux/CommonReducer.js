import * as ActionType from './ActionType';

export const commonInitialState = {
  loading: false,
};

export const commonReducer = (state = commonInitialState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_LOADING:
      return { ...state, loading: payload };
    default:
      return state;
  }
};
