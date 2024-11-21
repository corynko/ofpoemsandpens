import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

export default function Paper() {
  const theme = useTheme();

  return (
    <>
      <Box className="flex wrap center">
        <Typography
          style={{ color: theme.palette.background.inverse }}
          variant="h1"
        >
          Coming Soon!
        </Typography>
      </Box>
    </>
  );
}
