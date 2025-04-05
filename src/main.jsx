// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from react-dom/client
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

// Create root using createRoot and render the app
const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
