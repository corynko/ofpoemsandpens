import React from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Pens from "./pages/pens/pens";
import Poems from "./pages/poems/poems";
import Ink from "./pages/ink/ink";
import Paper from "./pages/paper/paper";
import HomePage from "./pages/home/home";
import Submit from "./pages/submit/submit";
import "./App.css";
import "./index.css";
import { lightTheme } from "./themes/light";
import { darkTheme } from "./themes/dark";
import BackgroundImage from "./components/miscComponents/backgroundImage";
import { AppBar, createTheme, ThemeProvider, Box } from "@mui/material";
import Nav from "./components/navComponents/Nav";
import { ColorContext } from "./contexts/ColorContext";

function App() {
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
      <ThemeProvider theme={theme}>
        <BackgroundImage />
        <Router>
          <Nav />
          <Box className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/ink" element={<Ink />} />
              <Route path="/ink/:inkId" element={<Ink />} />
              <Route path="/paper" element={<Paper />} />
              <Route path="/pens" element={<Pens />} />
              <Route path="/submit" element={<Submit />} />
              <Route path="/poems" element={<Poems />} />
              <Route path="/poems/:poemId" element={<Poems />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Box>
        </Router>
      </ThemeProvider>
    </ColorContext.Provider>
  );
}

export default App;
