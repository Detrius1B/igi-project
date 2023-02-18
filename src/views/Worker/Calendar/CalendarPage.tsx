'use client';

import { useState, useMemo, useEffect } from 'react';

import { Box, Typography, Button } from '@mui/material';
import { blueGrey, green } from '@mui/material/colors';

import CheckIcon from '@mui/icons-material/Check';
import { getUser } from '@/hooks/useGetUser';
import { useAuth } from '@/context/AuthProvider/AuthProvider';
import shedules from '../../../../data/shedules.json';

const CalendarPage = () => {
  const { user } = useAuth();
  const userData = getUser(user?.name);
  const workDays = shedules?.filter((shedule) => shedule?.userId == user?.id) || [];

  return (
    <Box display='flex' flexDirection='column' width={1} height={1} gap={4}>
      <Typography variant='h4' sx={{ span: { fontWeight: 600 } }}>
        My Calendar
      </Typography>

      <Box
        display='flex'
        flexDirection='column'
        borderRadius={2}
        border={`1px solid ${blueGrey[400]}`}
      >
        <WorkerData label='ID' value={userData?.id} />
        <WorkerData label='name' value={userData?.name} />
        <WorkerData label='email' value={userData?.email} />
        <WorkerData label='role' value={userData?.role} />
      </Box>

      <Box display='flex' flexDirection='column' borderRadius={2}>
        <Calendar shedules={workDays} />
      </Box>
    </Box>
  );
};

export default CalendarPage;

const WorkerData = ({ label = '', value = '' }) => {
  return (
    <Box display='flex' flexDirection='row' width={1} p={1}>
      <Box display='flex' width={1} sx={{ span: { fontWeight: 600, mr: 1 } }}>
        <span>{label}:</span> {value}
      </Box>
    </Box>
  );
};

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
          <SheduleWeek
            key={`calendar-week-${weekIndex}`}
            week={shedule?.week}
            days={shedule?.workDays}
          />
        ))}
      </Box>
    </Box>
  );
};

const SheduleWeek = ({ week = '', days = [] }) => {
  const [haveChanges, setHaveChanges] = useState(false);
  const [selectedDays, setSelectedDays] = useState([0, 0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    setSelectedDays(days);
  }, []);

  const handleClickSave = () => {
    setHaveChanges(false);
  };

  const handleClick = ({ isActive, dayIndex }) => {
    const selectedDaysLength = selectedDays.reduce((a, b) => a + b, 0);
    if (!isActive && selectedDaysLength >= 5) return;

    setHaveChanges(true);
    setSelectedDays((prev) => {
      const cloneList = [...prev];
      cloneList[dayIndex] = isActive ? 0 : 1;
      return cloneList;
    });
  };

  return (
    <>
      <Box
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
          Week: {week}
        </Typography>

        <Box display='flex' flexDirection='row' width={1}>
          {selectedDays?.map((day, dayIndex) => (
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
              sx={{
                cursor: 'pointer',
                ':hover': {
                  bgcolor: blueGrey[400]
                }
              }}
              onClick={() => handleClick({ isActive: day, dayIndex })}
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
      <Button
        disabled={!haveChanges}
        sx={{ maxWidth: 150 }}
        variant='contained'
        color='primary'
        onClick={handleClickSave}
      >
        SAVE
      </Button>
    </>
  );
};

// const Calendar = () => {
//   const [haveChanges, setHaveChanges] = useState(false);
//   const [selectedDays, setSelectedDays] = useState(WORKED_DAYS);

//   const curr = new Date();
//   const week = [];

//   for (let i = 1; i <= 7; i++) {
//     let first = curr.getDate() - curr.getDay() + i;
//     let day = {
//       weekday: new Date(curr.setDate(first)).toLocaleDateString('en-us', {
//         weekday: 'long'
//       }),
//       daynum: new Date(curr.setDate(first)).toLocaleDateString('en-us', {
//         day: 'numeric'
//       })
//     };
//     week.push(day);
//   }

//   const handleClickDay = (d) => {
//     setHaveChanges(true);
//     setSelectedDays((prev) => {
//       const selected = prev.find((day) => day === d);
//       if (selected) {
//         return prev.filter((day) => day !== d);
//       }
//       if (prev.length >= 5) return prev;
//       return [...prev, d];
//     });
//   };

//   const handleClickSave = () => {
//     setHaveChanges(false);
//     // make request to save changes
//   };

//   return (
//     <Box display='flex' flexDirection='column' textAlign='center' width={1} gap={1}>
//       <Typography fontWeight={600}>
//         {new Intl.DateTimeFormat('en-US', { month: 'long' }).format()}
//         {' - '}
//         {new Intl.DateTimeFormat('en-US', { year: 'numeric' }).format()}
//       </Typography>
//       <Box display='flex' flexDirection='row'>
//         {week?.map((day, n) => (
//           <Box key={`calendar-day-${n}`} width={1 / 7} display='flex' flexDirection='column'>
//             <Typography>{day?.weekday}</Typography>
//           </Box>
//         ))}
//       </Box>
//       <Box display='flex' flexDirection='row'>
//         {week?.map((day, n) => (
//           <Box
//             key={`calendar-day-${n}`}
//             bgcolor={blueGrey[200]}
//             border={`1px solid ${blueGrey[600]}`}
//             minHeight={100}
//             width={1 / 7}
//             p={1}
//             display='flex'
//             flexDirection='column'
//             alignItems='center'
//             justifyContent='center'
//             position='relative'
//             sx={{
//               cursor: 'pointer',
//               ':hover': {
//                 bgcolor: blueGrey[300]
//               }
//             }}
//             onClick={() => handleClickDay(day?.daynum)}
//           >
//             <Typography position='absolute' top={10} right={10} fontWeight={600}>
//               {day?.daynum}
//             </Typography>
//             {selectedDays.find((workDay) => workDay === day?.daynum) ? (
//               <Box
//                 display='flex'
//                 alignItems='center'
//                 justifyContent='center'
//                 borderRadius='50%'
//                 bgcolor={green[300]}
//                 width={60}
//                 height={60}
//               >
//                 <CheckIcon />
//               </Box>
//             ) : null}
//           </Box>
//         ))}
//       </Box>
//       <Button
//         disabled={!haveChanges}
//         sx={{ maxWidth: 150 }}
//         variant='contained'
//         color='primary'
//         onClick={handleClickSave}
//       >
//         SAVE
//       </Button>
//     </Box>
//   );
// };
