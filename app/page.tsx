'use client';

import { Button } from '@mui/material';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { getCookie, setCookie, deleteCookie } from 'cookies-next';

// import { useAuth } from '@/context/AuthProvider/AuthProvider';

const isLoggedIn = true;
const ACCESS_TOKEN = 'accessToken';

export default function Home() {
  const router = useRouter();
  // const data = useAuth();
  // console.log('page:', data);

  useEffect(() => {
    // if (token) {
    //   router.replace('/manager'); // TODO: change by role
    // } else {
    //   router.replace('/login');
    // }
  }, []);

  return <></>;
}
