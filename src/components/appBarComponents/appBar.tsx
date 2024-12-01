import * as React from "react";
import { styled, alpha, useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { Toolbar, IconButton, InputBase, MenuItem, Menu } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ArticleIcon from "@mui/icons-material/Article";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import WifiOutlinedIcon from "@mui/icons-material/WifiOutlined";

interface PrimarySearchAppBarProps {
  children: React.ReactNode;
}

const Search = styled("div")(({ theme }) => {
  const themeMode = theme.palette.mode;
  const backgroundColorLight = alpha("#222222", 0.15);
  const backgroundColorDark = alpha(theme.palette.common.white, 0.15);

  return {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor:
      themeMode === "light" ? backgroundColorLight : backgroundColorDark,
    transition: "background-color 0.5s, color 0.5s, filter 0.5s",
    "&:hover": {
      backgroundColor:
        themeMode === "light"
          ? alpha("#222222", 0.25)
          : alpha(theme.palette.common.white, 0.25),
      filter: "drop-shadow(0 0 2em #646cffaa)",
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  };
});

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function PrimarySearchAppBar({
  children,
}: PrimarySearchAppBarProps) {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  // const renderMenu = (
  //   <Menu
  //     anchorEl={anchorEl}
  //     anchorOrigin={{
  //       vertical: "top",
  //       horizontal: "right",
  //     }}
  //     id={menuId}
  //     keepMounted
  //     transformOrigin={{
  //       vertical: "top",
  //       horizontal: "right",
  //     }}
  //     open={isMenuOpen}
  //     onClose={handleMenuClose}
  //   >
  //   </Menu>
  // );

  const mobileMenuId = "appBarMenu";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Link to="/poems">
        <MenuItem>
          <IconButton
            size="large"
            aria-label="poems"
            sx={{ color: theme.palette.text.primary }}
          >
            <ArticleIcon />
          </IconButton>
          <p style={{ color: theme.palette.text.primary }}>Poems</p>
        </MenuItem>
      </Link>
      <Link to="/pens">
        <MenuItem>
          <IconButton
            size="large"
            aria-label="pens"
            sx={{ color: theme.palette.text.primary }}
          >
            <EditOutlinedIcon />
          </IconButton>
          <p style={{ color: theme.palette.text.primary }}>Pens</p>
        </MenuItem>
      </Link>
      <Link to="/ink">
        <MenuItem>
          <IconButton
            size="large"
            aria-label="ink"
            sx={{ color: theme.palette.text.primary }}
          >
            <WaterDropOutlinedIcon />
          </IconButton>
          <p style={{ color: theme.palette.text.primary }}>Ink</p>
        </MenuItem>
      </Link>
      <Link to="/paper">
        <MenuItem>
          <IconButton
            size="large"
            aria-label="paper"
            sx={{ color: theme.palette.text.primary }}
          >
            <SendOutlinedIcon />
          </IconButton>
          <p style={{ color: theme.palette.text.primary }}>Paper</p>
        </MenuItem>
      </Link>
      <Link to="/submit">
        <MenuItem>
          <IconButton
            size="large"
            aria-label="submit"
            sx={{ color: theme.palette.text.primary }}
          >
            <WifiOutlinedIcon />
          </IconButton>
          <p style={{ color: theme.palette.text.primary }}>Submit</p>
        </MenuItem>
      </Link>
    </Menu>
  );

  const childrenArray = React.Children.toArray(children);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          backgroundColor: theme.palette.background.appBar,
          color: theme.palette.text.primary,
          justifyItems: "center",
          transition: "background-color 1s ease-in-out",
        }}
        position="static"
      >
        <Toolbar>
          {/* Menu Icon */}
          <IconButton
            size="large"
            edge="start"
            aria-label="open drawer"
            onClick={handleMobileMenuOpen}
            id="appBarMenu"
            sx={{
              mr: 2,
              color: theme.palette.text.primary,
              transition: "color 3s",
            }}
          >
            <MenuIcon />
          </IconButton>

          {childrenArray[0]}

          <Box sx={{ flexGrow: 1 }} />
          {childrenArray[1]}
          <Box>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {/* {renderMenu} */}
    </Box>
  );
}
