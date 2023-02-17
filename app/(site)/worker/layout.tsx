'use client';

import { Box, Paper } from '@mui/material';

const MANAGER_LINKS = [
  {
    label: 'Employee List',
    link: '/employee-list',
    slug: 'employee-list'
  },
  {
    label: 'Other Page for Employee',
    link: '/employee-list',
    slug: 'employee-list'
  }
];

export default function ManagerLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box display='flex' width={1} height={1}>
      Employee
      <Paper sx={{ height: '100%' }}>
        {MANAGER_LINKS.map((item) => (
          <Box key={`manager-link-${item.slug}`}>{item.label}</Box>
        ))}
      </Paper>
      {children}
    </Box>
  );
}
