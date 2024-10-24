import * as React from "react";
import { useTheme } from "@emotion/react";
import { Box, Card, Modal } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSpring, animated } from "@react-spring/web";
import PropTypes from "prop-types";

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

export default function PoemCard({ title, transcription, image, author }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();
  //   const themeMode = theme.palette.mode;
  return (
    <Box className="flex center row" sx={{ margin: "20px" }}>
      <Card
        className="poemCard flex"
        sx={{
          minWidth: "300px",
          backgroundColor: theme.palette.background.semiTrans,
          color: theme.palette.background.inverse,
          "&:hover": {
            backgroundColor: theme.palette.button.alternateHover,
            color: theme.palette.button.alternateText,
          },
          transition: "background-color 0.7s ease-in-out, color 1s ease-in-out",
          cursor: "pointer",
        }}
        onClick={handleOpen}
      >
        <CardContent sx={{ alignContent: "flexEnd" }}>
          <img
            src={image}
            alt={title}
            style={{ maxWidth: "300px", height: "auto" }}
          />
          <h2 className="alignEnd">{title}</h2>
        </CardContent>
      </Card>
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
