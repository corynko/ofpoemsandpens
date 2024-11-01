import { useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import backgroundImageLight from "../../assets/images/png/paperBackgroundLight.png";
import backgroundImageDark from "../../assets/images/png/paperBackgroundDark.png";

const BackgroundImage = () => {
  const theme = useTheme();
  const [currentImage, setCurrentImage] = useState(
    theme.palette.mode === "light" ? backgroundImageLight : backgroundImageDark
  );
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);

    const timeout = setTimeout(() => {
      setCurrentImage(
        theme.palette.mode === "light"
          ? backgroundImageLight
          : backgroundImageDark
      );
      setFade(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [theme.palette.mode]);

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "fixed",
        zIndex: -1,
      }}
    >
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
          zIndex: -1,
          opacity: fade ? 0 : 1,
          filter: "saturate(0%)",
          transitionDelay: "3s",
          transition: "opacity 0.5s linear",
        }}
      />

      <Box
        sx={{
          backgroundImage: `url(${
            theme.palette.mode === "light"
              ? backgroundImageLight
              : backgroundImageDark
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
          zIndex: -1,
          filter: "saturate(0%)",
          opacity: fade ? 1 : 0,

          transition: "opacity 0.5s linear",
          transitionDelay: "3s",
        }}
      />
    </Box>
  );
};

export default BackgroundImage;
