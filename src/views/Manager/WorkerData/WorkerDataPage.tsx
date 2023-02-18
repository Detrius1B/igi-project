'use client';

import { Box, Typography } from '@mui/material';
import { blueGrey, green } from '@mui/material/colors';

import CheckIcon from '@mui/icons-material/Check';

const WorkersDataPage = ({ data = {}, shedule = [] }) => {
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
        <WorkerData label='ID' value={data?.id} />
        <WorkerData label='name' value={data?.name} />
        <WorkerData label='email' value={data?.email} />
        <WorkerData label='phone' value={data?.phone} />
      </Box>

      <Box display='flex' flexDirection='column' borderRadius={2}>
        <Calendar shedules={shedule} />
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

// const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Calendar = ({ shedules = [] }) => {
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
      <Box display='flex' flexDirection='column' width={1} gap={1}>
        {shedules?.map((shedule, weekIndex) => (
          <Box
            key={`calendar-week-${weekIndex}`}
            bgcolor={blueGrey[200]}
            border={`1px solid ${blueGrey[600]}`}
            borderRadius={2}
            minHeight={100}
            width={1}
            p={1}
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            position='relative'
          >
            <Typography top={10} right={10} fontWeight={600}>
              Week: {shedule?.week}
            </Typography>

            <Box display='flex' flexDirection='row' width={1}>
              {shedule?.workDays?.map((day, dayIndex) => (
                <Box
                  key={`calendar-day-${dayIndex}`}
                  bgcolor={blueGrey[300]}
                  border={`1px solid ${blueGrey[600]}`}
                  borderRadius={1}
                  minHeight={100}
                  width={1 / 7}
                  p={1}
                  display='flex'
                  flexDirection='column'
                  alignItems='center'
                  justifyContent='center'
                  position='relative'
                >
                  {day === 1 ? (
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
        ))}
      </Box>
    </Box>
  );
};
