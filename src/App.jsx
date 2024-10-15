//init react
import React from "react";

import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Pens from "./pages/pens/pens";
import Poems from "./pages/poems/poems";
import Ink from "./pages/ink/ink";
import Paper from "./pages/paper/paper";
import HomePage from "./pages/home/home";

//CSS imports
import "./App.css";
import "./index.css";
import { lightTheme } from "./themes/light";
import { darkTheme } from "./themes/dark";

//misc package imports
import { AppBar, createTheme, ThemeProvider } from "@mui/material";

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
      <ThemeProvider theme={theme}>
        <Router>
          {/* <CssBaseline /> */}
          <Nav />
          <Routes>
            <Route path="/ink" element={<Ink />} />
            <Route path="/paper" element={<Paper />} />
            <Route path="/pens" element={<Pens />} />
            <Route path="/poems" element={<Poems />} />
            <Route path="/*" element={<HomePage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </ColorContext.Provider>
  );
}

export default App;
