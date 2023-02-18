import { ACCOUNT_LINK, NAVBAR_LIST } from '@/constants/navbar';
import { useAuth } from '@/context/AuthProvider/AuthProvider';
import { Box, Divider, Drawer, Typography, Button } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const drawerWidth = 240;

const NavBar = ({ role }: { role: 'manager' | 'worker' }) => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          bgcolor: blueGrey[200]
        }
      }}
      variant='permanent'
      anchor='left'
    >
      <Box fontSize={24} p={1} textAlign='center' component={Link} href={'/dashboard'}>
        🐼🐼🐼
      </Box>
      <Divider />
      <NavList />
    </Drawer>
  );
};

export default NavBar;

const NavList = () => {
  const router = usePathname();
  const { user, isLoading, signout } = useAuth();

  if (!isLoading && !user) return null;

  return (
    <>
      <Box display='flex' flexDirection='column'>
        {NAVBAR_LIST?.[user?.role]?.map((item, i) => (
          <Box
            key={i}
            component={Link}
            href={item?.link}
            sx={{
              bgcolor: router === item?.link ? blueGrey[300] : '',
              ':hover': { bgcolor: router === item?.link ? '' : blueGrey[100] }
            }}
            px={2}
            py={1}
            display='flex'
            alignItems='center'
            gap={2}
          >
            {item?.icon}
            <Typography variant='subtitle1' color={blueGrey[700]}>
              {item?.label}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box flex={1}></Box>
      <Button color='secondary' variant='contained' sx={{ mb: 1 }} onClick={signout}>
        LogOut
      </Button>
    </>
  );
};
