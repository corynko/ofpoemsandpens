import { Box } from "@mui/material";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

//poem page imports
import InkCard from "../../components/inkComponents/inkCards";
import InkArray from "../../components/inkComponents/inkArray";

import KonPekiReview from "../../components/inkComponents/reviews/konPeki/konPeki";

const inkArray = InkArray;

export default function Ink() {
  const { inkId } = useParams();
  const ink = inkArray.find((p) => p.urlAppend === inkId);

  return (
    <>
      <Helmet>
        <title>
          {ink
            ? `Read ${ink.title}, a review on Of Pens and Poems`
            : "Of Pens and Poems"}
        </title>
        <meta
          property="og:title"
          content={
            ink
              ? `Read ${ink.title}, a review on Of Pens and Poems`
              : "Of Pens and Poems"
          }
        />
        <meta
          property="og:description"
          content={
            ink
              ? `${ink.description.slice(0, 100)}...` // Take the first 100 characters for a brief description
              : "Explore unique poems and writings."
          }
        />
        <meta property="og:image" content={ink ? ink.image : "/favicon.ico"} />
        <meta
          property="og:url"
          content={`https://ofpensandpoems.com/ink/${inkId || ""}`}
        />
        <meta property="og:type" content="article" />
      </Helmet>

      <Box className="flex wrap center">
        <KonPekiReview />
        {inkArray.map((ink, index) => (
          <InkCard
            key={index}
            title={ink.title}
            image={ink.image}
            description={ink.description}
            author={ink.author}
            urlAppend={ink.urlAppend}
          />
        ))}
      </Box>
    </>
  );
}
