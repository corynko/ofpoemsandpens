import React, { useState, useMemo } from "react";

interface ColorContextSchema {
  toggleColorMode: () => void;
  mode: "light" | "dark";
}

export const ColorContext = React.createContext<ColorContextSchema>(
  {} as ColorContextSchema
);

export const ColorContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const contextValue = useMemo(() => ({ mode, toggleColorMode }), [mode]);

  return (
    <ColorContext.Provider value={contextValue}>
      {children}
    </ColorContext.Provider>
  );
};
