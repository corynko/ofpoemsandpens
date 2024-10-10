import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ResponsiveAppBar from "./components/appBarComponents/appBar";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#1377C9",
    },
    secondary: {
      main: "#6b3f79",
    },
    error: {
      main: "#F42272",
    },
    success: {
      main: "#22A2DD",
    },
    info: {
      main: "#8BBF9F",
    },
    warning: {
      main: "#EF959C",
    },
    background: {
      default: "#dedede",
    },
    text: {
      primary: "#131311",
    },
  },
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ThemeProvider theme={theme}>
        <div>
          {/* <ResponsiveAppBar /> */}
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            {" "}
            vite test
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </ThemeProvider>
    </>
  );
}

export default App;
