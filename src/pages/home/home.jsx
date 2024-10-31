import pilotPic from "../../assets/images/png/pilotCustomFineOnPaper.png";
import { Box } from "@mui/material";
import { color, motion } from "framer-motion";
import { duration, useTheme } from "@mui/material/styles";

const HomePage = () => {
  const theme = useTheme(); // Access the theme
  const themeMode = theme.palette.mode;

  // Define text color based on the theme mode
  const textColor =
    themeMode === "light"
      ? theme.palette.background.inverse
      : theme.palette.background.inverse;

  let divVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 2,
        // delay: 1,
        ease: "easeInOut",
      },
    },
  };
  return (
    <>
      <Box
        className="flex center"
        sx={{
          zIndex: 5,
          width: "80vw",
          paddingTop: "40px",
          paddingBottom: "40px",
          color: textColor,
          transition: "color 1s ease-in",
          backgroundColor: "#33333311",
          borderRadius: "50px",
          // justifyContent: "space-between",
        }}
      >
        <motion.div
          className="flex center"
          variants={divVariants}
          initial="initial"
          animate="animate"
        >
          <div className="flex m25R">
            <img src={pilotPic} className="homeHeaderPic" />
          </div>
          <div className="flex m25L max50 column alignStart">
            <h1>welcome</h1>
            <div className="flex wrap textStart start">
              <span>
                <h2>
                  to <span className="midSentenceBold">of pens and poems,</span>{" "}
                </h2>
                <h3 style={{ fontSize: "23px" }}>
                  a resource for reviews of fountain pens, inks, and paper.
                </h3>
              </span>
              <h3>
                poetry posted here currently is my own - however, if you would
                like to contribute, I welcome it! Click the submit button above
                and fill out the form to submit your poem. Handwritten poetry is
                preferred but not required. This site is also in active
                development, and is open source. If you would like to play
                around with the code, check out the repo{" "}
                <a href="https://github.com/corynko/ofpoemsandpens">here</a>.
              </h3>
            </div>
          </div>
        </motion.div>
      </Box>
    </>
  );
};

export default HomePage;
