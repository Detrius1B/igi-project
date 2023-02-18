import WorkersListPage from 'views/Manager/WorkersList/WorkersListPage';
import users from '../../../../../data/users.json';

// const getWorkersList = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');

//   if (!res.ok) return [];

//   const data = await res?.json();

//   return data;
// };

const WorkersList = async () => {
  // const workersList = await getWorkersList();
  const workersList = users?.filter((user) => user.role === 'worker') || [];

  return (
    <>
      <WorkersListPage list={workersList} />
    </>
  );
};

export default WorkersList;
