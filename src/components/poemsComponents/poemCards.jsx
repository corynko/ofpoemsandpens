import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import { Box, Card, Modal, IconButton } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useSpring, animated } from "@react-spring/web";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "animate.css";
import Swal from "sweetalert2";

const Fade = React.forwardRef(function Fade(props, ref) {
  const {
    children,
    in: open,
    onClick,
    onEnter,
    onExited,
    ownerState,
    ...other
  } = props;
  const style = useSpring({
    config: { duration: 400 },
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null, true);
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {React.cloneElement(children, { onClick })}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element.isRequired,
  in: PropTypes.bool,
  onClick: PropTypes.any,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
  ownerState: PropTypes.any,
};

export default function PoemCard({
  title,
  transcription,
  image,
  image2,
  image3,
  image4,
  image5,
  altText,
  author,
  urlAppend,
  delay,
}) {
  const [open, setOpen] = React.useState(false);
  const [currentImage, setCurrentImage] = useState(image);
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const hasPulsed = localStorage.getItem("hasPulsed");

  // localStorage.setItem("hasPulsed", "false");

  const [pulseState, setPulseState] = React.useState(false);

  React.useEffect(() => {
    const checkStorage = () => {
      if (hasPulsed === "true") {
        localStorage.setItem("hasPulsed", "true");
      } else {
        localStorage.setItem("hasPulsed", "false"), fireSwal();
      }
    };
    const timeout = setTimeout(
      () => localStorage.setItem("isPulsing", "true"),

      checkStorage(),
      delay + 800
    );
    const pulseStateInitial = setTimeout(
      () => setPulseState(true),
      delay + 750
    );
    const pulseStateTimeout = setTimeout(
      () => setPulseState(false),
      delay + 1100
    );
    const cleanup = setTimeout(
      () => localStorage.setItem("isPulsing", "false"),
      delay + 3250,

      checkStorage()
    );
    const extCleanup = setTimeout(
      () => localStorage.setItem("hasPulsed", "false"),
      delay + 10000,
      checkStorage()
    );

    return () => {
      clearTimeout(timeout);
      clearTimeout(cleanup);
      clearTimeout(extCleanup);
      clearTimeout(pulseStateTimeout);
      clearTimeout(pulseStateInitial);
    };
  }, [delay]);

  //TODO: Add small info button icon that triggers swal toast to refire on click, by restting the local storage and firing the functions again

  const fireSwal = () => {
    let swalConfirm = Swal.mixin({
      toast: true,
      timer: 5500,
      timerProgressBar: true,
      showConfirmButton: false,
      position: "bottom-end",
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
        animate__bounceInRight
        `,
      },
      hideClass: {
        popup: `animate__animated
        animate__backOutRight`,
      },
    });
    if (hasPulsed !== "true") {
      swalConfirm.fire({
        icon: "question",
        title: "Can't Read Sloppy Handwriting?",
        text: "Click on a card to read the typed transcription.",
      });
      return localStorage.setItem("hasPulsed", "true");
    } else {
      return;
    }
  };

  const handleOpen = () => {
    setOpen(true);
    navigate(`/poems/${urlAppend}`, { replace: true });
  };
  const handleClose = () => {
    setOpen(false);
    navigate("/poems", { replace: true });
  };

  const handleNextImage = () => {
    if (currentImage === image && image2) {
      setCurrentImage(image2);
    } else if (currentImage === image2 && image3) {
      setCurrentImage(image3);
    }
  };

  const handlePreviousImage = () => {
    if (currentImage === image2) {
      setCurrentImage(image);
    } else if (currentImage === image3) {
      setCurrentImage(image2);
    }
  };

  React.useEffect(() => {
    if (location.pathname === `/poems/${urlAppend}`) {
      setOpen(true);
    }
  }, [location.pathname, urlAppend]);

  const images = [image, image2, image3, image4, image5].filter(Boolean);

  let divVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 5,
        ease: "easeInOut",
      },
    },
  };

  let cardVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 2,

        ease: "easeInOut",
      },
    },
  };

  const isPulsing = localStorage.getItem("isPulsing");

  return (
    <>
      <div>
        <Box className="flex center row" sx={{ margin: "20px" }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: delay / 1000 }} // Adjust fade-in timing
          >
            <motion.div
              className="poemCard"
              initial={false}
              animate={{
                scale: pulseState ? 1.01 : 1, // Pulse effect
                backgroundColor: pulseState
                  ? theme.palette.button.alternateHoverSemiTrans
                  : theme.palette.background.semiTrans,
              }}
              whileHover={{ scale: 1.03 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 60,
                mass: 0.2,
                bounce: 0.8,

                // duration: 3, // Pulse animation timing
              }}
            >
              <Card
                className="poemCard flex"
                sx={{
                  minWidth: "300px",
                  maxWidth: "400px",
                  backgroundColor: theme.palette.background.semiTrans,
                  color: theme.palette.background.inverse,
                  "&:hover": {
                    backgroundColor: theme.palette.button.alternateHover,
                    color: theme.palette.button.alternateText,
                  },
                  transition:
                    "background-color 0.7s ease-in-out, color 1s ease-in-out",
                }}
                onClick={handleOpen}
              >
                <CardContent sx={{ alignContent: "flexEnd", height: "600px" }}>
                  <img
                    src={image}
                    alt={altText}
                    style={{
                      maxWidth: "350px",
                      height: "auto",
                    }}
                  />
                  <h2 className="alignEnd" style={{ maxWidth: "90%" }}>
                    {title}
                  </h2>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <Modal
            keepMounted
            open={open}
            onClose={handleClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
          >
            <Fade in={open}>
              <Box
                className="flex poemModal"
                sx={{
                  backgroundColor: theme.palette.background.default,
                  padding: "20px",
                  maxWidth: "90vw",
                  maxHeight: "90vh",
                  overflow: "auto",
                  margin: "50px auto",
                  borderRadius: "15px",
                  alignItems: "center",
                  color: theme.palette.background.inverse,
                }}
              >
                <IconButton
                  sx={{
                    opacity: currentImage !== image ? 1 : 0,
                    pointerEvents: currentImage !== image ? "auto" : "none",
                    marginRight: "10px",
                    stroke: "black",
                    color: theme.palette.text.primary,
                    transition: "opacity 0.6s ease-out",
                  }}
                  onClick={handlePreviousImage}
                >
                  <ArrowBackIosNewIcon />
                </IconButton>
                <Box className="flex center" sx={{ flexBasis: "50%" }}>
                  <img
                    src={currentImage}
                    alt={altText}
                    style={{
                      width: "80%",
                      height: "auto",
                      borderRadius: "8px",
                    }}
                  />
                </Box>
                <IconButton
                  sx={{
                    opacity: currentImage !== images[images.length - 1] ? 1 : 0,
                    pointerEvents:
                      currentImage !== images[images.length - 1]
                        ? "auto"
                        : "none",
                    // marginLeft: "-150px",
                    stroke: "black",
                    color: theme.palette.text.primary,
                    transition: "opacity 0.6s ease-out",
                  }}
                  onClick={handleNextImage}
                >
                  <ArrowForwardIosIcon />
                </IconButton>
                <Box
                  sx={{
                    flexBasis: "50%",
                    paddingLeft: "20px",
                    alignSelf: "flex-start",
                    textAlign: "start",
                  }}
                >
                  <Typography
                    variant="h4"
                    id="keep-mounted-modal-title"
                    gutterBottom
                  >
                    {title}
                    <span>
                      <Typography variant="body1">{author}</Typography>
                    </span>
                  </Typography>
                  <Typography
                    variant="body1"
                    id="keep-mounted-modal-description"
                  >
                    {transcription.split("\n").map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </Typography>
                </Box>
              </Box>
            </Fade>
          </Modal>
        </Box>
      </div>
    </>
  );
}
