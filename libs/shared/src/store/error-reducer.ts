import { SHOW_ERROR } from './actions';

const INITIAL_STATE = {
  error: null,
};

export const errorReducer = (state = INITIAL_STATE, action) => {
  switch (action['type']) {
    case SHOW_ERROR:
      return { ...state, error: action['error'] };
    default:
      return state;
  }
};
