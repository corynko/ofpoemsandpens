import { useState, useEffect } from "react";
import headerLight from "../../assets/images/png/writingDesk.jpg";
import headerDark from "../../assets/images/png/writingDeskDark.jpg";
import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import { useColorContext } from "../../contexts/ColorContext";

const HomePage = () => {
  const theme = useTheme();
  const { mode, isUserToggled, resetUserToggle } = useColorContext();
  const [currentImage, setCurrentImage] = useState(
    mode === "light" ? headerLight : headerDark
  );
  const [fade, setFade] = useState(false);
  const textColor =
    mode === "light"
      ? theme.palette.background.inverse
      : theme.palette.background.inverse;
  const textContrast =
    mode === "light"
      ? theme.palette.background.default
      : theme.palette.background.default;

  useEffect(() => {
    if (isUserToggled) {
      setFade(true);

      const timeout = setTimeout(() => {
        setCurrentImage(mode === "light" ? headerLight : headerDark);
        setFade(false);
        resetUserToggle();
      }, 750);

      return () => clearTimeout(timeout);
    } else {
      setCurrentImage(mode === "light" ? headerLight : headerDark);
    }
  }, [mode, isUserToggled]);

  let divVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };
  return (
    <>
      <div>
        <Box
          sx={{
            backgroundImage: `url(${currentImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: -2,
            opacity: fade ? 0 : 1,
            filter: "saturate(75%)",
            transitionDelay: "3s",
            transition: "opacity 0.5s linear",
          }}
        />
        <Box
          sx={{
            backgroundColor:
              theme.palette.mode === "light" ? "#fecb8388" : "#22222288",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: -1,
            opacity: fade ? 1 : 0,
            transition: "opacity 0.5s linear",
          }}
        />

        <Box
          sx={{
            backgroundImage: `url(${
              theme.palette.mode === "light" ? headerLight : headerDark
            })`,
            position: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: -2,
            filter: "saturate(75%)",
            opacity: fade ? 1 : 0,

            transition: "opacity 0.5s linear",
            transitionDelay: "3s",
          }}
        />
      </div>
      <div id="homeHeaderBox">
        <Box
          className="flex center m25R mBot25 homeHeaderText"
          sx={{
            zIndex: 5,
            width: "60vw",
            paddingTop: "40px",
            paddingBottom: "40px",
            color: textColor,
            transition: "color 1s ease-in",
            borderRadius: "50px",
          }}
        >
          <motion.div
            className="flex center"
            variants={divVariants}
            initial="initial"
            animate="animate"
          >
            <div className="flex m25R"></div>
            <div className="flex m25L column alignCenter">
              <h1>of Pens and Poems</h1>
              <div className="flex wrap textCenter center">
                <span>
                  <h2>
                    <span className="midSentenceBold">
                      a resource for reviews of fountain pen, inks, paper, and
                      poetry
                    </span>{" "}
                  </h2>
                  <div className="flex homeHeaderButtons between">
                    <Button id="homeHeaderButton" href="/#/poems">
                      <Typography variant="h6">poems</Typography>
                    </Button>
                    <Button id="homeHeaderButton" href="/#/pens">
                      <Typography variant="h6">pens</Typography>
                    </Button>
                    <Button id="homeHeaderButton" href="/#/ink">
                      <Typography variant="h6">ink</Typography>
                    </Button>
                    <Button id="homeHeaderButton" href="/#/paper">
                      <Typography variant="h6">paper</Typography>
                    </Button>
                    <Button id="homeHeaderButton" href="/#/submit">
                      <Typography variant="h6">submit</Typography>
                    </Button>
                  </div>
                </span>
                <h3>
                  poetry posted here currently is my own - however, if you would
                  like to contribute, I welcome it! Click the submit button
                  above and fill out the form to submit your poem. Handwritten
                  poetry is preferred but not required.
                </h3>
              </div>
            </div>
          </motion.div>
        </Box>
      </div>
    </>
  );
};

export default HomePage;
