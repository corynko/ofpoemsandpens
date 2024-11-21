import React, { useRef, useState } from "react";
import { Box, TextField, MenuItem, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme, styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/DriveFolderUpload";
import { CloudDone } from "@mui/icons-material";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import "animate.css";

async function uploadFileToS3(file) {
  try {
    const response = await fetch(
      "https://upload-to-pcloud.dawn-hall-4165.workers.dev/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fileName: file.name, fileType: file.type }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to get pre-signed URL");
    }

    const { signedUrl } = await response.json();

    const uploadResponse = await fetch(signedUrl, {
      method: "PUT",
      headers: { "Content-Type": file.type },
      body: file,
    });

    if (!uploadResponse.ok) {
      throw new Error("Failed to upload file to S3");
    }

    const baseUrl = signedUrl.split("?")[0];
    // console.log("File uploaded successfully to:", baseUrl);
    return baseUrl;
  } catch (error) {
    // console.error("Error uploading file:", error);
    throw error;
  }
}

const Submit = () => {
  const theme = useTheme();
  const themeMode = theme.palette.mode;
  const [selectedFile, setSelectedFile] = useState(null);
  const [addedFile, setAddedFile] = useState(null);

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
    { value: "Poetry", label: "Poetry" },
    { value: "Review Request", label: "Review Request" },
    { value: "General Question", label: "General Question" },
    { value: "Feedback", label: "Feedback" },
  ];

  let divVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 2, ease: "easeInOut" },
    },
  };

  const form = useRef();

  const handleFileSelect = (e) => {
    addName(e);
  };

  const addName = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setAddedFile(file);
      // console.log("File selected:", file.name);
      setSelectedFile(file.name);
      const e = file;
    } else {
      setAddedFile(null);
      // console.log("No file selected");
      setSelectedFile(null);
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    const formElement = form.current;

    if (!formElement) {
      console.error("Form element not found");
      return;
    }

    try {
      let swalWait = Swal.mixin({
        toast: true,
        position: "bottom",

        customClass: {
          title: "swalTitle",
          container: "swalContainer",
          confirmButton: "swalButton",
          popup: "swalPopup",
        },
        showClass: {
          popup: `animate__animated
          animate__fadeInDown
          `,
        },
      });

      swalWait.fire({
        title: "Submitting...",
        text: "Sending your message. Please wait.",
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
      });

      const file = addedFile;
      // console.log(file);

      if (file) {
        const fileUrl = await uploadFileToS3(file);

        const formData = new FormData(formElement);
        formData.append("uploaded_file_url", fileUrl);

        await emailjs.sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          formElement,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );

        // console.log("Email sent successfully!");
        let swalConfirm = Swal.mixin({
          toast: true,
          timer: 4000,
          timerProgressBar: true,
          position: "bottom",
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
          customClass: {
            title: "swalTitle",
            container: "swalContainer",
            confirmButton: "swalButton",
            popup: "swalPopup",
          },
          showClass: {
            popup: `animate__animated
            animate__bounceInDown
            `,
          },
          hideClass: {
            popup: `animate__animated
            animate__backOutUp`,
          },
        });
        swalConfirm.fire({
          icon: "success",
          title: "Submission Successful",
          text: "Your file and message have been sent successfully!",
        });
        formElement.reset();
        setAddedFile(null);
        setSelectedFile(null);
      } else {
        // If no file, send email directly
        await emailjs.sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          formElement,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
        let swalConfirm = Swal.mixin({
          toast: true,
          timer: 4000,
          timerProgressBar: true,
          position: "bottom",
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
          customClass: {
            title: "swalTitle",
            container: "swalContainer",
            confirmButton: "swalButton",
            popup: "swalPopup",
          },
          showClass: {
            popup: `animate__animated
            animate__bounceInDown
            `,
          },
          hideClass: {
            popup: `animate__animated
            animate__backOutUp`,
          },
        });

        // console.log("Email sent successfully (no file)!");
        swalConfirm.fire({
          icon: "success",
          title: "Submission Successful",
          text: "Your submission has been sent!",
        });
        formElement.reset();
        setAddedFile(null);
        setSelectedFile(null);
      }
    } catch (error) {
      console.error("Email send failed:", error);
      Swal.fire({
        icon: "warning",
        title: "Submission Failed",
        text: "There was an issue with your submission. Please try again later.",
      });
    }
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
          <form ref={form} name="submissionForm" onSubmit={sendEmail}>
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
                  color: textColor,
                  backgroundColor: theme.palette.button.default,
                  transition:
                    "color 0.6s ease-in, background-color 0.5s ease-out",
                  "&:hover": {
                    color: theme.palette.button.textColor,
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
                  onChange={handleFileSelect}
                  multiple
                  id="inputfile"
                />
              </Button>
              {selectedFile && (
                <>
                  <CloudDone sx={{ marginY: "7px" }} />
                  <Typography variant="body1">
                    <strong>Selected File:</strong> {selectedFile}
                  </Typography>
                </>
              )}
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
            variant="contained"
            value="Send"
            sx={{
              marginX: "2rem",
              paddingX: "2rem",
              fontWeight: 300,
              fontSize: "130%",
              fontFamily: "GothamLight",
              whiteSpace: "nowrap",
              flexGrow: 1,
              color: textColor,
              backgroundColor: theme.palette.button.default,
              transition: "color 0.6s ease-in, background-color 0.5s ease-out",
              "&:hover": {
                color: theme.palette.button.textColor,
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
