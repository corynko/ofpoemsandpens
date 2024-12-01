import React, {
  createContext,
  useState,
  useMemo,
  ReactNode,
  useContext,
} from "react";

type ColorModeContextType = {
  toggleColorMode: (isUserInitiated?: boolean) => void;
  mode: "light" | "dark";
  isUserToggled: boolean;
};

export const ColorContext = createContext<ColorModeContextType | null>(null);

type ColorProviderProps = {
  children: ReactNode;
};

export const ColorProvider: React.FC<ColorProviderProps> = ({ children }) => {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const [isUserToggled, setIsUserToggled] = useState(false);

  const colorMode = useMemo(
    () => ({
      mode,
      isUserToggled,
      toggleColorMode: (isUserInitiated: boolean = false) => {
        if (isUserInitiated) {
          console.log("User-initiated toggle triggered.");
          setIsUserToggled(true);
        }
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
      resetUserToggle: () => {
        console.log("Resetting user toggle flag...");
        setIsUserToggled(false); // Explicitly reset the flag here
      },
    }),
    [mode, isUserToggled]
  );

  return (
    <ColorContext.Provider value={colorMode}>{children}</ColorContext.Provider>
  );
};

export const useColorContext = (): ColorModeContextType => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error("useColorContext must be used within a ColorProvider");
  }
  return context;
};
