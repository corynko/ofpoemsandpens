import { createTheme } from '@mui/material/styles';
// import backgroundImage from '../assets/images/svg/paperBackgroundLight.svg'

declare module '@mui/material/styles' {
  interface TypeBackground {
    strokeColor?: string;
    fillColor?: string;
    backgroundImage?: string;
    inverse?: string;
    semiTrans?: string;
    appBar?: string;
  }
  interface TypeText {
    blue?: string;
  }
  interface TypeSvg {
    strokeColor?: string;
    fillColor?: string;
  }
  interface TypeSvg2 {
    strokeColor?: string;
    fillColor?: string;
  }
  interface TypeSvg3 {
    strokeColor?: string;
    fillColor?: string;
  }
  interface TypeButton {
    textColor?: string;
    backgroundColor?: string;
    default?: string;
    alternateHover?: string;
  }

  interface PaletteOptions {
    background?: Partial<TypeBackground>;
    svg?: Partial<TypeSvg>;
    svg2?: Partial<TypeSvg>;
    svg3?: Partial<TypeSvg>;
    button?: Partial<TypeButton>;
  }
}


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
      default: '#F6F7EB',
      inverse: "#222222",
      strokeColor: '#000000',  // Custom property
      fillColor: '#ffffff00', 
      semiTrans: '#F6F7EB44',
      appBar: '#DDDDDD66'
      
    },
    svg: {fillColor: '#A37A4E' },
    svg2: {fillColor: '#F7D59C' },
    svg3: {fillColor: '#D9D8D1' },
    text: {
      primary: '#131311',
      blue: "#177BB5",
    },

    button: {textColor: '#F2F3E2',
      backgroundColor: '#50587E',
      alternateHover: '#50587E',
      alternateText: '#F2F3E2',
      default: '#177bb588',
    }
  },
  typography: {
    h1: {
      fontFamily: '"GothamLight"',
    },
    h2: {
      fontFamily: '"GothamLight"',
    },
    h3: {
      fontFamily: '"GothamLight"',
    },
    h4: {
      fontFamily: '"GothamBook"',
    },
    fontFamily: '"Montserrat", "Lato", "Inter"',
    subtitle1: {
      fontFamily: '"Inter"',
    },
    body1: {
      fontFamily: '"GothamLight"',
    },
    body2: {
      fontFamily: '"Lato"',
    },
  },
});