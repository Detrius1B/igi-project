// const getWorkersList = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');

import CalendarPage from '@/views/Worker/Calendar/CalendarPage';

//   if (!res.ok) return [];

//   const data = await res?.json();

//   return data;
// };

const AccountPage = async () => {
  // const workersList = await getWorkersList();

  return (
    <>
      <CalendarPage />
    </>
  );
};

export default AccountPage;
