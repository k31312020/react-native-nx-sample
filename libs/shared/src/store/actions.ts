export const logOut = () => ({
  type: 'LOGOUT',
});

<<<<<<< HEAD
export const logOutEffect = (navigation) => { 
    return function(dispatch) {
        dispatch({type: 'LOGOUT'});
        return navigation.navigate('signin');
    }
}
=======
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
>>>>>>> 3f38b39cb5677aeefd942b8e0a89ebfb7a415c16
