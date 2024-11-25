import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import { Box, Card, Modal, IconButton } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useSpring, animated } from "@react-spring/web";
import PropTypes from "prop-types";
import { delay, motion, stagger } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

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
  author,
  urlAppend,
}) {
  const [open, setOpen] = React.useState(false);
  const [currentImage, setCurrentImage] = useState(image);
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

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
    }
  };

  const handlePreviousImage = () => {
    if (currentImage === image2) {
      setCurrentImage(image);
    }
  };

  React.useEffect(() => {
    if (location.pathname === `/poems/${urlAppend}`) {
      setOpen(true);
    }
  }, [location.pathname, urlAppend]);

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

  return (
    <Box className="flex center row" sx={{ margin: "20px" }}>
      <motion.div initial="initial" animate="animate" variants={divVariants}>
        <motion.div variants={cardVariants}>
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
              cursor: "pointer",
            }}
            onClick={handleOpen}
          >
            <CardContent sx={{ alignContent: "flexEnd", height: "600px" }}>
              <img
                src={image}
                alt={title}
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
            className="flex"
            sx={{
              backgroundColor: theme.palette.background.default,
              padding: "20px",
              maxWidth: "90vw",
              maxHeight: "90vh",
              overflow: "auto",
              margin: "50px auto",
              borderRadius: "15px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              color: theme.palette.background.inverse,
            }}
          >
            <IconButton
              sx={{
                display: image2 ? "block" : "none",
                marginRight: "10px",
                color: theme.palette.text.primary,
              }}
              onClick={handlePreviousImage}
            >
              <ArrowBackIosNewIcon />
            </IconButton>
            <Box sx={{ flexBasis: "50%", paddingRight: "20px" }}>
              <img
                src={currentImage}
                alt={title}
                style={{ width: "80%", height: "auto", borderRadius: "8px" }}
              />
            </Box>
            <IconButton
              sx={{
                display: image2 ? "block" : "none",
                marginLeft: "-50px",
                color: theme.palette.text.primary,
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
              <Typography variant="body1" id="keep-mounted-modal-description">
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
  );
}
