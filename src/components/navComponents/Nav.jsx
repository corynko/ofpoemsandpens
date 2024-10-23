import PrimarySearchAppBar from "../appBarComponents/appBar";
import { SwitchModeButton } from "../miscComponents/switchModeButton";
import FullLogoDesktop from "./desktop/fullLogoDesktop";
import NavItemsDesktop from "./desktop/navItemsDesktop";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";

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
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <SwitchModeButton />
            </Box>
          </PrimarySearchAppBar>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
