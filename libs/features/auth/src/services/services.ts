import { getUsers } from './api';

export const Service = ({ email, password, dispatch }) =>
  getUsers().then((res) => {
    debugger;
    console.log({ response: res.data });
    const user = res.data.find((user) => user.email === email);
    console.log('userfound' + user);
    if (!user) {
      fetch('http://10.0.2.2:3000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, password: password }),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          dispatch({
            type: 'SHOW_ERROR',
            error: 'Could not create user. Try again',
          });
        });
    } else {
      dispatch({
        type: 'SHOW_ERROR',
        error: 'User with that email already exist',
      });
    }
  });
