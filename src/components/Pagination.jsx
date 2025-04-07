import React from 'react';
import { Box, Pagination } from '@mui/material';

const CustomPagination = ({ count, page, onPageChange }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
      <Pagination
        count={count}
        page={page}
        onChange={onPageChange}
        color="primary"
      />
    </Box>
  );
};

export default CustomPagination;
