import * as React from "react";
import { Box, Card, Modal } from "@mui/material";

//poem image imports
import romeosAftermath from "../../assets/images/png/romeos_aftermath.JPG";
import proclamation from "../../assets/images/png/the_proclamation.JPG";
import dunNaMbo from "../../assets/images/png/dun_na_mbo.JPG";
import malaise from "../../assets/images/png/malaise.JPG";
import coworker from "../../assets/images/png/a_coworker.JPG";
import oldAndAged from "../../assets/images/png/the_old_and_aged.JPG";
import cowboy from "../../assets/images/png/a_punk_cowboy.JPG";
import warmth from "../../assets/images/png/the_warmth_of_her_flame.JPG";

const poemsArray = [
  {
    title: "The Aftermath of Romeo",
    transcription: "Lorem Ipsum",
    image: { romeosAftermath },
  },
  {
    title: "The Proclamation",
    transcription: "Lorem Ipsum",
    image: { proclamation },
  },
  {
    title: "A Fortress Lies at Dún na Mbó",
    transcription: "Lorem Ipsum",
    image: { dunNaMbo },
  },
  {
    title: "Malaise",
    transcription: "Lorem Ipsum",
    image: { malaise },
  },
  {
    title: "A Coworker's Story",
    transcription: "Lorem Ipsum",
    image: { coworker },
  },
  {
    title: "The Old and the Aged",
    transcription: "Lorem Ipsum",
    image: { oldAndAged },
  },
  {
    title: "Alone as a Punk Cowboy",
    transcription: "Lorem Ipsum",
    image: { cowboy },
  },
  {
    title: "The Warmth of Her Flame",
    transcription: "Lorem Ipsum",
    image: { warmth },
  },
];

const PoemCard = () => {
  return (
    <>
      <Card></Card>
      <Modal>
        <Box></Box>
      </Modal>
    </>
  );
};

export default PoemCard;
