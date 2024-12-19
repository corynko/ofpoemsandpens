import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import { Box, Dialog, IconButton, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import {
  ArrowForwardIosOutlined,
  ArrowBackIosOutlined,
} from "@mui/icons-material";

import RikkaSliders from "./rikkaSliders";

const bottle = require("../../../../assets/images/png/ink/rikka/rikkaBottle.jpg?url");
const detail = require("../../../../assets/images/png/ink/tsuki-yo/tsukiYoDetail.jpg?url");
const shading = require("../../../../assets/images/png/ink/tsuki-yo/tsukiYoShading.jpg?url");
const sheen = require("../../../../assets/images/png/ink/tsuki-yo/tsukiYoSheen.jpg?url");
const swatch = require("../../../../assets/images/png/ink/tsuki-yo/tsukiYoSwatch.jpg?url");
const tomoe1 = require("../../../../assets/images/png/ink/tsuki-yo/tsukiYoTomoe1.jpg?url");
const takasago1 = require("../../../../assets/images/png/ink/tsuki-yo/tsukiYoTakasago2.jpg?url");

export default function RikkaReview() {
  const theme = useTheme();

  const [zoomedImage, setZoomedImage] = useState(null);

  const imageArray = [
    bottle,
    shading,
    sheen,
    takasago1,
    tomoe1,
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
            Iroshizuku Tsuki-Yo
          </Typography>
          <Typography variant="h5" sx={{ marginBottom: "20px" }}>
            one of the more under-appreciated Iroshizukus, Tsuki-Yo is a
            personal favorite for it's enigmatic beauty
          </Typography>
        </Box>
        <Box className="flex column reviewBodyContent textStart alignStart">
          <Box className="flex reviewBodyContent2 center">
            <img src={bottle} className="reviewBodyImageHead" />
            <Box className="flex reviewBodyContent textStart alignStart">
              <Typography variant="body1" className="reviewBody">
                Tsuki-Yo is a beautiful ink. It is, it just is. But, it's
                difficult to stand out when you're being compared to your
                siblings, and that is especially true when your siblings include
                the likes of Kon-Peki, Ku-Jaku, and Yama-Budo. Still, Tsuki-Yo
                deserves a serious look by anyone who enjoys a nice blue, and it
                remains one of my all-time favorite inks.
              </Typography>
              <Typography variant="body1" className="reviewBody">
                Tsuki-Yo, when compared to other blues, trends more towards a
                blue-black, but doesn't quite make it into that category. It
                offers the characteristic buttery-smooth writing experience and
                wet flow of an Iroshizuku ink, and maintains the line's
                consistent craftsmanship and fascinating qualities. It offers a
                slightly faster drying time than its siblings in my experience,
                and is a joy to use.
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
            <RikkaSliders />
          </Box>
          <Box className="flex reviewBodyContent2 center">
            <Box className="flex column reviewTextMobile textStart alignStart">
              <Typography variant="h4" className="reviewTitle">
                Color
              </Typography>
              <Typography variant="body1" className="reviewBody">
                As stated, Tsuki-Yo lies somewhere between a blue and a
                blue-black. To my eye, it's a bit closer to a blue, but contains
                a dark, almost smokey quality that, while beautiful, may turn
                off those who crave brighter inks. Iroshizukus characteristic
                outline is present here, taking on a dark red, almost burgundy,
                quality around lettering.
              </Typography>
              <Typography variant="body1" className="reviewBody">
                Similar to its characteristic outline (which itself is a quality
                of shading), the more traditional shading also comes through
                well on good quality paper, offering a lighter, almost
                translucent quality at the beginning of the stroke, at least in
                my handwriting, darkening to a fully saturated link by the end
                of the stroke. This shading lends the ink a mysterious quality
                that really draws me in - when I write with this ink, I just
                can't stop staring, and *that,* to me, is the mark of a truly
                exciting ink. It's not the brightness of the color, but the
                engrossing quality of an ink that draws me in and keeps my
                barrel inked.
              </Typography>
              <Typography variant="body1" className="reviewBody">
                I go through ink changes often enough that Tsuki-Yo is not
                always in my rotation, simply by virtue of being too excited
                about a new bottle to truly have an "every day" ink. That said,
                Tsuki-Yo is one of maybe two inks that I will *always* reach for
                when I want to change colors and don't have a new bottle to play
                with. I'm simply obsessed with its depth and subtle intricacies.
              </Typography>
            </Box>
            <Box className="flex reviewBodyContent2">
              <div className="flex column">
                <img
                  src={shading}
                  onClick={() => handleImageClick(shading)}
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
                  a quite cozy blue - cosmo air light paper, pilot custom 823
                  medium
                </Typography>
              </div>
            </Box>
          </Box>
          <Box className="flex reviewBodyContent2 center">
            <div className="flex column">
              <img
                src={sheen}
                onClick={() => handleImageClick(sheen)}
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
                characteristic pink sheen - cosmo air light paper, pilot custom
                823 medium
              </Typography>
            </div>
            <Box className="flex column reviewTextMobile textStart alignStart">
              <Typography variant="h4" className="reviewTitle">
                Performance
              </Typography>
              <Typography variant="body1" className="reviewBody">
                If you've already read my review of it's bolder, brighter
                brother, Kon-Peki, this next section may feel a little
                repetitive. In my defense, however, that is only because Pilot
                somehow manages to imbue each of the Iroshizuku inks (as well as
                those of their other lines) with a remarkable consistent
                performance profile. As with Kon-Peki, I have yet to dislike
                Tsuki-Yo's performance in any pen I've put it in, and I've put
                it in more than a couple.
              </Typography>
              <Typography variant="body1" className="reviewBody">
                As before, my love of wet inks places Tsuki-Yo in the "just
                right" category of Goldilocks' fountain pen ink test. A smooth,
                free-flowing ink, I find that it may be the single best match
                for my 823 medium - a famously smooth nib in its own rite - in
                striking the prime balance between lubricated feel without
                diminishing tactile feedback. While I most often write on Cosmo
                Air Light, a semi-coated paper that contains a bit of texture,
                my second-favorite paper in Passepied Cream - a fully coated
                paper that is the single smoothest sheet one can hold. Still,
                even Passepied's glass-like surface, Tsuki-Yo does not feel as
                though it robs your hand of any measure of control over each
                stroke you lay down.
              </Typography>
              <Typography variant="body1" className="reviewBody">
                While the flow is maybe *slightly* less wet than Kon-Peki or
                Ama-Iro, it's not enough so that I would reduce my rating below
                'very wet.' That said, because it is darker than either of those
                inks, it does pose just a touch more of a challenge when
                cleaning out a pen, as any darker ink does. It is not, however,
                to a problematic extent (looking at you, Bay State Blue), and
                merely requires a few extra flushes to get it all out. I also
                find, when compared to its siblings, that Tsuki-Yo seems to
                maintain slightly faster dry times: a quality I, as a lefty,
                crave in an ink, especially on the extremely slow-absorbing
                papers that I am wont to use.
              </Typography>
            </Box>
          </Box>
          <Box className="flex reviewBodyContent2 center">
            <Box className="flex column reviewTextMobile textStart alignStart">
              <Typography variant="h4" className="reviewTitle">
                Other Comments
              </Typography>
              <Typography variant="body1" className="reviewBody">
                As I mentioned in my Kon-Peki review, and will repeat for
                reviews of other inks in the line, Iroshizuku inks come packaged
                in a lovely little box, housing a beautiful and iconic bottle.
                This understated and elegant presentation is synonymous with the
                Japanese pen houses - not to say Western houses lack such
                restraint, but when compared to, say, Ferris Wheel Press,
                they're very much different genres. The Iroshizuku line contains
                a characteristic divot, referred to as an inkwell, in the
                bottom-center of the bottle. While not particularly useful as an
                inkwell until you start to drain the bottle, it does ensure you
                stand a fighting chance at utilizing all of the ink you pay for.
              </Typography>
              <Typography variant="body1" className="reviewBody">
                Like the other inks in this line, Tsuki-Yo comes in on the
                higher end of ink prices. At time of writing, you can expect to
                spend{" "}
                <a href="https://vanness1938.com/products/iroshizuku-tsuki-yo-ink?_pos=1&_psq=tsuki+yo&_ss=e&_v=1.0">
                  ~$23.75 for 50mL's,
                </a>{" "}
                and it tends to be closer to $30 for the same bottle, giving it
                a per mL price of $0.47-0.60. While this cannot be said to be
                cheap, I consider it a good value - it is widely available from
                most retailers (including my personal favorite, Van Ness), and
                50mL's is not a small bottle. You'll still get plenty of pages
                out of a single order, and you'll love every moment of it. I
                have yet to kill my first bottle of any Iroshizuku inks, though,
                to be fair, that is because I own more than 10 among the 50
                other bottles in my collection.
              </Typography>
              <Typography variant="body1" className="reviewBody">
                Like all Iroshizuku's, Tsuki-Yo exhibits no feathering, no
                bleed-through, and only minimal ghosting on most papers. While
                my two favorite papers perform predictably perfectly with this
                ink, I have also had perfectly satisfactory results on legal
                pads and ordinary copy paper - even post-it notes, which I find
                to feather worse than most any type of paper, barely show this
                nasty habit when accepting Tsuki-Yo. A caveat to all Iroshizuku
                inks is that they exhibit *no* water resistance, and will smear
                readily even with small amounts of moisture applied to the page.
                Serial highlighters, beware!
              </Typography>
            </Box>
            <Box className="flex">
              <div className="flex column">
                <img
                  src={takasago1}
                  onClick={() => handleImageClick(takasago1)}
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
                  takasago premium bank paper, waterman carène (m)
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
                A lovely companion year-round, but especially fitting for
                colder, rainy/winter months, Tsuki-Yo is a lovely ink containing
                subtle mysteries which serve only to deepen its appeal.
                Understated enough for business use, but engrossing enough for
                personal use, Tsuki-Yo is a mainstay in my rotation, and has
                drawn compliments from letter recipients and managers alike.
              </Typography>
              <Typography variant="body1" className="reviewBody">
                While lacking the water-fastness that may lend itself use for
                more official matters, Tsuki-Yo performs flawlessly in most
                every other regard. Perfectly saturated to leave a dark line
                without negating its shading, Tsuki-Yo maintains Pilot's
                commitment to high quality, consistent writing experiences, and
                pairs perfectly with its pen offerings.
              </Typography>
              <Typography variant="body1" className="reviewBody">
                A good value for the money, Iroshizuku is available from most
                any ink retailer on the market. While I recommend buying from
                Van Ness, always support your favorite vendor and try to buy
                local when you can! The final word is this: if you need a
                consistent, versatile, and absorbing blue, dark blue, or
                blue-black, Tsuki-Yo is sure to please. While it (like all
                fountain pen inks) is best used on a high quality paper, it
                performs well enough to be used on any surface you have
                available, and you'll have a great time no matter what you write
                on with it.
              </Typography>
            </Box>
          </Box>

          <Box className="flex around reviewBodyContent2 reviewBottom">
            <div className="flex reviewBottomImages column">
              <img
                src={tomoe1}
                onClick={() => handleImageClick(tomoe1)}
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
                tomoe river 's' paper, waterman carène (m)
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
                className="textCenter flex center "
                style={{
                  color: theme.palette.background.inverseGrey,
                  transition: "color 0.75s ease-in-out",
                }}
              >
                wearingeul swatch paper, cotton swab
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
                superior shading - cosmo air light paper, pilot custom 823 (m)
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
