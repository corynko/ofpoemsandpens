//init react
import React from "react";

import { HashRouter as Router, Route, Routes } from "react-router-dom";

//CSS imports
import "./App.css";
import "./index.css";
import { lightTheme } from "./themes/light";
import { darkTheme } from "./themes/dark";

//misc package imports
import { AppBar, createTheme, CssBaseline, ThemeProvider } from "@mui/material";

//component imports
import Nav from "./components/navComponents/Nav";

//context imports
import { ColorContext } from "./contexts/ColorContext";

function App() {
  // const [count, setCount] = useState(0);
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () => createTheme(mode === "light" ? lightTheme : darkTheme),
    [mode]
  );

  return (
    <ColorContext.Provider value={colorMode}>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Nav />
        </ThemeProvider>
      </Router>
    </ColorContext.Provider>
  );
}

export default App;
