import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { HelpOutline } from "@mui/icons-material";
import "animate.css";
import Swal from "sweetalert2";
// import AnimatedCursor from "react-animated-cursor";

//poem page imports
import PoemCard from "../../components/poemsComponents/poemCards";
import PoemsArray from "../../components/poemsComponents/poemsArray";

const poemsArray = PoemsArray;

export default function Poems() {
  const { poemId } = useParams();
  const poem = poemsArray.find((p) => p.urlAppend === poemId);

  const theme = useTheme();
  const themeMode = theme.palette.mode;

  const textColor = theme.palette.background.inverse;
  const textColorHover =
    themeMode === "light" ? theme.palette.background.default : "#138287";
  const defaultBackground = theme.palette.background.default;
  const hoverBackground = theme.palette.background.inverse;

  const fireSpecialSwal = () => {
    let swalConfirm = Swal.mixin({
      toast: true,
      timer: 5500,
      timerProgressBar: true,
      showConfirmButton: false,
      position: "bottom-end",
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
      customClass: {
        title: "swalTitle",
        container: "swalContainer",
        confirmButton: "swalButton",
        popup: "swalPopup",
      },
      showClass: {
        popup: `animate__animated
          animate__bounceInRight
          `,
      },
      hideClass: {
        popup: `animate__animated
          animate__backOutRight`,
      },
    });

    swalConfirm.fire({
      icon: "question",
      title: "Can't Read Sloppy Handwriting?",
      text: "Click on a card to read the typed transcription.",
    });
  };

  return (
    <>
      <Helmet>
        <title>
          {poem
            ? `Read ${poem.title} on Of Pens and Poems`
            : "Of Pens and Poems"}
        </title>
        <meta
          property="og:title"
          content={
            poem
              ? `Read ${poem.title} on Of Pens and Poems`
              : "Of Pens and Poems"
          }
        />
        <meta
          property="og:description"
          content={
            poem
              ? `${poem.transcription.slice(0, 100)}...`
              : "Explore unique poems and writings."
          }
        />
        <meta
          property="og:image"
          content={poem ? poem.image : "/favicon.ico"}
        />
        <meta
          property="og:url"
          content={`https://ofpensandpoems.com/poems/${poemId || ""}`}
        />
        <meta property="og:type" content="article" />
      </Helmet>

      <div>
        <div
          style={{ zIndex: "10" }}
          className="flex animate__animated animate__fadeInDown"
        >
          <Box
            sx={{
              height: "400vh",
              zIndex: "90",
              width: "85px",
              position: "fixed",
              top: "205px",
              borderRadius: "35px",
              right: "5px",
              backgroundColor: "#00000000",
              transition: "all 0.33s ease-in",
            }}
          >
            <HelpOutline
              onClick={() => {
                fireSpecialSwal();
              }}
              className="animate__animated animate__fadeInDown"
              sx={{
                height: "75px",
                zIndex: "90",
                width: "75px",
                position: "sticky",
                top: "205px",
                right: "10px",
                color: textColor,
                backgroundColor: defaultBackground,
                borderRadius: "75px",
                transition: "all 0.33s ease-in",
                "&:hover": {
                  color: textColorHover,
                  backgroundColor: hoverBackground,
                },
              }}
            />
          </Box>
        </div>
        <Box sx={{ zIndex: "10" }} className="flex wrap poemsBody center">
          {poemsArray.map((poem, index) => (
            <PoemCard
              key={index}
              title={poem.title}
              image={poem.image}
              image2={poem.image2}
              image3={poem.image3}
              image4={poem.image4}
              image5={poem.image5}
              altText={poem.alt}
              transcription={poem.transcription}
              author={poem.author}
              urlAppend={poem.urlAppend}
              delay={index * 150}
            />
          ))}
        </Box>
      </div>
    </>
  );
}
