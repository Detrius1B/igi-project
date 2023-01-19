'use client';

import LoginForm from '@/components/LoginForm';
import { Box, TextField, Typography } from '@mui/material';
import { useSession } from 'next-auth/react';

const LoginPage = () => {
  const session = useSession();
  console.log(session);

  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      width={1}
      height={1}
      gap={4}
    >
      <Typography variant='h4'>Welcome to login page!</Typography>
      <LoginForm />
    </Box>
  );
};

export default LoginPage;
