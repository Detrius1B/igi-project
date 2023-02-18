'use client';

import LoginForm from '@/components/LoginForm';
import { useAuth } from '@/context/AuthProvider/AuthProvider';
import { Box, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const LoginPage = () => {
  const router = useRouter();
  const { user, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && user) {
      router.replace('/dashboard');
    }
  }, [router, user, isLoading]);

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
