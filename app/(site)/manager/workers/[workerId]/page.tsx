import WorkersDataPage from '@/views/Manager/WorkerData/WorkerDataPage';
import users from '../../../../../data/users.json';
import shedules from '../../../../../data/shedules.json';

// const getWorkerData = async (workerId) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${workerId}`);

//   if (!res.ok) return [];

//   const data = await res?.json();

//   return data;
// };

const WorkerData = async ({ params: { workerId } }) => {
  // const data = await getWorkerData(workerId);
  const data = users?.find((user) => user?.id === workerId) || {};
  const workDays = shedules?.filter((shedule) => shedule?.userId == workerId) || [];

  return (
    <>
      <WorkersDataPage data={data} shedule={workDays} />
    </>
  );
};

export default WorkerData;
