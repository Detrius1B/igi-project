'use client';

import { Box } from '@mui/material';
import { SessionProvider } from 'next-auth/react';

interface IRootLayout {
  children: React.ReactNode;
}

export default function RootLayout({ children }: IRootLayout) {
  // const userRole = 'manager';
  // const isManager = userRole === "manager";
  // const NAV_LINKS = isManager ? MANAGER_LINKS : EMPLOYEE_LINKS;

  const AppComponent = <></>;

  return (
    <html lang='en'>
      <head />
      <body
        style={{
          margin: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: '#008eff6b'
        }}
      >
        <SessionProvider>
          <Box width={1} height={1} sx={{ a: { textDecoration: 'none' } }}>{children}</Box>
        </SessionProvider>
      </body>
    </html>
  );
}
