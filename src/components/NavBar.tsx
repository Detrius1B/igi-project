import { ACCOUNT_LINK, NAVBAR_LIST } from '@/constants/navbar';
import { Box, Divider, Drawer, Typography } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const drawerWidth = 240;

const NavBar = ({ role }: { role: 'manager' | 'worker' }) => {
  const router = usePathname();

  if (!role) return null;

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
      <Box fontSize={24} p={1} textAlign='center' component={Link} href={ACCOUNT_LINK?.[role]}>
        🐼🐼🐼
      </Box>
      <Divider />
      <Box display='flex' flexDirection='column'>
        {NAVBAR_LIST?.[role]?.map((item, i) => (
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
    </Drawer>
  );
};

export default NavBar;
