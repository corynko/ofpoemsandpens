import KonPekiReview from "./reviews/konPeki/konPeki";
import TsukiYoReview from "./reviews/tsukiYo/tsukiYo";
import HamiltonReview from "./reviews/hamilton/hamilton";
import SherwoodReview from "./reviews/sherwood/sherwood";
import BluePearlReview from "./reviews/bluePearl/bluePearl";

const InkArray = [
  // {
  //   title: "Monteverde Peace Blue",
  //   description:
  //     "An Enigmatic Blue to Blue-Black, Full of Mystery and Subtle Qualities",
  //   image: require("../../assets/images/png/ink/peaceBlue/peaceHeader.jpg?url"),
  //   content: <TsukiYoReview />,
  //   author: "Ethan Kotel",
  //   urlAppend: "iroshizukuTsukiYo",
  // },
  // {
  //   title: "Diamine Blue Pearl",
  //   description:
  //     "One of the Shimmertastic Series, Blue Pearl is a gorgeous and fascinating ink.",
  //   image: require("../../assets/images/png/ink/tsuki-yo/tsukiYoHeader.jpg?url"),
  //   content: <BluePearlReview />,
  //   author: "Ethan Kotel",
  //   urlAppend: "diamineBluePearl",
  // },
  {
    title: "Iroshizuku Tsuki-Yo",
    description:
      "An Enigmatic Blue to Blue-Black, Full of Mystery and Subtle Qualities",
    image: require("../../assets/images/png/ink/tsuki-yo/tsukiYoHeader.jpg?url"),
    content: <TsukiYoReview />,
    author: "Ethan Kotel",
    urlAppend: "iroshizukuTsukiYo",
  },
  // {
  //   title: "De Atramentis Alexander Hamilton",
  //   description:
  //     "An Enigmatic Blue to Blue-Black, Full of Mystery and Subtle Qualities",
  //   image: require("../../assets/images/png/ink/hamilton/hamiltonHeader.jpg?url"),
  //   content: <HamiltonReview />,
  //   author: "Ethan Kotel",
  //   urlAppend: "deatramentisAlexanderHamilton",
  // },
  {
    title: "Diamine Sherwood Green",
    description:
      "A forest green - actually, THE forest green - for lovers of summer pine",
    image: require("../../assets/images/png/ink/sherwood/sherwoodHeader.jpg?url"),
    content: <SherwoodReview />,
    author: "Ethan Kotel",
    urlAppend: "diamineSherwoodGreen",
  },
  {
    title: "Iroshizuku Kon-Peki",
    description:
      "The King of Cobalts, Kon-Peki Offers an Unparalleled Writing Experience",
    image: require("../../assets/images/png/ink/kon-peki/konPekiHeader.jpg?url"),
    content: <KonPekiReview />,
    author: "Ethan Kotel",
    urlAppend: "iroshizukuKonPeki",
  },
];

export default InkArray;
