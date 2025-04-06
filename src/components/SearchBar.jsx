import React from 'react';
import { TextField, Box } from '@mui/material';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
      <TextField
        label="Search Categories"
        variant="outlined"
        value={searchTerm}
        onChange={onSearchChange}
        sx={{ width: '300px' }}
      />
    </Box>
  );
};


export default SearchBar;