import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#eee',
    },
    secondary: {
      main: '#000',
    },
    error: {
      main: '#000',
    },
    background: {
      default: '#000',
    },
  },
});

export default theme;
