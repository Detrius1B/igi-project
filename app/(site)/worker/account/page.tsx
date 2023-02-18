'use client';

import { useGetUser } from '@/hooks/useGetUser';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

const AccountPage = () => {
  const router = useRouter();
  const user = useGetUser('Bogdan');

  if (!user) router.replace('/login');

  return (
    <Box display='flex' flexDirection='column' width={1} height={1}>
      <Typography variant='h4' sx={{ span: { fontWeight: 600 } }}>
        Account form with data
      </Typography>
      <Typography variant='h5'>name: {user?.name}</Typography>
      <Typography variant='h5'>email: {user?.email}</Typography>
      <Typography variant='h5'>role: {user?.role}</Typography>
    </Box>
  );
};

export default AccountPage;
