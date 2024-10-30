import * as React from "react";
import { useTheme } from "@emotion/react";
import { Box, Card, Modal } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { delay, motion, stagger } from "framer-motion";

import KonPekiSliders from "./konPekiSliders";

const bottle = require("../../../../assets/images/png/ink/kon-peki/kon-peki.jpg?url");

export default function KonPekiReview() {
  const theme = useTheme();

  return (
    <>
      <Box
        className="flex column"
        sx={{
          width: "100vw",
          color: theme.palette.background.inverse,
          transition: "color 0.75s ease-in-out",
        }}
      >
        <Box className="flex column center textCenter">
          <h1>Iroshizuku Kon-Peki</h1>
          <h2>
            a bona fide classic, Kon-Peki maintains its reputation as the king
            of cobalt
          </h2>
        </Box>
        <Box className="flex column textStart alignStart">
          <Box className="flex">
            <img src={bottle} className="reviewBodyImageLeft" />
            <Box className="flex column textStart alignStart">
              <Typography variant="body1" className="reviewBody">
                I am far, far, far from the first to do a review of Kon-Peki,
                the brilliant royal blue from Pilot's esteemed line of
                Iroshizuku inks. I suspect I am also far from the last. Still,
                its reputation - some would even say hype - does little to blunt
                the outstanding performance of this all-time icon, even among
                its equally outstanding siblings.
              </Typography>
              <Typography variant="body1" className="reviewBody">
                So what is it that sets the Iroshizuku line as a whole, and
                Kon-Peki in particular, apart on a playing field perhaps
                over-saturated (no pun intended) with royal blue shades? In my
                eyes, the hallmarks of the Pilot line, and again, Kon-Peki in
                particular, lie in a combination of factors: outstanding
                performance, outstanding color, intriguing qualities, and
                consistent production.
              </Typography>
              <Typography variant="body1" className="reviewBody">
                Let's dive in, covering each of these factors one at a time.
                Pictures included, unless otherwise marked, are my own. Like any
                other ink review, I have done my best to accurately portray the
                colors and qualities as I see them, but as you know, it's
                difficult to translate these elements with 100% accuracy through
                the camera. In an attempt to circumvent these difficulties, I
                will include a few different common fountain-pen-friendly papers
                in a few different types of lighting.
              </Typography>
            </Box>
          </Box>

          <KonPekiSliders />

          <Box className="flex">
            <Box className="flex column textStart alignStart">
              <Typography variant="h4" className="reviewBody">
                Color
              </Typography>
              <Typography variant="body1" className="reviewBody">
                Without a doubt, the color is one of the first things anyone
                notices when they lay eyes on Kon-Peki. Kon-Peki is, I would
                argue, a "royal" blue, though it may trend slightly lighter than
                what one would ordinarily consider a royal depending on the
                paper used and size of the nib. Kon-Peki has moderate shading,
                and a small but noticeable pop of copper sheen under direct
                light. It is altogether eye-catching, electrifying, and
                enticing, yet still also rich in depth, with subtle nuances that
                draw you in.
              </Typography>
              <Typography variant="body1" className="reviewBody">
                Without a doubt, the color is one of the first things anyone
                notices when they lay eyes on Kon-Peki. Kon-Peki is, I would
                argue, a "royal" blue, though it may trend slightly lighter than
                what one would ordinarily consider a royal depending on the
                paper used and size of the nib. Kon-Peki has moderate shading,
                and a small but noticeable pop of copper sheen under direct
                light. It is altogether eye-catching, electrifying, and
                enticing, yet still also rich in depth, with subtle nuances that
                draw you in.
              </Typography>
            </Box>
            <div className="flex column">
              <img src={bottle} className="reviewBodyImageRight" />
              <Typography
                variant="body2"
                className="textCenter flex center reviewBodyImageCaptionRight"
                style={{
                  color: theme.palette.background.inverseGrey,
                  transition: "color 0.75s ease-in-out",
                }}
              >
                cosmo air light paper, pilot custom 823 medium, natural light
              </Typography>
            </div>
          </Box>
        </Box>
      </Box>
    </>
  );
}
