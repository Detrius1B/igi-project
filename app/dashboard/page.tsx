'use client';

import { Box, Button, TextField, Typography } from '@mui/material';
import { signIn, signOut, useSession } from 'next-auth/react';

const DashboardPage = () => {
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
      <Typography variant='h4' sx={{ span: { fontWeight: 600 } }}>
        Welcome to dashboard, <span>{session?.data?.user?.name}</span>!
      </Typography>
      <Button onClick={() => signIn()}>sign in</Button>
      <Button onClick={() => signOut()}>sign out</Button>
    </Box>
  );
};

export default DashboardPage;
