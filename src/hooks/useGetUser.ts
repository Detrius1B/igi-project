import users from '../../data/users.json';

export function useGetUser(userName = '') {
  const userdata = users?.find((user) => user.name === userName);

  // console.log(window.localStorage.length);

  return userdata;
}
