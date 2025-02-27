import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import { Box, Dialog, IconButton, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import {
  ArrowForwardIosOutlined,
  ArrowBackIosOutlined,
} from "@mui/icons-material";

import KonPekiSliders from "./konPekiSliders";

const bottle = require("../../../../assets/images/png/ink/kon-peki/konPekiHeader.jpg?url");
// const shading = require("../../../../assets/images/png/ink/kon-peki/konPekiShading1.jpg?url");
const shading2 = require("../../../../assets/images/png/ink/kon-peki/konPekiShading2.jpg?url");
const sheen2 = require("../../../../assets/images/png/ink/kon-peki/konPekiSheen2.jpg?url");
const tomoe1 = require("../../../../assets/images/png/ink/kon-peki/konPekiTomoe1.jpg?url");
const takasago1 = require("../../../../assets/images/png/ink/kon-peki/konPekiTakasago1.jpg?url");
const swatch = require("../../../../assets/images/png/ink/kon-peki/konPekiSwatch.jpg?url");
const detail = require("../../../../assets/images/png/ink/kon-peki/konPekiDetail.jpg?url");

export default function KonPekiReview() {
  const theme = useTheme();

  const [zoomedImage, setZoomedImage] = useState(null);

  const imageArray = [
    bottle,
    shading2,
    sheen2,
    tomoe1,
    takasago1,
    swatch,
    detail,
  ];

  const [currentImage, setCurrentImage] = useState(imageArray[0]);

  const handleImageClick = (src) => {
    setCurrentImage(src);
    setZoomedImage(src);
  };

  const handleClose = () => {
    setZoomedImage(null);
  };

  const handleNextImage = () => {
    setCurrentImage((currentImage) => {
      const currentIndex = imageArray.indexOf(currentImage);
      const nextIndex = (currentIndex + 1) % imageArray.length;
      const nextImage = imageArray[nextIndex];
      setZoomedImage(nextImage);
      return nextImage;
    });
  };

  const handlePreviousImage = () => {
    setCurrentImage((currentImage) => {
      const currentIndex = imageArray.indexOf(currentImage);
      const prevIndex =
        (currentIndex - 1 + imageArray.length) % imageArray.length;
      const prevImage = imageArray[prevIndex];
      setZoomedImage(prevImage);
      return prevImage;
    });
  };

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
          <Typography variant="h2" sx={{ margin: "20px" }}>
            Iroshizuku Kon-Peki
          </Typography>
          <Typography variant="h5" sx={{ marginBottom: "20px" }}>
            a bona fide classic, Kon-Peki maintains its reputation as the king
            of cobalt
          </Typography>
        </Box>
        <Box className="flex reviewBodyContent textStart alignStart">
          <Box className="flex reviewBodyContent2 center">
            <img src={bottle} className="reviewBodyImageHead" />
            <Box className="flex reviewBodyContent textStart alignStart">
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
          <Box className="flex column between">
            <KonPekiSliders />
          </Box>
          <Box className="flex reviewBodyContent2 center">
            <Box className="flex column reviewTextMobile textStart alignStart">
              <Typography variant="h4" className="reviewTitle">
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
                Kon-Peki, like its siblings in the Iroshizuku line, contains a
                signature outline given to lettering on high quality papers - in
                this case, it's a reddish-pink shade, and contains a nice,
                hidden surprise, as this is also where its small amount of
                copper sheen tends to show up best. Viewed in the light, this
                adds to its engrossing quality, and makes it a real stand out in
                the world of beautiful, but not ostentatious, inks. While there
                is a place for the shimmers and sheen monsters of the ink world,
                I prefer an ink that reveals its beauty in more subtle ways, and
                Kon-Peki absolutely blows me away in that regard.
              </Typography>
              <Typography variant="body1" className="reviewBody">
                To my eye, Kon-Peki strikes the perfect balance between a casual
                ink and a fun ink. Most blues, I find, are suitable enough for
                use in a business environment, and I often have one of my Pilots
                inked up with it for use in the office. However, it is also
                bright enough, and has enough of that beautiful shading on
                letter outlines, to be a thrilling ink to write with in its own
                right. Given my - very on record - love of blue inks, this ink
                is one that is brilliantly saturated, and a true favorite - a
                mainstay in my rotation.
              </Typography>
            </Box>
            <Box className="flex reviewBodyContent2">
              <div className="flex column">
                <img
                  src={shading2}
                  onClick={() => handleImageClick(shading2)}
                  style={{ cursor: "zoom-in" }}
                  className="reviewBodyImageRight"
                />
                <Typography
                  variant="body2"
                  className="textCenter flex center reviewBodyImageCaptionRight"
                  style={{
                    color: theme.palette.background.inverseGrey,
                    transition: "color 0.75s ease-in-out",
                  }}
                >
                  a blue-lover's blue, pilot custom 912 waverly, cosmo air light
                  paper
                </Typography>
              </div>
            </Box>
          </Box>
          <Box className="flex reviewBodyContent2 center">
            <div className="flex column">
              <img
                src={sheen2}
                onClick={() => handleImageClick(sheen2)}
                style={{ cursor: "zoom-in" }}
                className="reviewBodyImageLeft"
              />
              <Typography
                variant="body2"
                className="textCenter flex center reviewBodyImageCaptionLeft"
                style={{
                  color: theme.palette.background.inverseGrey,
                  transition: "color 0.75s ease-in-out",
                }}
              >
                small bit of pink sheen in direct light, pilot custom 912
                waverly, cosmo air light paper
              </Typography>
            </div>
            <Box className="flex column reviewTextMobile textStart alignStart">
              <Typography variant="h4" className="reviewTitle">
                Performance
              </Typography>
              <Typography variant="body1" className="reviewBody">
                The performance of an ink is the one quality that can make or
                break it for me single-handedly - if a color is dull or not
                quite to my liking, I'll overlook it if for the sake of a
                buttery smooth writing experience, and vise versa. Fortunately,
                this is not a balance I've ever had to consider when working
                with an Iroshizuku ink of any variety. All of Pilot's inks, even
                their "name-brand" line (i.e. blue, blue-black, black), the
                Namiki line, and of course, Iroshizuku, deliver truly superb
                performance in any pen I've put them in, from my 823's to my
                Monteverde Invincia, with it's absolute nail of a Jowo nib.
              </Typography>
              <Typography variant="body1" className="reviewBody">
                The flow, for me, is perfect, though it should be stated that I
                very much prefer wet-writing inks, and this is certainly one of
                those. I've seen many other reviews refer to certain inks as
                "gushers," and the fact that I've never felt that way about an
                ink makes me suspect that that characterization, for me, just
                means an ink that flows as it should. If there is such a thing
                as a gusher, I would hazard a guess that this is one.
              </Typography>
              <Typography variant="body1" className="reviewBody">
                I prefer Japanese medium nibs, and Kon-Peki lays down a line
                that with many other inks would be more tantamount to an
                American medium. Still, the ink's proclivity to laying down
                plenty of ink lends itself well to showing off its fascinating
                and lovely qualities, especially the beautiful outline that
                develops around letters and the small pop of sheen visible on
                certain papers, like Cosmo Air Light and Tomoe River. If you for
                some reason prefer dry inks, or just have an overwhelmingly wet
                nib (i.e. a modern Pelikan), this may be one to steer clear of.
                For everyone else, this ink behaves flawlessly.
              </Typography>
            </Box>
          </Box>
          <Box className="flex reviewBodyContent2 center">
            <Box className="flex column reviewTextMobile textStart alignStart">
              <Typography variant="h4" className="reviewTitle">
                Other Comments
              </Typography>
              <Typography variant="body1" className="reviewBody">
                Iroshizuku inks come packaged in a lovely little box, housing a
                beautiful and iconic bottle. This understated and elegant
                presentation is synonymous with the Japanese pen houses - not to
                say Western houses lack such restraint, but when compared to,
                say, Ferris Wheel Press, they're very much different genres. The
                Iroshizuku line contains a characteristic divot, referred to as
                an inkwell, in the bottom-center of the bottle. While not
                particularly useful as an inkwell until you start to drain the
                bottle, it does ensure you stand a fighting chance at utilizing
                all of the ink you pay for.
              </Typography>
              <Typography variant="body1" className="reviewBody">
                Getting what you pay for is a good thing with these inks, since
                they do come in a bit on the spendy side, at least compared to,
                say, Diamine. At{" "}
                <a href="https://vanness1938.com/products/iroshizuku-kon-peki-ink?_pos=2&_fid=c42a52539&_ss=c">
                  $23.75 for 50mL's
                </a>{" "}
                at time of writing (typically $30), you're often looking at more
                than $0.50/mL of ink, which is not exactly cheap. And, given
                it's stated proclivity for laying down a thick line, it will go
                quicker than many others. Still, I consider it a good value - it
                is widely available from most retailers (including my personal
                favorite, Van Ness), and 50mL's is not a small bottle. You'll
                still get plenty of pages out of a single order, and you'll love
                every moment of it.
              </Typography>
              <Typography variant="body1" className="reviewBody">
                Like all Iroshizuku's, Kon-Peki exhibits no feathering, no
                bleed-through, and only minimal ghosting on most papers. While
                my two favorite papers, Cosmo Air Light and Passepied Cream,
                perform predictably perfectly with this ink, I have also had
                perfectly satisfactory results on legal pads and ordinary copy
                paper - so, in those fraught moments when you're writing on
                someone else's pad, you won't have to also use their Bic.
              </Typography>
            </Box>
            <Box className="flex">
              <div className="flex column">
                <img
                  src={tomoe1}
                  onClick={() => handleImageClick(tomoe1)}
                  style={{ cursor: "zoom-in" }}
                  className="reviewBodyImageRight"
                />
                <Typography
                  variant="body2"
                  className="textCenter flex center reviewBodyImageCaptionRight"
                  style={{
                    color: theme.palette.background.inverseGrey,
                    transition: "color 0.75s ease-in-out",
                  }}
                >
                  tomoe river 's' paper, pilot custom 912 waverly
                </Typography>
              </div>
            </Box>
          </Box>
          <Box className="flex reviewInConclusion column">
            <Box className="flex column alignCenter">
              <Typography variant="h4" className="reviewTitle">
                In Conclusion
              </Typography>
            </Box>
            <Box className="flex column textStart alignStart">
              <Typography variant="body1" className="reviewBody">
                Kon-Peki is a wonderful ink capable of brightening even the
                dimmest of days. It offers a superb writing experience with any
                pen it's put in, and is a perfect companion for those who like a
                wetter flow and brighter blue. This well-lubricated ink, in
                addition to facilitating its wet flow, also lends itself to an
                easy clean - in my 823's, it takes only a few full fills and
                purges, along with my traditional flush with an ammonia-based
                pen flush, to get the water running all the way clear.
              </Typography>
              <Typography variant="body1" className="reviewBody">
                While quite saturated, Kon-Peki still exhibits high shading,
                leading to shading variations fit for sketching, coloring, and
                writing in equal measure. A small pop of sheen under direct
                light lends an engrossing touch to it's naturally captivating
                hue. Iroshizuku inks as a whole offer no water resistance, and
                so should not be used in situations where water exposure is
                possible.
              </Typography>
              <Typography variant="body1" className="reviewBody">
                A good value for the money, Iroshizuku is available from most
                any ink retailer on the market. While I recommend buying from
                Van Ness, always support your favorite vendor and try to buy
                local when you can! The final word is this: you can't go wrong
                with any of the Iroshizuku line, and I'm certain I will be
                publishing more reviews to that effect. For those who love a
                nice, electric blue, you will be well-suited with a barrel full
                of Kon-Peki.
              </Typography>
            </Box>
          </Box>

          <Box className="flex around reviewBodyContent2 reviewBottom">
            <div className="flex reviewBottomImages column">
              <img
                src={takasago1}
                onClick={() => handleImageClick(takasago1)}
                style={{ cursor: "zoom-in" }}
                className="reviewMorePictures"
              />
              <Typography
                variant="body2"
                className="textCenter flex center"
                style={{
                  color: theme.palette.background.inverseGrey,
                  transition: "color 0.75s ease-in-out",
                }}
              >
                takasago premium bank paper, pilot custom 912 waverly
              </Typography>
            </div>
            <div className="flex alignCenter reviewBottomImages column">
              <img
                src={swatch}
                onClick={() => handleImageClick(swatch)}
                style={{ cursor: "zoom-in" }}
                className="reviewMorePicturesSwatch"
              />
              <Typography
                variant="body2"
                className="textCenter flex center"
                style={{
                  color: theme.palette.background.inverseGrey,
                  transition: "color 0.75s ease-in-out",
                }}
              >
                wearingeul color swatch paper, cotton swab
              </Typography>
            </div>
            <div className="flex reviewBottomImages column">
              <img
                src={detail}
                onClick={() => handleImageClick(detail)}
                style={{ cursor: "zoom-in" }}
                className="reviewMorePictures"
              />
              <Typography
                variant="body2"
                className="textCenter flex center"
                style={{
                  color: theme.palette.background.inverseGrey,
                  transition: "color 0.75s ease-in-out",
                }}
              >
                pilot custom 912 waverly, cosmo air light paper
              </Typography>
            </div>
          </Box>
        </Box>
      </Box>

      <Dialog
        open={Boolean(zoomedImage)}
        onClose={handleClose}
        className="flex center"
        style={{ cursor: "zoom-out", maxWidth: "100vw" }}
        fullWidth
        maxWidth="xl"
      >
        <Container className="flex center">
          <IconButton
            sx={{
              opacity: imageArray.indexOf(currentImage) > 0 ? 1 : 0.3,
              pointerEvents:
                imageArray.indexOf(currentImage) > 0 ? "auto" : "none",
              marginRight: "-50px",
              color: "#ffffff",
            }}
            onClick={handlePreviousImage}
          >
            <ArrowBackIosOutlined />
          </IconButton>
          <img
            src={zoomedImage || ""}
            alt="Zoomed"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
          <IconButton
            sx={{
              opacity:
                imageArray.indexOf(currentImage) < imageArray.length - 1
                  ? 1
                  : 0.3,
              pointerEvents:
                imageArray.indexOf(currentImage) < imageArray.length - 1
                  ? "auto"
                  : "none",
              marginLeft: "-50px",
              color: "#ffffff",
            }}
            onClick={handleNextImage}
          >
            <ArrowForwardIosOutlined />
          </IconButton>
        </Container>
      </Dialog>
    </>
  );
}
