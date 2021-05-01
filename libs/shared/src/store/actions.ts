export const logOut = () => ({
    type: 'LOGOUT'
});


export const logOutEffect = (navigation) => {
  return function (dispatch) {
    dispatch('LOGOUT');
    return navigation.navigate('signin');
  };
};

export const SHOW_ERROR = 'SHOW_ERROR';

export const showError = (error: string) => ({
  type: SHOW_ERROR,
  error,
});

export const errorEffect = (error: string) => {
  return function (dispatch) {
    dispatch(showError(error));
  };
};
