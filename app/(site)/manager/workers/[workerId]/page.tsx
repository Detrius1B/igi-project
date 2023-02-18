import WorkersDataPage from '@/views/Manager/WorkerData/WorkerDataPage';

const getWorkerData = async (workerId) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${workerId}`);

  if (!res.ok) return [];

  const data = await res?.json();

  return data;
};

const WorkerData = async ({ params: { workerId } }) => {
  const data = await getWorkerData(workerId);

  return (
    <>
      <WorkersDataPage data={data} />
    </>
  );
};

export default WorkerData;
