import { Box, IconButton, useTheme } from "@mui/material";
import DarkIcon from "@mui/icons-material/Brightness4";
import LightIcon from "@mui/icons-material/Nightlight";
import { useColorContext } from "../../contexts/ColorContext";

export const SwitchModeButton = () => {
  const theme = useTheme();

  const { toggleColorMode } = useColorContext();

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
        onClick={() => {
          console.log("SwitchModeButton clicked");
          toggleColorMode(true);
        }}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? <LightIcon /> : <DarkIcon />}
      </IconButton>
    </Box>
  );
};
