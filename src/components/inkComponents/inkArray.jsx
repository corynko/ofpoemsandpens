import KonPekiReview from "./reviews/konPeki/konPeki";
import TsukiYoReview from "./reviews/tsukiYo/tsukiYo";
import HamiltonReview from "./reviews/hamilton/hamilton";
import SherwoodReview from "./reviews/sherwood/sherwood";

const InkArray = [
  {
    title: "Iroshizuku Tsuki-Yo",
    description:
      "An Enigmatic Blue to Blue-Black, Full of Mystery and Subtle Qualities",
    image: require("../../assets/images/png/ink/tsuki-yo/tsukiYo.jpg?url"),
    content: <TsukiYoReview />,
    author: "Ethan Kotel",
    urlAppend: "iroshizukuTsukiYo",
  },
  {
    title: "De Atramentis Alexander Hamilton",
    description:
      "An Enigmatic Blue to Blue-Black, Full of Mystery and Subtle Qualities",
    image: require("../../assets/images/png/ink/hamilton/hamilton.jpg?url"),
    content: <HamiltonReview />,
    author: "Ethan Kotel",
    urlAppend: "deatramentisAlexanderHamilton",
  },
  {
    title: "Diamine Sherwood Green",
    description:
      "A forest green - actually, THE forest green - for lovers of summer pine",
    image: require("../../assets/images/png/ink/kon-peki/kon-peki.jpg?url"),
    content: <SherwoodReview />,
    author: "Ethan Kotel",
    urlAppend: "diamineSherwoodGreen",
  },
  {
    title: "Iroshizuku Kon-Peki",
    description:
      "The King of Cobalts, Kon-Peki Offers an Unparalleled Writing Experience",
    image: require("../../assets/images/png/ink/kon-peki/kon-peki.jpg?url"),
    content: <KonPekiReview />,
    author: "Ethan Kotel",
    urlAppend: "iroshizukuKonPeki",
  },

  // {
  //   title: "Iroshizuku Ama-Iro",
  //   description:
  //     "The poison didn't take\nAnd I was forced to come to terms\nWith failure, and true pain, and profound disappointment\nWhile lying next to a lifeless body\nStaring into lifeless eyes\nAnd I swear I saw you breathing...\nBut now -\nI wonder if all I really saw\nWas your ghost escaping,\nMolting old skin, old shells,\nTo proceed, unhindered, into the ether.\nAre you there, still?\nDisembodied, floating into me, on my breath,\nAnd gone from me, just as quickly?\nAnd I swear I smelled you on the air...\nBut now -\nI wonder if all I really smelled\nWas a memory,\nAnother piece of you escaping\nFrom cracks in my mind, that you put there,\nWidening, metastasized,\nCutting holes in my heart, weeping blood,\nBits of you, leaving, flowing away.\nAre you gone, now?\nOr can my cells yet make more of you,\nTo replace the parts I've lost?\nAnd would I even want you, new,\nOr would I rather lose\nThe you I loved slowly, deliberately,\nIn shades of sanguine, turned dark -\nStill too in love to stop the bleeding.",
  //   image: require("../../assets/images/png/ink/kon-peki/kon-peki.jpg?url"),
  //   author: "Ethan Kotel",
  //   urlAppend: "iroshizukuAmaIro",
  // },
  // {
  //   title: "Iroshizuku Asa-Gao",
  //   description:
  //     "A love felt so deeply as to warrant its proclamation\nIs so private, and personal a thing,\nThat only two will ever comprehend\nThe full weight of its majesty -\nand yet -\nTo celebrate such a love alone\nFlies in the face of its meaning, its power,\nIts journey from the furthest reaches of the cosmos\nTo rest within two souls, intertwined.\nWho are we,\nTo keep such ageless splendor to ourselves?\nTo hoard it as the dragon's gold, and\nDeny those who may yet be graced its golden splendor,\nThe jubilance inspired by its earth-bound star light?\nNo!\nIt is too radiant, and too rare,\nTo hide behind closed doors and shut away hearts,\nIt withers away from the light of the sun, for\nIt is meant for open air, for warmth and birdsong.\nIt is that essence to which we crumble,\nWhen the last of our breath has been spent, and\nIt is the tears mixed with our name on the lips\nOf the other, left behind in our stead -\nIt is a gift that must always be shared,\nIt is the best of this world, heaven-sent.",
  //   image: require("../../assets/images/png/ink/kon-peki/kon-peki.jpg?url"),
  //   author: "Ethan Kotel",
  //   urlAppend: "iroshizukuAsaGao",
  // },
  // {
  //   title: "Iroshizuku Ku-Jaku",
  //   description:
  //     "A fortress lies at Dún na Mbó\nHewn into rock\nThirty metres above the crashing waves\nStones piled into walls\nAnd a shaft of salt-polished granite, smooth\nDown, down to the ocean below.\n \nWhen tides come in at Dún na Mbó\nA fortress does battle\nDefending the line against millions of tonnes\nOf blue and white soldiers\nScreaming, surging, rushing in\nTo smash against the battlements\nBefore their furvor fades\nAnd flows back out to sea.\n \nThere once was more at Dún na Mbó -\nOne can practically picture a palace -\nA standing sentry, vigilant, keeping watch\nWhile Ireland, sleeping soundly, dreams.\n \nBut now 'tis the fortress slumbers at Dún na Mbó\nBut one wall left, waist high, waiting\nFor the tide to come hyem, to do battle\nAnd remember a time\nWhen it was useful, crucial, to keep Ireland\nFrom falling\nDown, down to the ocean below.",
  //   image: require("../../assets/images/png/ink/kon-peki/kon-peki.jpg?url"),
  //   author: "Ethan Kotel",
  //   urlAppend: "iroshizukuKuJaku",
  // },
  // {
  //   title: "Iroshizuku Syo-Ro",
  //   description:
  //     "Malaise, even masked (mostly),\nTends to ooze, to seep, to creep,\nThrough solid walls, ghostly,\nAnd contaminate land, all around.\n \nIt's a toxin that eats away slowly,\nImperceptibly, even, to most,\nDissolving all once was found holy,\nTo Leave behind nothing at all.\n \nA shell who cries not, for sadness\nIs more passion than's been felt in years,\nWith not enough anger, for madness\nDemands laughter and absence of cares.\n \nNo, this is a mind made of iron,\nFormed into bars rigid and strong,\nLo, a swamp to be tread through, a mire,\nWith mud deep and sucking, and cold.\n \nAs ice on the lake in the winter,\nAs soil from frost to the thaw,\nAs clouds which the sun now breaks into,\nAs buds into leaves, safe from the fall:\nSo too will the frozen heart weather,\nSo too will the shadows retreat,\nSo too will the heart cease its shiver,\nSo too will ennui know defeat.",
  //   image: require("../../assets/images/png/ink/kon-peki/kon-peki.jpg?url"),
  //   author: "Ethan Kotel",
  //   urlAppend: "iroshizukuSyoRo",
  // },
  // {
  //   title: "Iroshizuku Shin-Ryoku",
  //   description:
  //     "But for a truth that I know to be true,\nAs I know that the river rolls on,\nAs I know that the sun will yet rise,\nAs I know it will set soon to come,\nSo too do I know that my neighbor\n(Whose wall I'm unlucky to share),\nIn a cubicle farm he lies waiting,\nTo untie my shoes, pull my hair!\nAnd yet, when I share every grievance,\nEvery passing remark, always snide,\nI'm treated as though I am lying,\nI feel like I'm losing my mind!\nIs there really no one who can see it?\nIs there really no hope for reprieve?\nWill the time ever come they believe me?\nIs my honesty hard to perceive?\nI wish that I could get him fired,\nI wish that he might just drop dead,\nI wish that I'd not got him hired,\nI wish they'd take him to the shed!\nThey're all looking at me like I'm crazy,\nLike they can't hear the things that he's said,\nThey're insisting he can't be this awful,\nThey're insisting it's all in my head!\n!!!!!!!\n!!!!\n!!\n!\nWith a *pop*, I snap back to find me\nAlone with my thoughts after all,\nIt'd been years since they had confined me,\nTo this soft cell with pads on the walls!",
  //   image: require("../../assets/images/png/ink/kon-peki/kon-peki.jpg?url"),
  //   author: "Ethan Kotel",
  //   urlAppend: "iroshizukuShinRyoku",
  // },
  // {
  //   title: "Diamine Blue Pearl",
  //   description:
  //     "What is it about the old, the aged,\nThe time-tempest tossed and turned, that speaks\nTo parts of me, slumbering, perhaps\nJust as ancient, waiting for release?\nWhat is it about these crumbling walls,\nThese foundations fixed fast, fixed firmly -\nThat whisper truths of belonging,\nLong after those who craved belonging here\nHave passed into memory, to live\nAmong ghosts, and the spectres who haunt\nThe darkened corners we dare not walk?\nYet within those corners, there lies\nA peculiar serenity, a\nKnowledge that what we build is timeless,\nEven if these frail, physical forms\nCan never be - a promise, a hope,\nThat some part of ourselves will survive.\nIt is here, among places so old,\nThat I feel most new, most young, that life\nFeels most worth living, worth forging a path\nTowards love, towards finding those small pieces\nOf timeless, permanent, enduring\nForces, beyond our understanding,\nThat the living still can call our own.",
  //   image: require("../../assets/images/png/ink/kon-peki/kon-peki.jpg?url"),
  //   author: "Ethan Kotel",
  //   urlAppend: "diaminePearl",
  // },
  // {
  //   title: "Diamine Blue Velvet",
  //   description:
  //     "It is an odd thing indeed\nTo find oneself, not lonely, but truly alone.\nDevoid of set, setting, and structure,\nWithout a machine, a man, nothing\nTo rage against, with exception:\nAs time...\nTime...\nTime...\nMarches on.\nIt's been years since I've heard such a sound,\nSweet, saturated, loud, fast, pulsing,\nAnd traveling, clear and free,\nThrough late summer air,\nOver leather, over studs,\nUnhampered by expectation\nNor shame,\nUnfettered, as the winds\nThat move the sands.\nYet, as the sun sets o'er the plains,\nAnd my horse sighs softly into evening,\nThe clouds settle beneath the horizon,\nAnd in the night's clarity:\nI am grateful...\nGrateful...\nGrateful...\nFor in my mind, the guitars are still racing,\nAnd in my heart, the drums are still thumping,\nAnd in my hands, we all are still raging,\nAnd in my saddle, rebellion thrives.\nYes, as long as I live, so too does the music,\nYes, systems decay and subside,\nYes, music's still loud 'till you lose it,\nAs long as I live, punk never dies.",
  //   image: require("../../assets/images/png/ink/kon-peki/kon-peki.jpg?url"),
  //   author: "Ethan Kotel",
  //   urlAppend: "diamineVelvet",
  // },
  // {
  //   title: "J. Herbin Bleu de Minuit",
  //   description:
  //     "O, but for the love of love's great flame,\nWould I shed the frost incurred, and\nBy the rising of the sun,\nTo return my body\nTo dust, in nebulae, swirling.\nO, but for the light of her shining smile,\nWould I embrace the darkest midnight,\nWhich swallows us whole,\nMoment by moment,\nUntil all I am is a yawning chasm,\nWhere only silence echoes.\nAnd\nO, but for the melody of her laugh,\nWould I feel my voice disappear, dissipate,\nDisperse into fog, into mist,\nTo be carried away into sunset,\nAnd scatter, as naught, into dusk.\nO, but for the presence of her soul,\nWould mine own split into quarters:\nAnd one would consume itself slowly,\nAs the widow, her lover, outlived.\nAnd one would seek death more quickly,\nAs a man too broken, bleeding, to live.\nAnd yet another, would ask for forgiveness,\nAs the penitent, gallows-bound, cries.\nAnd the last would just sit, still and dumb,\nWaiting, patient, for death yet to come.\nO, but for the warmth of the flame,\nWould I lose myself fast to the void,\nBut I still feel the warmth of her flame,\nAnd from it, my soul's warmth reclaimed!",
  //   image: require("../../assets/images/png/ink/kon-peki/kon-peki.jpg?url"),
  //   author: "Ethan Kotel",
  //   urlAppend: "herbinMinuit",
  // },
  // {
  //   title: "J. Herbin Amethyste de L'Oural",
  //   description:
  //     "Oh, injustice!\nOh, cruelty of fate!\nHow she conspires to divide,\nTo undermine,\nTo Contaminate!\nAnd here I sit,\nLonging for naught\nBut the light of the late\nSetting sun!\nDarkness yet abounds,\nBut love, my love,\nYour father's hate\nDoes nothing\nTo dissuade,\nNor erase\nYour light, in the\nForgotten,\nDecrepit corners\nOf my mind -\nAnd, there,\nThere,\nYou are, always,\nIn the light of the late\nSetting sun!\nI will escape,\nThe power of your house\nCan not stop,\nNor dissuade\nMe\nFrom finding a way\nBack\nTo you -\nAnd, together,\nIn Spain,\nWe will sail\nInto the light of the late\nSetting sun!",
  //   image: require("../../assets/images/png/ink/kon-peki/kon-peki.jpg?url"),
  //   author: "Ethan Kotel",
  //   urlAppend: "herbinAmethyste",
  // },
];

export default InkArray;
