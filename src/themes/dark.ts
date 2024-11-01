import { createTheme } from '@mui/material/styles';



declare module '@mui/material/styles' {
  interface TypeBackground {
    strokeColor?: string;
    fillColor?: string;
    backgroundImage?: string;
    inverse?: string;
    inverseGrey?: string;
    semiTrans?: string
    appBar?: string
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
    alternateText?: string;
  }

  interface PaletteOptions {
    background?: Partial<TypeBackground>;
    svg?: Partial<TypeSvg>;
    svg2?: Partial<TypeSvg>;
    svg3?: Partial<TypeSvg>;
    button?: Partial<TypeButton>
  }
}


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
      inverse: "#F6F7EB",
      inverseGrey: "#888888b0",
      strokeColor: '#F6F7EB',  
      fillColor: '#000000',    
      semiTrans: "#11111199",
      appBar: "#22222299"
    },
    svg: {fillColor: '#F7D59C' },
    svg2: {fillColor: '#A37A4E ' },
    svg3: {fillColor: '#D9D8D1' },
    text: {
      primary: '#f6f7eb',
      blue: "#61dafb",
    },

    button: {textColor: '#1d1c1e',
      backgroundColor: '#138287',
      alternateHover: '#38308e88',
      alternateText: '#ffffff',
      default: "#B9057188",
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