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
    // Trigger fade-in for the new image
    setFade(true);

    // Update the background image after the fade transition duration
    const timeout = setTimeout(() => {
      setCurrentImage(
        theme.palette.mode === "light"
          ? backgroundImageLight
          : backgroundImageDark
      );
      setFade(false); // Start fading in the new image
    }, 500); // Should match the transition duration (0.5s)

    return () => clearTimeout(timeout);
  }, [theme.palette.mode]);

  return (
    <Box
      sx={{
        // position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden", // Ensure any overflow is hidden
        position: "fixed",
        zIndex: -1,
      }}
    >
      {/* Layer for the previous image */}
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
          transition: "opacity 0.5s linear", // Smooth fade-out effect
        }}
      />
      {/* Layer for the new image */}
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

          transition: "opacity 0.5s linear", // Smooth fade-in effect
          transitionDelay: "3s",
        }}
      />
    </Box>
  );
};

export default BackgroundImage;
