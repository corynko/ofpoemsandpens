import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles"; // Fix the theme import
import { alpha } from "@mui/material"; // Ensure you have alpha imported

function NavItemsDesktop() {
  const theme = useTheme(); // Access the theme
  const themeMode = theme.palette.mode;

  // Define text color based on the theme mode
  const textColor =
    themeMode === "light"
      ? theme.palette.background.inverse // or any other color for light mode
      : theme.palette.background.inverse; // or any other color for dark mode

  let divVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeInOut",
        delay: 0.3,
      },
    },
  };

  return (
    <motion.div variants={divVariants} initial="initial" animate="animate">
      <Box
        sx={{
          display: { xs: "none", lg: "flex" },
          textAlign: "center",
        }}
      >
        <Link className="m10" to="/poems">
          <Button
            className="navLink"
            sx={{
              marginX: "1rem",
              fontWeight: 300,
              fontSize: "115%",
              fontFamily: "GothamLight",
              whiteSpace: "nowrap",
              flexGrow: 1,
              color: textColor, // Use the dynamic text color
            }}
            fullWidth={true}
          >
            poems
          </Button>
        </Link>
        <Link className="m10" to="/pens">
          <Button
            className="navLink"
            sx={{
              marginX: "1rem",
              fontWeight: 300,
              fontSize: "115%",
              fontFamily: "GothamLight",
              whiteSpace: "nowrap",
              flexGrow: 1,
              color: textColor, // Use the dynamic text color
            }}
            fullWidth={true}
          >
            pens
          </Button>
        </Link>
        {/* TODO: only show profile link if logged in */}
        <Link className="m10" to="/ink">
          <Button
            className="navLink"
            sx={{
              marginX: "1rem",
              fontWeight: 300,
              fontSize: "115%",
              fontFamily: "GothamLight",
              whiteSpace: "nowrap",
              flexGrow: 1,
              color: textColor, // Use the dynamic text color
            }}
            fullWidth={true}
          >
            ink
          </Button>
        </Link>
        <Link className="m10" to="/paper">
          <Button
            className="navLink"
            sx={{
              marginX: "1rem",
              fontWeight: 300,
              fontSize: "115%",
              fontFamily: "GothamLight",
              whiteSpace: "nowrap",
              flexGrow: 1,
              color: textColor, // Use the dynamic text color
            }}
            fullWidth={true}
          >
            paper
          </Button>
        </Link>
      </Box>
    </motion.div>
  );
}

export default NavItemsDesktop;
