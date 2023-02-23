import * as ActionType from './ActionType';

export const setLoading = (dispatch, loading) => {
  dispatch({ type: ActionType.SET_LOADING, payload: loading });
};
