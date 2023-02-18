'use client';

import { useAuth } from '@/context/AuthProvider/AuthProvider';
import { Box, Divider, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { blueGrey } from '@mui/material/colors';
import { useRouter } from 'next/navigation';

import fs from 'fs-extra';

import DAY_WORKERS from '../../../../data/day-workers.json';
import { useState } from 'react';

// const WEEKS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const AccountPage = () => {
  const router = useRouter();
  const [haveChanges, setHaveChanges] = useState(false);
  const { user, isLoading } = useAuth();

  if (!isLoading && !user) router.replace('/login');
  if (isLoading) return <>Loading...</>;

  const handleChange = () => {
    setHaveChanges(true);
  };

  const handleClick = () => {
    setHaveChanges(false);
  };

  return (
    <Box display='flex' flexDirection='column' width={1} height={1} gap={2} maxWidth={320}>
      <Typography variant='h4' sx={{ span: { fontWeight: 600 } }}>
        Shedules
      </Typography>
      <Typography variant='body2' whiteSpace='nowrap' sx={{ span: { fontWeight: 600 } }}>
        Select how much workers you need at each day
      </Typography>
      <Box
        display='flex'
        flexDirection='column'
        gap={1}
        border={`1px solid ${blueGrey[300]}`}
        borderRadius={2}
        p={2}
      >
        {Object.keys(DAY_WORKERS).map((key, i) => (
          <Box key={`shedule-day-${key}`} display='flex' gap={2} justifyContent='space-between'>
            <Typography variant='h5'>{key}:</Typography>
            <TextField
              type='number'
              value={DAY_WORKERS[key]}
              onChange={handleChange}
              size='small'
              sx={{ maxWidth: 80 }}
            />
          </Box>
        ))}
        {/* {WEEKS?.map((day) => (
          <Box key={`shedule-day-${day}`} display='flex' gap={2}>
            <Typography variant='h5'>{day}</Typography>
            <TextField type='number' defaultValue={69} size='small' />
            <Divider />
          </Box>
        ))} */}
      </Box>
      <Button disabled={!haveChanges} variant='contained' color='secondary' onClick={handleClick}>
        Save
      </Button>
    </Box>
  );
};

export default AccountPage;

// {
//   "Monday": 2,
//   "Tuesday": 6,
//   "Wednesday": 3,
//   "Thursday": 2,
//   "Friday": 7,
//   "Saturday": 1,
//   "Sunday": 2
// }
