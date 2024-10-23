import * as React from "react";
import { Box, TextField, MenuItem, Button } from "@mui/material";
import { color, motion } from "framer-motion";
import { duration, useTheme } from "@mui/material/styles";

const Submit = () => {
  const theme = useTheme(); // Access the theme
  const themeMode = theme.palette.mode;

  // Define text color based on the theme mode
  const textColor =
    themeMode === "light"
      ? theme.palette.background.inverse
      : theme.palette.background.inverse;

  const hoverColor =
    themeMode === "light" ? theme.palette.text.blue : theme.palette.text.blue;

  const currencies = [
    {
      value: "Poetry",
      label: "Poetry",
    },
    {
      value: "Review Request",
      label: "Review Request",
    },
    {
      value: "General Question",
      label: "General Question",
    },
    {
      value: "Feedback",
      label: "Feedback",
    },
  ];

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
          maxWidth: "80vw",
          marginTop: "20px",
          padding: "20px 40px",
          color: textColor,
          transition: "color 1s ease-in",
          backgroundColor: "#33333311",
          borderRadius: "50px",
          // justifyContent: "space-between",
        }}
      >
        <motion.div
          className="flex column center"
          variants={divVariants}
          initial="initial"
          animate="animate"
        >
          <div className="flex max50 column alignCenter">
            <h1>submit</h1>
            <div className="flex wrap textCenter">
              <h3>
                <span className="midSentenceBold">
                  Want your poems to be featured here? Have a request for a
                  review, question, or comment? Submit them here, and I will get
                  back to you as soon as I can.
                </span>{" "}
              </h3>
            </div>
          </div>
          <div className="p25 wrap flex between">
            <TextField
              required
              id="outlined-required-name"
              label="Name"
              defaultValue="Jillian Smithenski"
              style={{ width: "225px" }}
            />
            <TextField
              required
              id="outlined-required-email"
              label="Email"
              defaultValue="jsmithenski@poems.ua"
              style={{ width: "225px" }}
            />
          </div>
          <div className="p25 wrap flex between">
            <TextField
              select
              id="outlined-select-submissionType"
              label="What Are You Submitting?"
              defaultValue="Poetry"
              style={{ width: "225px" }}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              multiline
              required
              id="outlined-multiline-submission"
              label="Message"
              defaultValue="Hello there!"
              style={{ width: "225px" }}
            />
          </div>
          <p className="">* - required field</p>
          <Button
            className="navLink"
            sx={{
              marginX: "2rem",
              paddingX: "2rem",
              fontWeight: 300,
              fontSize: "130%",
              fontFamily: "GothamLight",
              whiteSpace: "nowrap",
              flexGrow: 1,
              color: textColor, // Use the dynamic text color
              backgroundColor: theme.palette.button.default,
              transition: "color 0.6s ease-in, background-color 0.5s ease-out",
              "&:hover": {
                color: theme.palette.button.textColor, // Change hover color based on theme
                backgroundColor: theme.palette.button.backgroundColor,
                transition:
                  "color 0.5s ease-out, background-color 0.5s ease-out",
              },
            }}
          >
            Submit
          </Button>
        </motion.div>
      </Box>
    </>
  );
};

export default Submit;
