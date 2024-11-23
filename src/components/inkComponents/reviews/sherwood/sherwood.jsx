import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import { Box, Dialog } from "@mui/material";
import Typography from "@mui/material/Typography";

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

  const handleImageClick = (src) => {
    setZoomedImage(src);
  };

  const handleClose = () => {
    setZoomedImage(null);
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
            a forest green - actually, THE forest green - for lovers of summer
            pine.
          </Typography>
        </Box>
        <Box className="flex column textStart alignStart">
          <Box className="flex center">
            <img src={bottle} className="reviewBodyImageHead" />
            <Box className="flex column textStart alignStart">
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
          <Box className="flex center">
            <Box className="flex column textStart alignStart">
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
            <Box className="flex">
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
          <Box className="flex center">
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
            <Box className="flex column textStart alignStart">
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
          <Box className="flex center">
            <Box className="flex column textStart alignStart">
              <Typography variant="h4" className="reviewTitle">
                Other Comments
              </Typography>
              <Typography variant="body1" className="reviewBody">
                De Atramentis really has a thing going with the whole
                not-extravagant-but-still-functional vibe. At the risk of over
                generalization, this is very much a facet of the German design
                language, echoed as it is in LAMY products, Bock nibs, and many
                others. In this spirit, De Atramentis inks come in a shapely
                bottle of dark glass, too dark to see the ink within (which also
                probably helps with color steadfastness when left in light),
                packaged tightly in a simple folded cardboard box, just big
                enough to fit the bottle.
              </Typography>
              <Typography variant="body1" className="reviewBody">
                De Atramentis inks also attach no frills when it comes to their
                pricing, coming in rather cheap for their high quality. At time
                of writing, you can expect to spend{" "}
                <a href="https://vanness1938.com/products/deatramentis-standard-aubergine?_pos=1&_psq=alexander+ham&_ss=e&_v=1.0">
                  ~$14 for 45mL's,
                </a>{" "}
                ($17 from some retailers), giving it a per mL price of just
                $0.31-0.37. This low price point, combined with the high quality
                color, handmade, small-batch pedigree, and superb writing
                experience earn it a solid 100/100 when it comes to value for
                money.
              </Typography>
              <Typography variant="body1" className="reviewBody">
                While offering no water resistance, De Atramentis has a robust
                line of document inks for those who require a bit of future
                proofing. All of their inks, however, neither feather nor bleed
                through, and only exhibit mild-to-moderate ghosting on thinner
                papers. While I haven't spent much writing time with this one on
                non-fountain pen friendly papers, a few quick tests give me
                little cause for suspicion that this performance wouldn't extend
                to cheap copy paper and legal pads. While I can't say that this
                is the most office-appropriate ink out there, it's absence of
                shimmer and sheen would render it acceptable for all but the
                most formal workplaces.
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
          <Box className="flex column">
            <Box className="flex column alignCenter">
              <Typography variant="h4" className="reviewTitle">
                In Conclusion
              </Typography>
            </Box>
            <Box className="flex column textStart alignStart">
              <Typography variant="body1" className="reviewBody">
                This is the pink for those who don't like pinks, the red for
                those who don't like reds, and has routinely piqued my interest
                in not only the rest of the De Atramentis line, but non-blue
                offerings from other ink houses as well.
              </Typography>
              <Typography variant="body1" className="reviewBody">
                Performing excellently in any pen I've put it in, Alexander
                Hamilton is an ink I would rely on to always be ready to write,
                and always be ready to impress. Well-saturated in a lovely
                color, the shading offered provides just enough uniqueness to
                counteract the relative simplicity of this ink, possessing low
                sheen and no shimmer.
              </Typography>
              <Typography variant="body1" className="reviewBody">
                A terrific value for money, this is an ink that is sure to
                provide you many pages of writing pleasure. While not the
                easiest to clean, this is nonetheless an ink that should be
                strongly considered if you're looking for something out of your
                normal palette realm that's sure to leave a lasting impression.
              </Typography>
            </Box>
          </Box>

          <Box className="flex around reviewBottom">
            <div className="flex column">
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
            <div className="flex column">
              <img
                src={swatch}
                onClick={() => handleImageClick(swatch)}
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
                wearingeul color swatch paper, cotton swab
              </Typography>
            </div>
            <div className="flex column">
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
        onClick={handleClose}
        onClose={handleClose}
        style={{ cursor: "zoom-out" }}
        fullWidth
        maxWidth="xl"
      >
        <img
          src={zoomedImage || ""}
          alt="Zoomed"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </Dialog>
    </>
  );
}
