import { nanoid } from "nanoid";

// HEAD DATA
export const headData = {
  title: "James Valdez | Cinematographer", // Tab title
  lang: "en",
  description: "Jamez Valdez Portfolio",
};

// ABOUT DATA
export const aboutData = {
  img: "profile.jpg",
  paragraphOne: "",
  paragraphTwo: "",
  paragraphThree: "",
  resume: "https://www.resumemaker.online/es.php", // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: "project.jpg",
    title: "All Nighter",
    info: "A trip to the restroom leads to some crazy shit.",
    info2: "",
    url: "https://www.youtube.com/embed/oL-1agX42js",
  },
  {
    id: nanoid(),
    img: "project.jpg",
    title: "Ignite",
    info:
      "Competing ideologies cause a rift between two close friends amidst a student protest.",
    info2: "",
    url: "https://www.youtube.com/embed/S8DpurhoJNE",
  },
  {
    id: nanoid(),
    img: "project.jpg",
    title: "Downhill",
    info:
      "Getting kicked out of a party is just the start of this college student's inebriated journey.",
    info2: "",
    url: "https://www.youtube.com/embed/SWTTvcEWmeI",
  },
  {
    id: nanoid(),
    img: "project.jpg",
    title: "Bobby Ray by Tyler on Demand",
    info: "A high-octane visual experience.",
    info2: "",
    url: "https://www.youtube.com/embed/xMG_PcCc44k",
  },
];

// CONTACT DATA
export const contactData = {
  cta: "Let's keep in touch!",
  email: "jvvaldez98@gmail.com",
  networks: [
    {
      id: nanoid(),
      name: "linkedin",
      url: "linkedin.com",
    },
    {
      id: nanoid(),
      name: "youtube",
      url: "youtube.com",
    },
    {
      id: nanoid(),
      name: "vimeo",
      url: "vimeo.com",
    },
    {
      id: nanoid(),
      name: "instagram",
      url: "instagram.com",
    },
    {
      id: nanoid(),
      name: "music",
      url: "tiktok.com",
    },
  ],
};

// FOOTER DATA
export const sectionsData = [
  {
    id: "hero",
    name: "Demo",
    size: 4,  // Sizes should add up to 12
  },
  {
    id: "about",
    name: "About",
    size: 2,
  },
  {
    id: "projects",
    name: "Projects",
    size: 4,
  },
  {
    id: "contact",
    name: "Contact",
    size: 2,
  },
];
