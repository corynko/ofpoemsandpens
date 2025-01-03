import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import { alpha } from "@mui/material";

function NavItemsDesktop() {
  const theme = useTheme();
  const themeMode = theme.palette.mode;

  const textColor =
    themeMode === "light"
      ? theme.palette.background.inverse // or any other color for light mode
      : theme.palette.background.inverse; // or any other color for dark mode

  const hoverColor =
    themeMode === "light"
      ? alpha(theme.palette.text.blue, 1)
      : alpha(theme.palette.text.blue, 1);

  let containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.5,
        ease: "easeInOut",
      },
    },
  };
  let divVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        ease: "easeInOut",
      },
    },
  };
  let linkVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 1.25,

        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div variants={divVariants} initial="initial" animate="animate">
        <Box
          sx={{
            display: { xs: "none", lg: "flex" },
            textAlign: "center",
          }}
        >
          <motion.div variants={linkVariants}>
            <Link className="m10" to="/poems">
              <Button
                className="navLink"
                id="stickNav"
                sx={{
                  marginX: "1rem",
                  fontWeight: 300,
                  fontSize: "115%",
                  fontFamily: "GothamLight",
                  whiteSpace: "nowrap",
                  flexGrow: 1,
                  color: textColor,
                  transition: "color 1s ease-in",
                  "&:hover": {
                    color: hoverColor,
                    transition: "color 0.5s ease-out",
                  },
                }}
                fullWidth={true}
              >
                poems
              </Button>
            </Link>
          </motion.div>
          <motion.div variants={linkVariants}>
            <Link className="m10" variants={linkVariants} to="/pens">
              <Button
                className="navLink"
                sx={{
                  marginX: "1rem",
                  fontWeight: 300,
                  fontSize: "115%",
                  fontFamily: "GothamLight",
                  whiteSpace: "nowrap",
                  flexGrow: 1,
                  color: textColor,
                  transition: "color 1s ease-in",
                  "&:hover": {
                    color: hoverColor,
                    transition: "color 0.5s ease-out",
                  },
                }}
                fullWidth={true}
              >
                pens
              </Button>
            </Link>
          </motion.div>
          <motion.div variants={linkVariants}>
            <Link className="m10" variants={linkVariants} to="/ink">
              <Button
                className="navLink"
                sx={{
                  marginX: "1rem",
                  fontWeight: 300,
                  fontSize: "115%",
                  fontFamily: "GothamLight",
                  whiteSpace: "nowrap",
                  flexGrow: 1,
                  color: textColor,
                  transition: "color 1s ease-in",
                  "&:hover": {
                    color: hoverColor,
                    transition: "color 0.5s ease-out",
                  },
                }}
                fullWidth={true}
              >
                ink
              </Button>
            </Link>
          </motion.div>
          <motion.div variants={linkVariants}>
            <Link className="m10" variants={linkVariants} to="/paper">
              <Button
                className="navLink"
                sx={{
                  marginX: "1rem",
                  fontWeight: 300,
                  fontSize: "115%",
                  fontFamily: "GothamLight",
                  whiteSpace: "nowrap",
                  flexGrow: 1,
                  color: textColor,
                  transition: "color 1s ease-in",
                  "&:hover": {
                    color: hoverColor,
                    transition: "color 0.5s ease-out",
                  },
                }}
                fullWidth={true}
              >
                paper
              </Button>
            </Link>
          </motion.div>
          <motion.div variants={linkVariants}>
            <Link className="m10" variants={linkVariants} to="/submit">
              <Button
                className="navLink"
                sx={{
                  strokeWidth: "5px",
                  marginX: "1rem",
                  fontWeight: 300,
                  fontSize: "115%",
                  fontFamily: "GothamLight",
                  whiteSpace: "nowrap",
                  flexGrow: 1,
                  color: textColor,
                  transition: "color 1s ease-in",
                  "&:hover": {
                    color: hoverColor,
                    transition: "color 0.5s ease-out",
                  },
                }}
                fullWidth={true}
              >
                submit
              </Button>
            </Link>
          </motion.div>
        </Box>
      </motion.div>
    </motion.div>
  );
}

export default NavItemsDesktop;
