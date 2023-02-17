'use client';

import { theme } from '../theme';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';

import { getCookie, setCookie, deleteCookie } from 'cookies-next';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

interface IRootLayout {
  children: React.ReactNode;
}

const ACCESS_TOKEN = 'accessToken1';

export default function RootLayout({ children }: IRootLayout) {
  return (
    <html lang='en'>
      <head />
      <body>
        <Box width={'100vw'} height={'100vh'}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </Box>
      </body>
    </html>
  );
}
