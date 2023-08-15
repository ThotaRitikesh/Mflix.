import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

 function BasicRating({value}) {

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rating name="read-only" value={value} readOnly />
    </Box>
  );
}


export default BasicRating;