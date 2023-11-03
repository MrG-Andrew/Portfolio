import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  bootstrap,
  freelance,
  elnady,
  reservationApp,
  imageGenerator,
  hangman
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Freelance",
    icon: freelance,
    iconBg: "#383E56",
    date: "September 2021 - May 2022",
    points: [
      "Develop functional and appealing web and mobile-based applications.",
      "Using React, React Native, Redux, Webpack, HTML, CSS, Sass, JS.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Elnady Engineering",
    icon: elnady,
    iconBg: "#E6DEDD",
    date: "May 2021 - Present",
    points: [
      "Worked on the company’s product - SIDLAB 5",
        "an acoustic simulation software used to predict and evaluate the acoustic performance",
        "which is an app built with the Electron.js Framework, React.js, Spring Boot and MATLAB",
        "In addition to its license Manager website (www.my.sidlab.se) and the Wordpress website (sidlab.se)",
    ],
  },
  // {
  //   title: "Frontend Developer",
  //   company_name: "Dexi",
  //   icon: dexu, //dexi icon
  //   iconBg: "#383E56",
  //   date: "Nov 2023 - Present",
  //   points: [
  //     "",
  //   ],
  // },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Reservation App",
    description:
      "Web-based platform that allows users to reserve rooms with a lot of options like capacity, ac and etc..",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "antd",
        color: "pink-text-gradient",
      },
    ],
    image: reservationApp,
    source_code_link: "https://github.com/MrG-Andrew/church-reservation",
  },
  {
    name: "Image Generator App",
    description:
      "Web application that enables users to generate images based on their prompts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "open ai",
        color: "pink-text-gradient",
      },
    ],
    image: imageGenerator,
    source_code_link: "https://github.com/MrG-Andrew/ai-image-generator",
  },
  {
    name: "Hangman Game",
    description:
      "A Game for the player to guess a random word each time",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: hangman,
    source_code_link: "https://github.com/MrG-Andrew/hagman-ts",
  },
];

export { services, technologies, experiences, projects };
