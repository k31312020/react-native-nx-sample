import { User } from "../models/user.model";
import { getUsers } from "../services/api";

export const logIn = (user: User) => ({
    type: 'LOGIN',
    user
});
  
export const signUp = () => ({
    type: 'SIGNUP',
});

export const logInEffect = (form: User, navigation) => {
    return function(dispatch) {
        return getUsers().then(
          (users: User[]) => {
              const user = users.find(user => user.email === form.email);
              if (user) {
                dispatch(logIn(user));
                return navigation.navigate('home');
              }
           }
        );
    };
}