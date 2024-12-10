import React from "react";
import {
  BrowserRouter as Router,
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
import Code404 from "./pages/404";
import "./App.css";
import "./index.css";
import BackgroundImage from "./components/miscComponents/backgroundImage";
import { Box } from "@mui/material";
import Nav from "./components/navComponents/Nav";
import { ColorProvider } from "./contexts/ColorContext";

function App() {
  return (
    <ColorProvider>
      <BackgroundImage />
      <Router>
        <Nav />
        <Box>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ink" element={<Ink />} />
            <Route path="/ink/:inkId" element={<Ink />} />
            <Route path="/paper" element={<Paper />} />
            <Route path="/pens" element={<Pens />} />
            <Route path="/submit" element={<Submit />} />
            <Route path="/poems" element={<Poems />} />
            <Route path="/poems/:poemId" element={<Poems />} />
            <Route path="*" element={<Navigate to="/404" />} />
            <Route path="/404" element={<Code404 />} />
          </Routes>
        </Box>
      </Router>
    </ColorProvider>
  );
}

export default App;
