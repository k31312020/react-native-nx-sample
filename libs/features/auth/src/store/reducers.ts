const INITIAL_STATE = {
  user: null
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action['user'] };
    case 'LOGOUT':
      return { ...state, user: null };
    default:
      return state;
  }
};
