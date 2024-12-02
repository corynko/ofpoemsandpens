import { Box } from "@mui/material";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

//poem page imports
import PoemCard from "../../components/poemsComponents/poemCards";
import PoemsArray from "../../components/poemsComponents/poemsArray";

const poemsArray = PoemsArray;

export default function Poems() {
  const { poemId } = useParams();
  const poem = poemsArray.find((p) => p.urlAppend === poemId);

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

      <Box className="flex wrap poemsBody center">
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
          />
        ))}
      </Box>
    </>
  );
}
