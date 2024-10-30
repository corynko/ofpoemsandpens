import * as React from "react";
import { useTheme } from "@emotion/react";
import { Box, Card, Modal } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useSpring, animated } from "@react-spring/web";
import PropTypes from "prop-types";
import { delay, motion, stagger } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

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

export default function InkCard({
  title,
  description,
  image,
  author,
  urlAppend,
}) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  //   const themeMode = theme.palette.mode;

  const handleOpen = () => {
    setOpen(true);
    navigate(`/ink/${urlAppend}`, { replace: true });
  };
  const handleClose = () => {
    setOpen(false);
    navigate("/ink", { replace: true });
  };

  React.useEffect(() => {
    if (location.pathname === `/ink/${urlAppend}`) {
      setOpen(true);
    }
  }, [location.pathname, urlAppend]);

  let divVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        // duration: 1,
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
            <CardContent sx={{ alignContent: "flexEnd", height: "400px" }}>
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
              flexDirection: "row", // Place image and text side by side
              alignItems: "center",
              justifyContent: "space-between",
              color: theme.palette.background.inverse,
            }}
          >
            <Box sx={{ flexBasis: "50%", paddingRight: "20px" }}>
              <img
                src={image}
                alt={title}
                style={{ width: "80%", height: "auto", borderRadius: "8px" }}
              />
            </Box>
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
                {description.split("\n").map((line, index) => (
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
