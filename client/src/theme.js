import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 320,
      sm: 480,
      md: 768,
      lg: 996,
      xl: 1280,
    },
  },
  palette: {
    primary: {
      main: '#396362',
      light: '#4B8E8D',
      dark: '#396362',
      contrastText: '#FFE7D1',
    },
    secondary: {
      main: '#D63447',
      light: '#F57B51',
      dark: '#D63447',
      contrastText: '#FFE7D1',
    },
    error: {
      main: '#F9B700',
      dark: '#e00000',
      contrastText: '#fff',
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#F57B51',
    },
    background: {
      default: '#fff',
      primary: '#F6EEDF',
      secondary: '#f1f2f3',
      carousel: 'rgba(255, 255, 255, .6)',
      dark: '#000'
    },
  },
});

export default theme;
