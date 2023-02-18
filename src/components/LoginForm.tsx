'use client';

import { useAuth } from '@/context/AuthProvider/AuthProvider';
import { Box, Button, Card, TextField } from '@mui/material';
import { useRouter } from 'next/navigation';
// import { signIn } from 'next-auth/react';
import { useRef, useState } from 'react';

const LoginForm = () => {
  // for better form control use library (react-hook-form || formik)
  const usernameRef = useRef('');
  const passwordRef = useRef('');
  const router = useRouter();

  const { user, signin } = useAuth();

  const onSubmit = async () => {
    // if (username.current === 'manager') {
    //   return router.replace('/dashboard/manager/employee-list');
    // }
    // if (username.current === 'employee') {
    //   return router.replace('/dashboard/employee/create-task');
    // }
    signin({ username: usernameRef.current, password: passwordRef.current });
  };

  console.log({ user });

  return (
    <Card variant='elevation' elevation={4} sx={{ p: 10, borderRadius: 5 }}>
      <Box component='form' display='flex' flexDirection='column' gap={2}>
        <TextField
          // value='lol'
          label='username'
          onChange={(e) => (usernameRef.current = e.target.value)}
        />
        <TextField
          // value='lol'
          label='password'
          onChange={(e) => (passwordRef.current = e.target.value)}
          type='password'
        />
        <Button onClick={onSubmit} variant='contained' color='primary' size='large'>
          sign in
        </Button>
      </Box>
    </Card>
  );
};

export default LoginForm;
