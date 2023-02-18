'use client';

import { Box, Typography } from '@mui/material';

const WorkerPage = () => {
  return (
    <Box display='flex' flexDirection='column' gap={10} width={1} height={1}>
      <Typography variant='h4' sx={{ span: { fontWeight: 600 } }}>
        Worker Pages
      </Typography>
      <Typography variant='h5' sx={{ span: { fontWeight: 400 } }}>
        {"Some Stats on worker's dashboard page... idk"}
      </Typography>
    </Box>
  );
};

export default WorkerPage;
