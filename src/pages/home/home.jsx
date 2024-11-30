import { useState, useEffect } from "react";
import headerLight from "../../assets/images/png/writingDesk.jpg";
import headerDark from "../../assets/images/png/writingDeskDark.jpg";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";

const HomePage = () => {
  const theme = useTheme(); // Access the theme
  const themeMode = theme.palette.mode;

  const textColor =
    themeMode === "light"
      ? theme.palette.background.inverse
      : theme.palette.background.inverse;
  const textContrast =
    themeMode === "light"
      ? theme.palette.background.default
      : theme.palette.background.default;

  const [currentImage, setCurrentImage] = useState(
    theme.palette.mode === "light" ? headerLight : headerDark
  );
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);

    const timeout = setTimeout(() => {
      setCurrentImage(
        theme.palette.mode === "light" ? headerLight : headerDark
      );
      setFade(false);
    }, 750);

    return () => clearTimeout(timeout);
  }, [theme.palette.mode]);

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
      {/* <img
        src={currentImage}
        style={{ opacity: fade ? 0.25 : 1, transition: "opacity 0.5s linear" }}
        className="homeHeaderPic"
      /> */}
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
              theme.palette.mode === "light" ? "#ffffff88" : "#22222288",
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
            // backgroundColor: "#33333311",
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
                  <div className="flex row between">
                    <a href="/#/poems">
                      <h3>poems</h3>
                    </a>
                    <a href="/#/pens">
                      <h3>pens</h3>
                    </a>
                    <a href="/#/ink">
                      <h3>ink</h3>
                    </a>
                    <a href="/#/paper">
                      <h3>paper</h3>
                    </a>
                    <a href="/#/submit">
                      <h3>submit</h3>
                    </a>
                  </div>
                </span>
                <h3>
                  poetry posted here currently is my own - however, if you would
                  like to contribute, I welcome it! Click the submit button
                  above and fill out the form to submit your poem. Handwritten
                  poetry is preferred but not required. This site is also in
                  active development, and is open source. If you would like to
                  play around with the code, check out the repo{" "}
                  <a href="https://github.com/corynko/ofpoemsandpens">here</a>.
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
