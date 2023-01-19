'use client';

import { Box, Typography } from '@mui/material';
import Link from 'next/link';

const MANAGER_LINKS = [
  {
    label: 'Employee List',
    link: '/employee-list',
    slug: 'employee-list'
  },
  {
    label: 'Other Page for Employee',
    link: '/other-employee-list',
    slug: 'other-manager-page'
  }
];

export default function ManagerLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      <Box display='flex' borderBottom='1px solid black' mb={2} bgcolor='#008eff6b'>
        {MANAGER_LINKS.map((item) => (
          <Box
            key={`manager-link-${item.slug}`}
            display='flex'
            justifyContent='center'
            alignItems='center'
            p={2}
            sx={{
              ':hover': {
                bgcolor: '#008eff80'
              }
            }}
            component={Link}
            href={item.link}
            passHref
          >
            <Typography variant='body1' color='black'>{item.label}</Typography>
          </Box>
        ))}
      </Box>
      {children}
    </Box>
  );
}
