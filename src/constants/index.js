import {
  oracle,mysql,gcp,linux,
  spring,
  springboot,
  angular,
  iedc,
  ksum,
  interland,
  JAVA,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  sparkfoundation,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
  {
    id: "linkedin",
    title: "Linkedin",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Spring Boot Developer",
    icon: mobile,
  },
  {
    title: "Angular Developer",
    icon: backend,
  },
  {
    title: "Java Backend Developer",
    icon: creator,
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
    name: "Angular",
    icon: angular,
  },
  
  {
    name: "Java",
    icon: JAVA,
  },

  {
    name: "Spring",
    icon: spring,
  },
  {
    name: "Spring Boot",
    icon: springboot,
  },
  {
    name: "Oracle",
    icon: oracle,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  
  {
    name: "linux",
    icon: linux,
  },
  {
    name: "gcp",
    icon: gcp,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Junior Developer | COO",
    company_name: "IEDC | Kerala StartUp Mission",
    icon: ksum,
    iconBg: "#383E56",
    date: "March 2020 - August 2022",
    points: [
      "Role was Cheif Operation Officer Which is the part of Kerala Startup Mission",
      "Developed and maintained web applications using React.js and other related technologies.",
      "Collaborating with clients as a part of student startup and prodvided digital marketing supports.",
      "Conducted events which includes coding events inorder for networking with other enthusiats.",
    ],
  },
  {
    title: "Data Science Intern",
    company_name: "The Spark Foundations",
    icon: sparkfoundation,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developed Machine Learning models as a part of learning.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Contributions have been done here.",
      "Participated in Several events Here.",
    ],
  },
  {
    title: "Full Stack Developer | SDE",
    company_name: "Interland",
    icon: interland,
    iconBg: "#383E56",
    date: "Aug 2022 - Present",
    points: [
      "Developing and maintaining enterprise level banking applications using Spring boot,Angular and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews.",
    ],
  },
];

const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
