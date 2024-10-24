import React, { useRef } from "react";
import { Box, TextField, MenuItem, Button } from "@mui/material";
import { color, motion } from "framer-motion";
import { duration, useTheme, styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import emailjs from "@emailjs/browser";

const Submit = () => {
  const theme = useTheme(); // Access the theme
  const themeMode = theme.palette.mode;

  // Define text color based on the theme mode
  const textColor =
    themeMode === "light"
      ? theme.palette.background.inverse
      : theme.palette.background.inverse;

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

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

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
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
          <form name="submissionForm" ref={form} onSubmit={sendEmail}>
            <div className="p25 wrap flex between">
              <TextField
                required
                id="outlined-required-name"
                label="Name"
                defaultValue="Jillian Smithenski"
                style={{ width: "225px" }}
                name="from_name"
              />
              <TextField
                required
                id="outlined-required-email"
                label="Email"
                defaultValue="jsmithenski@poems.ua"
                style={{ width: "225px" }}
                name="from_email"
              />
            </div>
            <div className="p25 wrap flex between">
              <TextField
                select
                id="outlined-select-submissionType"
                label="What Are You Submitting?"
                defaultValue="Poetry"
                style={{ width: "225px" }}
                name="submission_type"
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
                name="message"
              />
            </div>
            <div className="center flex column">
              <p style={{ maxWidth: "600px", textAlign: "center" }}>
                // if submitting a poem, please upload a picture of it below \\
              </p>
              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
                sx={{
                  color: textColor, // Use the dynamic text color
                  backgroundColor: theme.palette.button.default,
                  transition:
                    "color 0.6s ease-in, background-color 0.5s ease-out",
                  "&:hover": {
                    color: theme.palette.button.textColor, // Change hover color based on theme
                    backgroundColor: theme.palette.button.backgroundColor,
                    transition:
                      "color 0.5s ease-out, background-color 0.5s ease-out, filter 1s ease-out",
                  },
                  "&:active": {
                    filter: "drop-shadow(0 0 0.5em #646cffaa)",
                    transition: "filter 1s ease-out",
                  },
                }}
              >
                Upload Photo
                <VisuallyHiddenInput
                  type="file"
                  onChange={(event) => console.log(event.target.files)}
                  multiple
                  name="uploaded_file"
                />
              </Button>
              <p style={{ maxWidth: "400px", textAlign: "center" }}>
                // in your message, please include the author's name (if
                different from your name), and, if desired, your social media
                handle \\
              </p>
            </div>
          </form>
          <p className="">* - required field</p>
          <Button
            className="navLink"
            onClick={sendEmail}
            type="submit"
            value="Send"
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
                  "color 0.5s ease-out, background-color 0.5s ease-out, filter 1s ease-out",
              },
              "&:active": {
                filter: "drop-shadow(0 0 0.5em #646cffaa)",
                transition: "filter 1s ease-out",
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
