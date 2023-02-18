import users from '../../data/users.json';

type UserDataState = {
  email: string;
  password: string;
  name: string;
  role: 'worker' | 'manager' | string;
  id: string;
} | null;

export function getUser(userName = ''): UserDataState {
  const userdata = users?.find((user) => user.name === userName);

  // console.log(window.localStorage.length);

  return userdata || null;
}

export function useGetLocalUser() {
  const user = window.localStorage.getItem('user');
  // console.log(window.localStorage.length);

  return user;
}
