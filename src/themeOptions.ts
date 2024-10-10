import { createTheme } from '@mui/material/styles';


export const theme = createTheme({
  palette: {
    type: 'light',
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
      default: '#dedede',
    },
    text: {
      primary: '#131311',
    },
  },
});