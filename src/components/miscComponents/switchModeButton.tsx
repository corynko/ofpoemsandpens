import { Box, IconButton, useTheme } from "@mui/material";
import DarkIcon from "@mui/icons-material/Brightness4";
import LightIcon from "@mui/icons-material/Nightlight";
import React, { useContext } from "react";

import { ColorContext } from "../../contexts/ColorContext";

export const SwitchModeButton = () => {
  const theme = useTheme();
  // Access both the mode and toggleColorMode from the ColorContext
  const { toggleColorMode } = useContext(ColorContext);

  return (
    <Box
      sx={{
        display: "flex",
        fontFamily: "GothamBook",
        width: "100%",
        justifyContent: "end",
        transition: "color 0.1s",
      }}
    >
      <IconButton
        sx={{ ml: 1 }}
        onClick={toggleColorMode} // Correctly calling toggleColorMode
        color="inherit"
      >
        {theme.palette.mode === "dark" ? <LightIcon /> : <DarkIcon />}
      </IconButton>
    </Box>
  );
};
