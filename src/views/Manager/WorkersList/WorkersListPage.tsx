'use client';

import Link from 'next/link';
import { Box, Typography } from '@mui/material';
import { blueGrey } from '@mui/material/colors';

const AccountPage = ({ list = [] }) => {
  return (
    <Box display='flex' flexDirection='column' width={1} height={1} gap={4}>
      <Typography variant='h4' sx={{ span: { fontWeight: 600 } }}>
        Workers List
      </Typography>
      <Box
        display='flex'
        flexDirection='column'
        gap={1}
        borderRadius={2}
        p={1}
        border={`1px solid ${blueGrey[400]}`}
      >
        <ListHeader />
        {list?.map((item) => (
          <WorkerItem key={`worker-list-${item?.id}`} worker={item} />
        ))}
      </Box>
    </Box>
  );
};

export default AccountPage;

const ListHeader = () => {
  return (
    <Box display='flex' width={1} px={2} py={1}>
      <Box display='flex' width={1 / 10}>
        ID
      </Box>
      <Box display='flex' width={1}>
        Name
      </Box>
      <Box display='flex' width={1}>
        Email
      </Box>
      <Box display='flex' width={1}>
        Phone
      </Box>
    </Box>
  );
};

const WorkerItem = ({ worker = {} }) => {
  return (
    <Box
      bgcolor={blueGrey[200]}
      borderRadius={2}
      display='flex'
      width={1}
      p={2}
      component={Link}
      href={`/manager/worker/${worker?.id}`}
      sx={{
        ':hover': {
          bgcolor: blueGrey[300]
        }
      }}
    >
      <Box display='flex' width={1 / 10}>
        {worker?.id}
      </Box>
      <Box display='flex' width={1}>
        {worker?.name}
      </Box>
      <Box display='flex' width={1}>
        {worker?.email}
      </Box>
      <Box display='flex' width={1}>
        {worker?.phone}
      </Box>
    </Box>
  );
};
