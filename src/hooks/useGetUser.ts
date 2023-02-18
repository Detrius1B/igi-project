import users from '../../data/users.json';

export function getUser(userName = '') {
  const userdata = users?.find((user) => user.name === userName);

  // console.log(window.localStorage.length);

  return userdata || null;
}

export function useGetLocalUser() {
  const user = window.localStorage.getItem('user');
  // console.log(window.localStorage.length);

  return user;
}
