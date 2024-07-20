// Images
import Nytimescooking from "./assets/nytimescooking.png";
import Kitchenaid from "./assets/kitchenaid.png";
import Capcom from "./assets/capcom.png";
import Uber from "./assets/uber.png";
// new photos
import empireAuto from "./assets/empireAuto.png";
import layoutGen from "./assets/layoutGen.png";
import musicPlay from "./assets/musicPlay.png";
import pixelSketch from "./assets/pixelSketch.png";
import recipeReady from "./assets/recipeReady.png";
import capEmail from "./assets/capEmail.png";
import uberEmail from "./assets/uberEmail.png";
import kaEmail from "./assets/kaEmail.png";
import nytEmail from "./assets/nytEmail.png";

const projectData = () => [
  {
    id: 1,
    tag: "React",
    title: "Recipe Ready",
    tools: ["React", "&#x2022;", "Python", "&#x2022;", "Django"],
    demo: "https://johnlombardi389.github.io/recipe-ready/",
    github: "https://github.com/johnlombardi389/recipe-ready",
    image: recipeReady,
    description:
      "Effortlessly organize your kitchen, get instant recipes tailored to your ingredients, and cut food waste. Try it for yourself using the test account (Username: test, Password: test)",
  },
  {
    id: 2,
    tag: "JavaScript",
    title: "Pixel Sketch",
    tools: ["JavaScript", "&#x2022;", "CSS", "&#x2022;", "HTML"],
    demo: "https://johnlombardi389.github.io/pixel-sketch/",
    github: "https://github.com/johnlombardi389/pixel-sketch",
    image: pixelSketch,
    description:
      "Create drawings on a digital canvas by manipulating pixels, a web-based application inspired by the classic etch-a-sketch toy.",
  },
  {
    id: 3,
    tag: "React",
    title: "Music Player",
    tools: ["React", "&#x2022;", "JavaScript", "&#x2022;", "Sass"],
    demo: "https://johnlombardi389.github.io/music-player/",
    github: "https://github.com/johnlombardi389/music-player",
    image: musicPlay,
    description:
      "Music player with the ability to skip forward and back. It features a custom progress bar for each song, with a unique gradient based on the song's cover art.",
  },
  {
    id: 4,
    tag: "JavaScript",
    title: "Website Layout Generator",
    tools: ["JavaScript", "&#x2022;", "CSS", "&#x2022;", "HTML"],
    demo: "https://johnlombardi389.github.io/layout-generator/",
    github: "https://github.com/johnlombardi389/layout-generator",
    image: layoutGen,
    description:
      "A tool that both developers and designers can use for inspiration in creating websites. Each generation is completely random, making it easy for users to experiment with different layout options.",
  },
  {
    id: 5,
    tag: "Email",
    title: "Capcom Promotional Email",
    tools: ["HTML", "&#x2022;", "CSS", "&#x2022;", "MJML"],
    demo: "https://johnlombardi389.github.io/capcomemail/",
    github: "https://github.com/johnlombardi389/capcomemail",
    image: capEmail,
    description:
      "Created a promotional email for Capcom using HTML and CSS, using the MJML framework.",
  },
  {
    id: 6,
    tag: "Email",
    title: "Uber Promotional Email",
    tools: ["HTML", "&#x2022;", "CSS", "&#x2022;", "MJML"],
    demo: "https://johnlombardi389.github.io/uberemail/",
    github: "https://github.com/johnlombardi389/uberemail",
    image: uberEmail,
    description:
      "Created a promotional email for Uber using HTML and CSS, using the MJML framework.",
  },
];

export default projectData;
