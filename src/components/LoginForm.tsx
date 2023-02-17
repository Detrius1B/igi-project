import { Box, Button, Card, TextField } from '@mui/material';
import { useRouter } from 'next/navigation';
// import { signIn } from 'next-auth/react';
import { useRef } from 'react';

const LoginForm = () => {
  // for better form control use library (react-hook-form || formik)
  const username = useRef('');
  const password = useRef('');
  const router = useRouter();

  const onSubmit = async () => {
    if (username.current === 'manager') {
      return router.replace('/dashboard/manager/employee-list');
    }
    if (username.current === 'employee') {
      return router.replace('/dashboard/employee/create-task');
    }
    // const result = await signIn('credentials', {
    //   username: username.current,
    //   password: password.current,
    //   redirect: true,
    //   callbackUrl: '/dashboard'
    // });
    // console.log(result);
  };

  return (
    <Card variant='elevation' elevation={4} sx={{ p: 10, borderRadius: 5 }}>
      <Box component='form' display='flex' flexDirection='column' gap={2}>
        <TextField
          // value='lol'
          label='username'
          onChange={(e) => (username.current = e.target.value)}
        />
        <TextField
          // value='lol'
          label='password'
          onChange={(e) => (password.current = e.target.value)}
        />
        <Button onClick={onSubmit} variant='contained' color='primary' size='large'>
          sign in
        </Button>
      </Box>
    </Card>
  );
};

export default LoginForm;
