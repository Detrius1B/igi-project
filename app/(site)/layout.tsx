'use client';

import NavBar from '@/components/NavBar';
import { useAuth } from '@/context/AuthProvider/AuthProvider';
import { Box } from '@mui/material';
import { blueGrey } from '@mui/material/colors';

export default function ManagerLayout({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();

  return (
    <Box display='flex' width={1} height={1}>
      <NavBar role={user?.role} />
      <Box
        width={1}
        height={1}
        overflow='auto'
        component='main'
        sx={{ flexGrow: 1, bgcolor: blueGrey[100], p: 3 }}
      >
        {children}
      </Box>
    </Box>
  );
}
