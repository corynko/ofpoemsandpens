import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import { Box, Dialog, IconButton, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import {
  ArrowForwardIosOutlined,
  ArrowBackIosOutlined,
} from "@mui/icons-material";

import HazelnutSliders from "./hazelnutSliders";

const bottle = require("../../../../assets/images/png/ink/hazelnut/hazelnutBottle.jpg?url");
const shading1 = require("../../../../assets/images/png/ink/hazelnut/hazelnutShading1.jpg?url");
const shading2 = require("../../../../assets/images/png/ink/hazelnut/hazelnutShading2.jpg?url");
const shading3 = require("../../../../assets/images/png/ink/hazelnut/hazelnutShading3.jpg?url");
const takasago1 = require("../../../../assets/images/png/ink/hazelnut/hazelnutTakasago1.jpg?url");
const swatch = require("../../../../assets/images/png/ink/hazelnut/hazelnutSwatch.jpg?url");
const tomoe1 = require("../../../../assets/images/png/ink/hazelnut/hazelnutTomoe1.jpg?url");

export default function HazelnutReview() {
  const theme = useTheme();

  const [zoomedImage, setZoomedImage] = useState(null);

  const imageArray = [
    bottle,
    shading2,
    tomoe1,
    shading3,
    takasago1,
    swatch,
    shading1,
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
            Graf von Faber Castell Hazelnut Brown
          </Typography>
          <Typography variant="h5" sx={{ marginBottom: "20px" }}>
            a simple ink that becomes quite absorbing, though may not be worth
            the price
          </Typography>
        </Box>
        <Box className="flex reviewBodyContent textStart alignStart">
          <Box className="flex reviewBodyContent2 center">
            <img src={bottle} className="reviewBodyImageHead" />
            <Box className="flex reviewBodyContent textStart alignStart">
              <Typography variant="body1" className="reviewBody">
                Ah, brown inks. Truth told, I very rarely use brown ink, and
                even more rarely can be said to be 'in the mood' to do so.
                Recently, redditor /u/lost_demonn_ posted in the /r/fountainpens
                subreddit{" "}
                <a
                  href="https://www.reddit.com/r/fountainpens/comments/1gsu9fy/finished_my_journal_today_started_it_a_year_ago/"
                  target="_blank"
                >
                  a video of her newly completed journal
                </a>{" "}
                - a brown leather cover, sitting on a deep wood writing desk,
                filled to the brim in nothing but Pelikan's brilliant brown ink
                - and god damn, it looked great. It inspired me to pull this
                bottle back out of the closet and give the color another try.
              </Typography>
              <Typography variant="body1" className="reviewBody">
                I too have an affinity for old, wood-lined libraries full of
                leather-bound books. I drink amber whiskey and cognac. When I
                smoke, I smoke mahogany-colored tobacco out of a 100 year-old
                Kaywoodie briar pipe. The idea of translating that aesthetic to
                the page is incredibly appealing to me. So why do I still find
                myself completely unenamoured with, if not all browns, then at
                least this ink?
              </Typography>
              <Typography variant="body1" className="reviewBody">
                Let's dive in, and explore this realization together. Who knows,
                my dissatisfaction may help you find your new favorite ink!
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
            <HazelnutSliders />
          </Box>
          <Box className="flex reviewBodyContent2 center">
            <Box className="flex column reviewTextMobile textStart alignStart">
              <Typography variant="h4" className="reviewTitle">
                Color
              </Typography>
              <Typography variant="body1" className="reviewBody">
                I struggle to enunciate the unique qualities of the color brown
                in the same way as I see shades of blue, so please bare with me.
                That said, as far as brown goes, this one is beautiful. It's a
                deep cocoa on the mid-stroke, beginning in a slightly lighter
                shade reminiscent of whiskey and ending a touch darker, but not
                quite reaching the almost-black territory a super-dark brown can
                tread upon.
              </Typography>
              <Typography variant="body1" className="reviewBody">
                The shading of this ink, though subtle compared to most of my
                other mainstays, is quite lovely. It adds just enough variance
                to a page to not feel like you're writing with a boring color;
                and, I imagine, for those who love brown ink, it could be what
                tips the scale for you. There is no sheen, at least to my eye,
                so the shading is the one "pop" quality that you are afforded by
                Hazelnut Brown. If you're looking for a warm and inviting color
                that is appropriate for the workplace, without creating any
                distractions or questions to field, this would be a great
                choice.
              </Typography>
              <Typography variant="body1" className="reviewBody">
                Hazelnut Brown is one of two brown inks in GvFC's collection,
                the other being Cognac Brown. As may be expected from the
                liquor, Cognac Brown is quite a bit lighter, and trends more
                toward an amber or orange than a true brown. Of the two, this is
                definitely the one I think would be more usable on a day to day
                basis for the vast majority of writers.
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
                  just enough shading to stay engrossing - pilot custom 823
                  medium, cosmo air light paper
                </Typography>
              </div>
            </Box>
          </Box>
          <Box className="flex reviewBodyContent2 center">
            <div className="flex column">
              <img
                src={tomoe1}
                onClick={() => handleImageClick(tomoe1)}
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
                pilot custom 823 medium, tomoe river 's' paper
              </Typography>
            </div>
            <Box className="flex column reviewTextMobile textStart alignStart">
              <Typography variant="h4" className="reviewTitle">
                Performance
              </Typography>
              <Typography variant="body1" className="reviewBody">
                While this hasn't necessarily sold me on brown ink as a concept,
                Hazelnut Brown is an exceptionally well-performing ink - and
                frankly, for the price, it better be. Exceptional performance is
                why I maintain Iroshizuku's high price point as being absolutely
                worth it, though it helps that I also adore that line's colors.
                Had I fallen head over heels for Hazelnut, that would likely be
                the case here as well.
              </Typography>
              <Typography variant="body1" className="reviewBody">
                This is quite a wet flow, and in truth, may be slightly
                underrated in the slider above. I think it fits somewhere in
                between the 'moderately wet' it has now and 'very wet,' and this
                may change the more I use it. Still, out of my 823 medium, it
                writes a lovely bold line and puts down plenty of ink, with no
                hard stops or uncomfortable feedback.
              </Typography>
              <Typography variant="body1" className="reviewBody">
                Additionally, for a wet ink, it still dries rather quickly, and
                without much fuss. As a man searching for the perfect, yet oft
                unrealized combination of a lefty-friendly dry time *and* a wet
                flow, this is very close to my ideal for performance. It is also
                a deeply saturated ink, and I had no fear during writing that it
                would dry too light, or get in its own way as far as legibility
                is concerned, beyond, you know, my handwriting.
              </Typography>
            </Box>
          </Box>
          <Box className="flex reviewBodyContent2 center">
            <Box className="flex column reviewTextMobile textStart alignStart">
              <Typography variant="h4" className="reviewTitle">
                Other Comments
              </Typography>
              <Typography variant="body1" className="reviewBody">
                The inks from GvFC are delivered in a beautiful thick-cardboard
                box, and have one of the most beautiful bottles of any ink in my
                collection. Ridged glass, a wide-but-short footprint, and a wide
                neck add to both its stately appearance as well as its ease of
                filling. There is no sort of inkwell built in to ensure every
                drop is available for use, however. This is a concern that is
                not at all a concern for me, as I rarely reach the very bottom
                of a bottle, but could be an important factor for you as a
                consumer.
              </Typography>
              <Typography variant="body1" className="reviewBody">
                But now, like any thanksgiving about to turn south, let's talk
                about how much money you're spending. At time of writing, you're
                looking at{" "}
                <a href="https://vanness1938.com/products/iroshizuku-kon-peki-ink?_pos=2&_fid=c42a52539&_ss=c">
                  $35 for 75 mL's,
                </a>{" "}
                giving you a price per mL of $0.47, which is not exactly cheap.
                As it is also a wet, well-lubricated ink, you'll also run
                through it more quickly than a dry writers. The price is
                justified by 75 mL's being a massive amount of ink, and its
                performance really is quite superb. But, in a world where an
                80mL bottle of Diamine can cost just $6-12, it's an expense that
                gets a bit hard to justify. You'll still get plenty of pages out
                of a single order, and you'll love every moment of it. Since I
                named the Iroshizuku's as good-not-great value for money, I'll
                only knock this one down one notch, since the color isn't quite
                my thing, and it lacks dramatic shading or any particularly
                interesting sheening.
              </Typography>
              <Typography variant="body1" className="reviewBody">
                I have yet to use Hazelnut Brown extensively on non-fountain
                pen-friendly papers, but its complete lack of feathering and
                bleed-through makes me think it wouldn't have many issues on
                them. GvFC inks bill themselves as "water resistant," meaning
                while the ink may run when exposed to water, the lines will
                remain visible. Personally, I wouldn't describe that as archival
                quality, but it definitely offer enough confidence to make it
                useable in context where some degree of permanence is required.
              </Typography>
            </Box>
            <Box className="flex">
              <div className="flex column">
                <img
                  src={shading3}
                  onClick={() => handleImageClick(shading3)}
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
                  cosmo air light paper, pilot custom 823 medium
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
                Like I said, I have yet to be completely sold on brown inks. I
                have a bottle of Diamine's Ancient Copper on the way, and maybe
                that will make the difference. However, I may just not like
                brown inks - I think this is the case, as this is quite a
                gorgeous ink that behaves exactly how I want an ink to behave.
                If this one isn't scratching the itch, can there really be one
                that does?
              </Typography>
              <Typography variant="body1" className="reviewBody">
                Hazelnut Brown is a well-saturated ink with a nice flow, low but
                still interesting amount of shading, no sheen, and no shimmer.
                As such, it could probably be described as a 'boring' ink, but I
                think that might be an unfair characterization. It is warm, cozy
                - reminiscent of tree trunks and bookshelves. It will suck you
                in despite its lack of the more 'exciting' fountain pen ink
                qualities, but I suspect that is the point. This is a no-frills
                ink, for people who find beauty in simplicity.
              </Typography>
              <Typography variant="body1" className="reviewBody">
                GvFC inks are not available everywhere, but are consistently
                priced wherever they are found. Their lineup features quite a
                large number of colors for a luxury ink brand, so even if, like
                me, brown is not your color, there is probably one that you will
                enjoy. And, if a well-performing, smooth, fast drying if
                expensive ink is what you need, I do generally recommend this
                line.
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
                takasago premium bank paper, pilot custom 823 medium
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
                src={shading1}
                onClick={() => handleImageClick(shading1)}
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
                pilot custom 823 medium, cosmo air light paper
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
