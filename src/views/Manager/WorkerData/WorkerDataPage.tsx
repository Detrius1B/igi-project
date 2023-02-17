'use client';

import { Box, Typography } from '@mui/material';
import { blueGrey, green } from '@mui/material/colors';

import CheckIcon from '@mui/icons-material/Check';

const WORKED_DAYS = ['14', '15', '16', '18', '19'];

const WorkersDataPage = ({ data = {} }) => {
  return (
    <Box display='flex' flexDirection='column' width={1} height={1} gap={4}>
      <Typography variant='h4' sx={{ span: { fontWeight: 600 } }}>
        Worker: {data?.name}
      </Typography>

      <Box
        display='flex'
        flexDirection='column'
        borderRadius={2}
        border={`1px solid ${blueGrey[400]}`}
      >
        <WorkerData label='name' value={data?.name} />
        <WorkerData label='username' value={data?.username} />
        <WorkerData label='email' value={data?.email} />
        <WorkerData label='phone' value={data?.phone} />
        <WorkerData label='street' value={data?.address?.street} />
        <WorkerData label='city' value={data?.address?.city} />
        <WorkerData label='zipcode' value={data?.address?.zipcode} />
      </Box>

      <Box display='flex' flexDirection='column' borderRadius={2}>
        <Calendar data={WORKED_DAYS} />
      </Box>
    </Box>
  );
};

export default WorkersDataPage;

const WorkerData = ({ label = '', value = '' }) => {
  return (
    <Box display='flex' flexDirection='row' width={1} p={1}>
      <Box display='flex' width={1} sx={{ span: { fontWeight: 600, mr: 1 } }}>
        <span>{label}:</span> {value}
      </Box>
    </Box>
  );
};

const Calendar = ({ data = [] }) => {
  let curr = new Date();
  let week = [];

  for (let i = 1; i <= 7; i++) {
    let first = curr.getDate() - curr.getDay() + i;
    let day = {
      weekday: new Date(curr.setDate(first)).toLocaleDateString('en-us', {
        weekday: 'long'
      }),
      daynum: new Date(curr.setDate(first)).toLocaleDateString('en-us', {
        day: 'numeric'
      })
    };
    week.push(day);
  }

  return (
    <Box display='flex' flexDirection='column' textAlign='center' width={1} gap={1}>
      <Typography fontWeight={600}>
        {new Intl.DateTimeFormat('en-US', { month: 'long' }).format()}
        {' - '}
        {new Intl.DateTimeFormat('en-US', { year: 'numeric' }).format()}
      </Typography>
      <Box display='flex' flexDirection='row'>
        {week?.map((day, n) => (
          <Box key={`calendar-day-${n}`} width={1 / 7} display='flex' flexDirection='column'>
            <Typography>{day?.weekday}</Typography>
          </Box>
        ))}
      </Box>
      <Box display='flex' flexDirection='row'>
        {week?.map((day, n) => (
          <Box
            key={`calendar-day-${n}`}
            bgcolor={blueGrey[200]}
            border={`1px solid ${blueGrey[600]}`}
            minHeight={100}
            width={1 / 7}
            p={1}
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            position='relative'
          >
            <Typography position='absolute' top={10} right={10} fontWeight={600}>
              {day?.daynum}
            </Typography>
            {data.find((workDay) => workDay === day.daynum) ? (
              <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                borderRadius='50%'
                bgcolor={green[300]}
                width={60}
                height={60}
              >
                <CheckIcon />
              </Box>
            ) : null}
          </Box>
        ))}
      </Box>
    </Box>
  );
};
