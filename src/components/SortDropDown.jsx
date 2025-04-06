import React from 'react';
import { Box, Typography, Select, MenuItem } from '@mui/material';

const SortDropdown = ({ sortOrder, onSortChange }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
      <Typography variant="body1" sx={{ mr: 2 }}>Sort by:</Typography>
      <Select value={sortOrder} onChange={onSortChange}>
        <MenuItem value="asc">Category (A-Z)</MenuItem>
        <MenuItem value="desc">Category (Z-A)</MenuItem>
      </Select>
    </Box>
  );
};

export default SortDropdown;
