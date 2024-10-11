import { createTheme } from '@mui/material/styles';


export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
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
      default: '#111111',
    },
    text: {
      primary: '#f6f7eb',
    },
  },
});