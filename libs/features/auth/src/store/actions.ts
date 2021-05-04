import { User } from '../models/user.model';
import { getUsers } from '../services/api';

export const logIn = (user: User) => ({
  type: 'LOGIN',
  user,
});

export const signUp = () => ({
  type: 'SIGNUP',
});

export const logInEffect = (form: User, navigation) => {
  return function (dispatch) {
    return getUsers()
      .then((response) => {
        const user = response.data.find((user) => user.email === form.email);
        if (user) {
          dispatch(logIn(user));
          return navigation.navigate('main', { screen: 'home' });
        }
      })
      .catch((err) =>
        dispatch({
          type: 'SHOW_ERROR',
          error: 'Could not login. Try again.',
        })
      );
  };
};
