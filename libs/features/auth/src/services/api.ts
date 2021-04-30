export const getUsers = () => fetch('http://10.0.2.2:3000/users').then(response => response.json());
