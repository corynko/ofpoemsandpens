import { createTheme } from '@mui/material/styles';


export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1377C9',
    },
    secondary: {
      main: '#6b3f79',
    },
    error: {
      main: '#F42272',
    },
    success: {
      main: '#22A2DD',
    },
    info: {
      main: '#8BBF9F',
    },
    warning: {
      main: '#EF959C',
    },
    background: {
      default: '#ffffff',
    },
    text: {
      primary: '#131311',
    },
  },
  typography: {
    h1: {
      fontFamily: '"Montserrat"',
    },
    fontFamily: '"Montserrat", "Lato", "Inter"',
    subtitle1: {
      fontFamily: '"Inter"',
    },
    body1: {
      fontFamily: '"Inter"',
    },
    body2: {
      fontFamily: '"Lato"',
    },
  },
});