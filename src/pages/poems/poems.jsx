import { Box } from "@mui/material";
import PoemCard from "../../components/poemsComponents/poemCards";

//poem image imports

const poemsArray = [
  {
    title: "The Aftermath of Romeo",
    transcription:
      "The poison didn't take\nAnd I was forced to come to terms\nWith failure, and true pain, and profound disappointment\nWhile lying next to a lifeless body\nStaring into lifeless eyes\nAnd I swear I saw you breathing...\nBut now -\nI wonder if all I really saw\nWas your ghost escaping,\nMolting old skin, old shells,\nTo proceed, unhindered, into the ether.\nAre you there, still?\nDisembodied, floating into me, on my breath,\nAnd gone from me, just as quickly?\nAnd I swear I smelled you on the air...\nBut now -\nI wonder if all I really smelled\nWas a memory,\nAnother piece of you escaping\nFrom cracks in my mind, that you put there,\nWidening, metastasized,\nCutting holes in my heart, weeping blood,\nBits of you, leaving, flowing away.\nAre you gone, now?\nOr can my cells yet make more of you,\nTo replace the parts I've lost?\nAnd would I even want you, new,\nOr would I rather lose\nThe you I loved slowly, deliberately,\nIn shades of sanguine, turned dark -\nStill too in love to stop the bleeding.",
    image: require("../../assets/images/png/romeos_aftermath.JPG?url"),
    author: "Ethan Kotel",
  },
  {
    title: "The Proclamation",
    transcription:
      "A love felt so deeply as to warrant its proclamation\nIs so private, and personal a thing,\nThat only two will ever comprehend\nThe full weight of its majesty -\nand yet -\nTo celebrate such a love alone\nFlies in the face of its meaning, its power,\nIts journey from the furthest reaches of the cosmos\nTo rest within two souls, intertwined.\nWho are we,\nTo keep such ageless splendor to ourselves?\nTo hoard it as the dragon's gold, and\nDeny those who may yet be graced its golden splendor,\nThe jubilance inspired by its earth-bound star light?\nNo!\nIt is too radiant, and too rare,\nTo hide behind closed doors and shut away hearts,\nIt withers away from the light of the sun, for\nIt is meant for open air, for warmth and birdsong.\nIt is that essence to which we crumble,\nWhen the last of our breath has been spent, and\nIt is the tears mixed with our name on the lips\nOf the other, left behind in our stead -\nIt is a gift that must always be shared,\nIt is the best of this world, heaven-sent.",
    image: require("../../assets/images/png/the_proclamation.JPG?url"),
    author: "Ethan Kotel",
  },
  {
    title: "A Fortress Lies at Dún na Mbó",
    transcription:
      "A fortress lies at Dún na Mbó\nHewn into rock\nThirty metres above the crashing waves\nStones piled into walls\nAnd a shaft of salt-polished granite, smooth\nDown, down to the ocean below.\n \nWhen tides come in at Dún na Mbó\nA fortress does battle\nDefending the line against millions of tonnes\nOf blue and white soldiers\nScreaming, surging, rushing in\nTo smash against the battlements\nBefore their furvor fades\nAnd flows back out to sea.\n \nThere once was more at Dún na Mbó -\nOne can practically picture a palace -\nA standing sentry, vigilant, keeping watch\nWhile Ireland, sleeping soundly, dreams.\n \nBut now 'tis the fortress slumbers at Dún na Mbó\nBut one wall left, waist high, waiting\nFor the tide to come hyem, to do battle\nAnd remember a time\nWhen it was useful, crucial, to keep Ireland\nFrom falling\nDown, down to the ocean below.",
    image: require("../../assets/images/png/dun_na_mbo.JPG?url"),
    author: "Ethan Kotel",
  },
  {
    title: "Malaise",
    transcription:
      "Malaise, even masked (mostly),\nTends to ooze, to seep, to creep,\nThrough solid walls, ghostly,\nAnd contaminate land, all around.\n \nIt's a toxin that eats away slowly,\nImperceptibly, even, to most,\nDissolving all once was found holy,\nTo Leave behind nothing at all.\n \nA shell who cries not, for sadness\nIs more passion than's been felt in years,\nWith not enough anger, for madness\nDemands laughter and absence of cares.\n \nNo, this is a mind made of iron,\nFormed into bars rigid and strong,\nLo, a swamp to be tread through, a mire,\nWith mud deep and sucking, and cold.\n \nAs ice on the lake in the winter,\nAs soil from frost to the thaw,\nAs clouds which the sun now breaks into,\nAs buds into leaves, safe from the fall:\nSo too will the frozen heart weather,\nSo too will the shadows retreat,\nSo too will the heart cease its shiver,\nSo too will ennui know defeat.",
    image: require("../../assets/images/png/malaise.JPG?url"),
    author: "Ethan Kotel",
  },
  {
    title: "A Coworker's Story",
    transcription: "Lorem Ipsum",
    image: require("../../assets/images/png/a_coworker.JPG?url"),
    author: "Ethan Kotel",
  },
  {
    title: "The Old and the Aged",
    transcription: "Lorem Ipsum",
    image: require("../../assets/images/png/the_old_and_aged.JPG?url"),
    author: "Ethan Kotel",
  },
  {
    title: "Alone as a Punk Cowboy",
    transcription: "Lorem Ipsum",
    image: require("../../assets/images/png/a_punk_cowboy.JPG?url"),
    author: "Ethan Kotel",
  },
  {
    title: "The Warmth of Her Flame",
    transcription: "Lorem Ipsum",
    image: require("../../assets/images/png/the_warmth_of_her_flame.JPG?url"),
    author: "Ethan Kotel",
  },
];

export default function Poems() {
  return (
    <Box className="flex wrap center">
      {poemsArray.map((poem, index) => (
        <PoemCard
          key={index}
          title={poem.title}
          image={poem.image}
          transcription={poem.transcription}
          author={poem.author}
        />
      ))}
    </Box>
  );
}
