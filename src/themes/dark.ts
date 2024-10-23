import { createTheme } from '@mui/material/styles';
// import backgroundImage from "../assets/images/svg/paperBackgroundDark.svg"


declare module '@mui/material/styles' {
  interface TypeBackground {
    strokeColor?: string;
    fillColor?: string;
    backgroundImage?: string;
    inverse?: string;
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
      strokeColor: '#F6F7EB',  // Custom property
      fillColor: '#000000',    // Custom property
      // backgroundImage: `url(${backgroundImage})`
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
      default: "#B9057188",
    }
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