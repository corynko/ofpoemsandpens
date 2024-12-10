import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@emotion/react";

export default function Pens() {
  const theme = useTheme();

  return (
    <>
      <meta name="prerender-status-code" content="404" />
      <Box className="flex main-content column textCenter wrap center">
        <Typography
          style={{ color: theme.palette.background.inverse }}
          variant="h1"
        >
          Oops - we've run out of ink!
        </Typography>
        <Typography
          style={{ color: theme.palette.background.inverse, marginTop: "40px" }}
          variant="h4"
        >
          Click here to return home:
        </Typography>
        <Button
          style={{
            marginTop: "15px",
            height: "auto",
            width: "200px",
            fontSize: "24pt",
          }}
          href="/"
        >
          Help!
        </Button>
      </Box>
    </>
  );
}
