import PrimarySearchAppBar from "../appBarComponents/appBar";
import { SwitchModeButton } from "../miscComponents/switchModeButton";
import FullLogoDesktop from "./desktop/fullLogoDesktop";
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
            <FullLogoDesktop />
            <SwitchModeButton />
          </PrimarySearchAppBar>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
