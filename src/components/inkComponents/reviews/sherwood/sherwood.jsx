import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import { Box, Dialog, IconButton, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import {
  ArrowForwardIosOutlined,
  ArrowBackIosOutlined,
} from "@mui/icons-material";

import SherwoodSliders from "./sherwoodSliders";

const bottle = require("../../../../assets/images/png/ink/sherwood/sherwoodHeader.jpg?url");
const swatch = require("../../../../assets/images/png/ink/sherwood/sherwoodSwatch.jpg?url");
const shading = require("../../../../assets/images/png/ink/sherwood/sherwoodShading.jpg?url");
const sheen = require("../../../../assets/images/png/ink/sherwood/sherwoodSheen.jpg?url");
const tomoe1 = require("../../../../assets/images/png/ink/sherwood/sherwoodTomoe1.jpg?url");
const tomoe2 = require("../../../../assets/images/png/ink/sherwood/sherwoodTomoe2.jpg?url");
const takasago = require("../../../../assets/images/png/ink/sherwood/sherwoodTakasago1.jpg?url");

export default function SherwoodReview() {
  const theme = useTheme();

  const [zoomedImage, setZoomedImage] = useState(null);

  const imageArray = [bottle, shading, sheen, tomoe1, takasago, swatch, tomoe2];

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
            Diamine Sherwood Green
          </Typography>
          <Typography variant="h5" sx={{ marginBottom: "20px" }}>
            a forest green - actually, *the* forest green - for lovers of summer
            pine.
          </Typography>
        </Box>
        <Box className="flex reviewBodyContent textStart alignStart">
          <Box className="flex reviewBodyContent2 center">
            <img src={bottle} className="reviewBodyImageHead" />
            <Box className="flex reviewBodyContent textStart alignStart">
              <Typography variant="body1" className="reviewBody">
                Diamine is a company that needs no introduction - their ability
                to consistently release high quality, unique inks at a great
                price is well regarded in our little hobby. While there are some
                200 different inks on offer from the 150 year old,
                Liverpool-based manufacturer, I myself have "only" owned 15 or
                so. This is in part because I only prefer certain colors for
                myself, but also because, if I allow myself to become *too* big
                a Diamine fanboy, it would be quite possible to never buy an ink
                from another brand again.
              </Typography>
              <Typography variant="body1" className="reviewBody">
                Part of their 'standard' ink line, simply referred to as Diamine
                Ink, Sherwood Green is one of the darkest (I believe it is the
                third darkest) of their green offerings. As the name suggests,
                Sherwood, so-called for the forest from the Robin Hood mythos,
                is a forest green, and to my eye, perfectly captures the natural
                rich hues of pine stands in the height of summer.
              </Typography>
              <Typography variant="body1" className="reviewBody">
                Let's dive in, covering my usual slate of characteristics one at
                a time. Pictures included, unless otherwise marked, are my own.
                Like any other ink review, I have done my best to accurately
                portray the colors and qualities as I see them, but as you know,
                it's difficult to translate these elements with 100% accuracy
                through the camera. In an attempt to circumvent these
                difficulties, I will include a few different common
                fountain-pen-friendly papers in a few different types of
                lighting.
              </Typography>
            </Box>
          </Box>
          <Box className="flex column between">
            <SherwoodSliders />
          </Box>
          <Box className="flex reviewBodyContent2 center">
            <Box className="flex column reviewTextMobile textStart alignStart">
              <Typography variant="h4" className="reviewTitle">
                Color
              </Typography>
              <Typography variant="body1" className="reviewBody">
                There's not too much more to say about the color to accurately
                describe it past "it looks like the forest." In fact, I'm
                struggling to think of anything that would add to that
                description. It is a simple ink, lacking significant sheen, but
                carries a perfect amount of shading to compliment its base hue,
                without spilling the bounds of what it sets out to capture.
              </Typography>
              <Typography variant="body1" className="reviewBody">
                While Diamine is no stranger to exotic ink qualities, this one
                is lacking - though not devoid - in the more extravagant aspects
                of a shimmering ink or a sheen monster. Rather, it seeks to
                depict the full depth of the forest through shading alone. At
                the start of a stroke, it will adopt a lighter tone, more akin
                to deciduous leaves like oak and maple. As your pen draws the
                ink through the stroke, pooling at the end, it will darken into
                the rich colors of Ponderosa needles - one of my favorite sights
                in Colorado - closer to the color typically seen in its swatches
                online.
              </Typography>
              <Typography variant="body1" className="reviewBody">
                While I most often indulge in blue inks, green is my second or
                third favorite color to have in an ink, and this is a stellar
                offering. While green pens are not exactly common in an office
                setting, the green of Sherwood carries a dignity to it that
                would render it appropriate in a professional environment,
                especially for those living in forested areas.
              </Typography>
            </Box>
            <Box className="flex reviewBodyContent2">
              <div className="flex column">
                <img
                  src={shading}
                  className="reviewBodyImageRight"
                  onClick={() => handleImageClick(shading)}
                  style={{ cursor: "zoom-in" }}
                />
                <Typography
                  variant="body2"
                  className="textCenter flex center reviewBodyImageCaptionRight"
                  style={{
                    color: theme.palette.background.inverseGrey,
                    transition: "color 0.75s ease-in-out",
                  }}
                >
                  excellent shading - cosmo air light paper, pilot custom
                  heritage 92 (m), natural light
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
                some pink sheen - cosmo air light paper, pilot custom heritage
                92 (m), natural light
              </Typography>
            </div>
            <Box className="flex column reviewTextMobile textStart alignStart">
              <Typography variant="h4" className="reviewTitle">
                Performance
              </Typography>
              <Typography variant="body1" className="reviewBody">
                Diamine inks are known for being cheap, widely available, and
                popular. However, in spite of these connotations, they almost
                invariably produce inks of high quality that offer a superb
                writing experience. I am not sure how they have managed to crack
                the code to mass-producing so many different colors without
                losing quality, but here we are - and Sherwood Green is no
                exception.
              </Typography>
              <Typography variant="body1" className="reviewBody">
                Sherwood is a wet writer, though a notch below some of the other
                inks in my collection, such as Iroshizuku's offerings, or even
                other inks from Diamine themselves. I don't know if that's due
                to the richness of its saturation, but it is not dry enough to
                in any way hamper the writing experience, and it does flow
                freely in all of my pens. I am a devout medium-man, but I can't
                imagine this judgment would change in an extra fine. Compared to
                notable dry inks, such as Pelikan's 4001 series inks, Sherwood
                is far on the other side of the spectrum, without being a
                gusher.
              </Typography>
              <Typography variant="body1" className="reviewBody">
                With any darker ink, especially, for some reason, green ones, I
                find that it does take me quite a bit of extra flushing to have
                water run clear out of the barrel. However, the lack of shimmer
                and sheen does still place it solidly in the middle of the
                ease-of-clean category, and will only require a few extra rounds
                of pen flush to speed the process along.
              </Typography>
            </Box>
          </Box>
          <Box className="flex reviewBodyContent2 center">
            <Box className="flex column reviewTextMobile textStart alignStart">
              <Typography variant="h4" className="reviewTitle">
                Other Comments
              </Typography>
              <Typography variant="body1" className="reviewBody">
                Diamine is a company with a storied, 150-year history, and, as a
                result, has possibly the most robust lineup of colors of any ink
                company still running. While they offer oodles of sheeners,
                shimmerers, and every shade of the rainbow, sometimes a simple
                green is what's needed. On days like those, Sherwood is sure to
                be a winner. Diamine inks are remarkably consistent batch to
                batch, and Sherwood is no exception. However, it's shading does
                not come through well on every paper - in the pictures here, it
                is notably less pronounced on Tomoe 'S' Paper - still present,
                but in a more muted way.
              </Typography>
              <Typography variant="body1" className="reviewBody">
                That said, even if you hate the ink, you won't regret buying it,
                as Diamine's frankly insane bottom-shelf price point more or
                less eliminates buyer's remorse. While I typically recommend Van
                Ness for your ink purchases, when it comes to British companies,
                a British supplier will likely treat you a bit better. At time
                of writing, an 80mL bottle of Sherwood Green is available for{" "}
                <a href="https://www.thepencompany.com/en-us/product/diamine-fountain-pen-ink/11062/">
                  a jaw-dropping $6
                </a>{" "}
                from London-based The Pen Company, while it will cost{" "}
                <a href="https://vanness1938.com/products/diamine-sherwood-green">
                  $17 on Van Ness
                </a>{" "}
                and other American retailers. Buying in Britain gives you an
                unbeatable per mL price of just $0.08. While one would expect a
                compromise on quality with these prices, you'll find none with
                Diamine.
              </Typography>
              <Typography variant="body1" className="reviewBody">
                The standard line of Diamine inks offers no water resistance,
                but they do have other offerings to satisfy that use-case.
                Sherwood Green dries very quickly for its wet flow, but may
                feather slightly on the cheapest copier paper and legal pads. On
                fountain pen-friendly papers, however, it exhibits virtually no
                feathering or bleed through of any kind.
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
                  tomoe river 's' paper, pilot custom heritage 92 (m)
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
                An incredibly cheap, yet still incredibly good-looking and
                well-performing ink, Sherwood Green is a must-have for lovers of
                true forest green inks. While it doesn't have *much* sheen, it
                does contain a small amount in the right light, which is perfect
                for a subtle but exciting touch on an otherwise office
                appropriate offering.
              </Typography>
              <Typography variant="body1" className="reviewBody">
                The real treat for me is in its robust yet unassuming shading,
                covering the full range of green tones down to an almost-black
                at the end of the stroke. Maybe it's just because it's a green,
                but Sherwood's shading, despite being quite wide in spectrum
                range, does not explode off the page, but rather gives a reason
                to look twice and three times at the page written with it.
              </Typography>
              <Typography variant="body1" className="reviewBody">
                An incredible value for money, Diamine inks have yet to
                disappoint me in both their writing experience offered or indeed
                their impact on my wallet. If you're looking for a nice green,
                this surely won't disappoint, and is often my first port-of-call
                when I want to put something that isn't blue in one of my pens.
              </Typography>
            </Box>
          </Box>

          <Box className="flex around reviewBodyContent2 reviewBottom">
            <div className="flex reviewBottomImages column">
              <img
                src={takasago}
                onClick={() => handleImageClick(takasago)}
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
                takasago premium bank paper, pilot custom heritage 92 (m)
              </Typography>
            </div>
            <div className="flex reviewBottomImages alignCenter column">
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
                src={tomoe2}
                onClick={() => handleImageClick(tomoe2)}
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
                tomoe river 's' paper, pilot custom heritage 92 (m)
              </Typography>
            </div>
          </Box>
        </Box>
      </Box>
      {/* Zoom Modal */}
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
