import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

 function SkeletonShimmer() {
  return (
    <Box
      sx={{
        bgcolor: '#121212',
        p: 8,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection:"column"
      }}
    >
      <Skeleton
        sx={{ bgcolor: 'grey.500' }}
        variant="rectangular"
        width={310}
        height={218}
      />
        <Skeleton
        sx={{ bgcolor: 'grey.500' }}
        variant="text"
        width={310}
        height={118}
      />
        <Skeleton
        sx={{ bgcolor: 'grey.500' }}
        variant="text"
        width={310}
        height={118}
      />
    </Box>
  );
}

export default SkeletonShimmer;
