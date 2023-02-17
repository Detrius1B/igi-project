'use client';

import { Box, Typography } from '@mui/material';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // some check if user have token in cookies, redirect to /dashboard

  return (
    <Box width={1} height={1}>
      {children}
    </Box>
  );
}
