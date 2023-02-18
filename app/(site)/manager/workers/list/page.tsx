import WorkersListPage from 'views/Manager/WorkersList/WorkersListPage';

const getWorkersList = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  if (!res.ok) return [];

  const data = await res?.json();

  return data;
};

const AccountPage = async () => {
  const workersList = await getWorkersList();

  return (
    <>
      <WorkersListPage list={workersList} />
    </>
  );
};

export default AccountPage;
