import React, {
  createContext,
  useState,
  useMemo,
  ReactNode,
  useContext,
} from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { lightTheme } from "../themes/light";
import { darkTheme } from "../themes/dark";

type ColorModeContextType = {
  toggleColorMode: (isUserInitiated?: boolean) => void;
  mode: "light" | "dark";
  isUserToggled: boolean;
  resetUserToggle: () => void;
};

export const ColorContext = createContext<ColorModeContextType | null>(null);

type ColorProviderProps = {
  children: ReactNode;
};

export const ColorProvider: React.FC<ColorProviderProps> = ({ children }) => {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const [isUserToggled, setIsUserToggled] = useState(false);

  const theme = useMemo(
    () => createTheme(mode === "light" ? lightTheme : darkTheme),
    [mode]
  );

  const colorMode = useMemo(
    () => ({
      mode,
      isUserToggled,
      toggleColorMode: (isUserInitiated: boolean = false) => {
        if (isUserInitiated) {
          setIsUserToggled(true);
        }
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
      resetUserToggle: () => setIsUserToggled(false),
    }),
    [mode, isUserToggled]
  );

  return (
    <ColorContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorContext.Provider>
  );
};

export const useColorContext = (): ColorModeContextType => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error("useColorContext must be used within a ColorProvider");
  }
  return context;
};
