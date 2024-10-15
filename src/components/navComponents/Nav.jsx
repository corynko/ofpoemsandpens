import PrimarySearchAppBar from "../appBarComponents/appBar";
import { SwitchModeButton } from "../miscComponents/switchModeButton";
import FullLogoDesktop from "./desktop/fullLogoDesktop";
import NavItemsDesktop from "./desktop/navItemsDesktop";
// import { useContext } from "react";
// import AppBarHeightContext from "../../contexts/AppBarHeightContext";

// non-animated imports
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";

// import LogoDrawDesktop from "./desktop/logoDrawDesktop";
// import WordDrawDesktop from "./desktop/wordDrawDesktop";
// import NavItemsDesktop from "./desktop/navItemsDesktop";

export default function Nav() {
  return (
    <AppBar
      className="appBar"
      style={{ background: "transparent", boxShadow: "none" }}
    >
      <Toolbar className="toolBar" disableGutters>
        <Box
          sx={{
            width: 1,
            display: "flex",
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
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <SwitchModeButton />
            </Box>
          </PrimarySearchAppBar>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
