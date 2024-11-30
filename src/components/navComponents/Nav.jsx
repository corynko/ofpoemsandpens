import { useTheme } from "@emotion/react";
import PrimarySearchAppBar from "../appBarComponents/appBar";
import { SwitchModeButton } from "../miscComponents/switchModeButton";
import FullLogoDesktop from "./desktop/fullLogoDesktop";
import NavItemsDesktop from "./desktop/navItemsDesktop";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import GitHubIcon from "@mui/icons-material/GitHub";
import { color } from "framer-motion";
import { Link } from "@mui/material";

export default function Nav() {
  const theme = useTheme();
  const themeMode = theme.palette.mode;

  const textColor = theme.palette.background.inverse;
  const textColorHover =
    themeMode === "light" ? theme.palette.background.default : "#177bb5";

  return (
    <AppBar
      className="appBar"
      style={{ background: "transparent", boxShadow: "none" }}
    >
      <Toolbar className="toolBar" disableGutters>
        <Box
          sx={{
            width: 1,
            display: "fixed",
            flexGrow: 1,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <PrimarySearchAppBar>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <FullLogoDesktop />
              <Box sx={{ justifyContent: "end" }}>
                <NavItemsDesktop />
              </Box>
            </Box>

            {/* This ensures that the SwitchModeButton remains on the right */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Link
                target="_blank"
                href="https://github.com/corynko/ofpoemsandpens"
                sx={{
                  color: textColor,
                  transition: "color 0.75s ease-in",
                  "&:hover": {
                    color: textColorHover,
                  },
                }}
              >
                <GitHubIcon />
              </Link>
              <SwitchModeButton />
            </Box>
          </PrimarySearchAppBar>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
