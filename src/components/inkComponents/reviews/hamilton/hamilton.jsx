import * as React from "react";
import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

import HamiltonSliders from "./hamiltonSliders";

const bottle = require("../../../../assets/images/png/ink/hamilton/hamilton.jpg?url");

export default function HamiltonReview() {
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
          <Typography variant="h2" sx={{ margin: "20px" }}>
            De Atramentis Alexander Hamilton
          </Typography>
          <Typography variant="h5" sx={{ marginBottom: "20px" }}>
            I'm not a purple kind of guy, but this is an ardent exception. A
            beautiful, well behaved offering from De Atramentis
          </Typography>
        </Box>
        <Box className="flex column textStart alignStart">
          <Box className="flex center">
            <img src={bottle} className="reviewBodyImageHead" />
            <Box className="flex column textStart alignStart">
              <Typography variant="body1" className="reviewBody">
                I have only owned two De Atramentis inks so far, those being
                Alexander Hamilton (also known as Standard Aubergine in some
                markets) and Sherlock Holmes, but both are phenomenal inks, and
                I've heard similarly glowing reviews about the rest of their
                line. These are incredibly well-behaved inks; and, while the
                colors are nothing extravagant or outlandish, they contain a
                depth that I find enthralling.
              </Typography>
              <Typography variant="body1" className="reviewBody">
                Somewhere between a purple, a burgundy, and a pink, depending on
                the shading, this is an unusual color for me to enjoy. However,
                it's a well saturated and well behaved ink, two of my favorite
                qualities. What it lacks in super-duper-special properties, like
                sheen or shimmer, it makes up for in an understated elegance
                that makes for a lovely every day ink.
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
            <HamiltonSliders />
          </Box>
          <Box className="flex center">
            <Box className="flex column textStart alignStart">
              <Typography variant="h4" className="reviewTitle">
                Color
              </Typography>
              <Typography variant="body1" className="reviewBody">
                Alexander Hamilton is a rather unique color in my inky
                experience. It is darker and richer than Yama-Budo (Iroshizuku,
                maybe the single most popular pink/burgundy shade), lighter than
                Writer's Blood (Diamine), and just generally more interesting
                than Syrah (Diamine) or Cabernet on the Lake (FWP). However,
                through its relatively wide palette exhibited in its shading, it
                manages to evoke bits of each of these named inks - a true jack
                of all trades in the red/pink/purple sphere.
              </Typography>
              <Typography variant="body1" className="reviewBody">
                De Atramentis inks are unpretentious - they don't generally
                contain more than low levels of sheen, are not particularly wild
                when it comes to shading, and only a select few contain shimmer
                (though, weirdly, they do have a line of scented offerings).
                Still, there is much to be said for a company that does not try
                to shred the envelope - rather, Dr. Franz-Josef Jansen, who
                hand-makes all D.A. inks, seems to prefer instead to focus on
                perfecting the most important aspects of an ink: its color, and
                its writing experience.
              </Typography>
              <Typography variant="body1" className="reviewBody">
                As I mentioned in my Kon-Peki review, I predominately - in fact,
                almost exclusively - prefer blue inks. As a result, I rarely
                indulge in the other inks in my collection. That said, whenever
                I do ink up a pen with Alexander Hamilton, I find myself drawn
                deep into its colorway - to the point that it even invariably
                leads me on a trip to Van Ness to look for non-blue inks that
                will excite me in the same way.
              </Typography>
            </Box>
            <Box className="flex">
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
          <Box className="flex center">
            <div className="flex column">
              <img src={bottle} className="reviewBodyImageLeft" />
              <Typography
                variant="body2"
                className="textCenter flex center reviewBodyImageCaptionLeft"
                style={{
                  color: theme.palette.background.inverseGrey,
                  transition: "color 0.75s ease-in-out",
                }}
              >
                passepied cream paper, pilot custom 823 medium, fluorescent
                light
              </Typography>
            </div>
            <Box className="flex column textStart alignStart">
              <Typography variant="h4" className="reviewTitle">
                Performance
              </Typography>
              <Typography variant="body1" className="reviewBody">
                De Atramentis inks are renowned for their smooth-writing,
                free-flowing experience in most any pen. As a user of mostly
                mediums, I must admit that this reputation is nothing if not
                well founded. I prefer wet inks, and, while not quite as...
                gushy as Kon-Peki, it manages to *feel* just as wet, providing
                my CH92 (a famously dryer nib by Pilot standards) a
                buttery-smooth line more akin to my 823's.
              </Typography>
              <Typography variant="body1" className="reviewBody">
                Well-saturated, well-lubricated, and devoid of the annoying
                aspects of a sheening or shimmering ink, the De Atramentis
                experience, like their colors, is one marked by an unassuming
                but nevertheless spectacular showcase of ink-making mastery.
              </Typography>
              <Typography variant="body1" className="reviewBody">
                Hamilton's intense saturation does downgrade it a bit in the
                ease-of-clean department, as it takes me quite a bit of flushing
                to get the water out of the pen to run clear. That is to be
                expected in an ink like this, and, since, again, it is not a
                sheening nor shimmering ink, there is little risk of extra
                particulates being left behind. It also seems to not run a risk
                of staining the barrel, though I will admit my relatively few
                fills with it is of limited statistical value on that front.
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
                <img src={bottle} className="reviewBodyImageRight" />
                <Typography
                  variant="body2"
                  className="textCenter flex center reviewBodyImageCaptionRight"
                  style={{
                    color: theme.palette.background.inverseGrey,
                    transition: "color 0.75s ease-in-out",
                  }}
                >
                  tomoe river 's' paper, pilot custom 823 medium, lamp-light
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
                counteract the relative simplicity of this ink, possessing no
                sheen nor shimmer.
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
              <img src={bottle} className="reviewMorePictures" />
              <Typography
                variant="body2"
                className="textCenter flex center"
                style={{
                  color: theme.palette.background.inverseGrey,
                  transition: "color 0.75s ease-in-out",
                }}
              >
                tomoe river 's' paper, pilot custom 823 medium, lamp-light
              </Typography>
            </div>
            <div className="flex column">
              <img src={bottle} className="reviewMorePictures" />
              <Typography
                variant="body2"
                className="textCenter flex center "
                style={{
                  color: theme.palette.background.inverseGrey,
                  transition: "color 0.75s ease-in-out",
                }}
              >
                tomoe river 's' paper, pilot custom 823 medium, lamp-light
              </Typography>
            </div>
            <div className="flex column">
              <img src={bottle} className="reviewMorePictures" />
              <Typography
                variant="body2"
                className="textCenter flex center"
                style={{
                  color: theme.palette.background.inverseGrey,
                  transition: "color 0.75s ease-in-out",
                }}
              >
                tomoe river 's' paper, pilot custom 823 medium, lamp-light
              </Typography>
            </div>
          </Box>
        </Box>
      </Box>
    </>
  );
}
