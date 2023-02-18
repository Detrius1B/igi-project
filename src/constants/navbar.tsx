import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import QueueIcon from '@mui/icons-material/Queue';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export const MANAGER_LIST = [
  {
    icon: <ManageAccountsIcon color='secondary' />,
    label: 'Account',
    link: '/manager/account'
  },
  {
    icon: <FormatListBulletedIcon color='secondary' />,
    label: 'Workers List',
    link: '/manager/workers/list'
  },
  {
    icon: <QueueIcon color='secondary' />,
    label: 'Temp Page',
    link: '/manager/'
  }
];

export const WORKER_LIST = [
  {
    icon: <ManageAccountsIcon color='secondary' />,
    label: 'Account',
    link: '/worker/account'
  },
  {
    icon: <CalendarMonthIcon color='secondary' />,
    label: 'My Calendar',
    link: '/worker/calendar'
  },
  {
    icon: <QueueIcon color='secondary' />,
    label: 'Temp Page',
    link: '/worker/'
  }
];

export const NAVBAR_LIST = {
  manager: MANAGER_LIST,
  worker: WORKER_LIST
};

export const ACCOUNT_LINK = {
  manager: '/manager',
  worker: '/worker'
};
