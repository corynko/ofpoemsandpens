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
              ? `${poem.transcription.slice(0, 100)}...` // Take the first 100 characters for a brief description
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

      <Box className="flex wrap center">
        {poemsArray.map((poem, index) => (
          <PoemCard
            key={index}
            title={poem.title}
            image={poem.image}
            transcription={poem.transcription}
            author={poem.author}
            urlAppend={poem.urlAppend}
          />
        ))}
      </Box>
    </>
  );
}
