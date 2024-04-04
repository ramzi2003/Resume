import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  figma,
  nativecamp,
  itreb,
  upwork,
  helloworld,
  resta,
  travelblog,
  photography,
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
];

const services = [
  {
    title: "Front-End Developer",
    icon: web,
  },
  {
    title: "React Framework",
    icon: mobile,
  },
  {
    title: "Web Designer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Front-end Tutor",
    company_name: "Hello World",
    icon: helloworld,
    iconBg: "#FFFFFF",
    date: "August 2023 - October 2023",
    points: [
      "Conducted one-on-one lessons with a focus on individual needs.",
      "Created environment fosters confident, active student involvement through inquiry and expression.",
      "Focusing on ongoing student input and innovative methods drive continuous improvement for an enriching educational impact",
    ],
  },
  {
    title: "English Tutor",
    company_name: "NativeCamp",
    icon: nativecamp,
    iconBg: "#092846",
    date: "September 2021 - July 2023",
    points: [
      "Presented lessons both on a one-to-one basis and to groups holding up to 4 students.",
      "Stayed knowledgeable and respectful of cultural differences within the classroom.",
      "Skillfully tailored teaching style in accordance with students' needs and language understanding.",
    ],
  },
  {
    title: "Translator",
    company_name: "ITREB",
    icon: itreb,
    iconBg: "#E6DEDD",
    date: "January 2022 - June 2022",
    points: [
      "Translated various documents within tight deadlines, including legal and technical content.",
      "Used cultural background knowledge to understand idiomatic meanings of specific expressions.",
      "Proofread completed translations to catch and fix punctuation, grammatical and translation errors.",
      "Provided full Russian to English translation services.",
    ],
  },
  {
    title: "Junior Front-End Developer",
    company_name: "Upword",
    icon: upwork,
    iconBg: "white",
    date: "September 2022 - March 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Based on our interactions, I can confidently say that he is a skilled front end developer with a keen eye for detail and a passion for creating user-friendly interfaces.",
    name: "Anis Partovov",
    designation: "Friend",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "I have had the pleasure of working with him as a front end developer and can confidently say that his skills in creating intuitive and visually appealing user interfaces are truly impressive.",
    name: "Firuz Azizbekov",
    designation: "Co-worker and Friend",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I've been really impressed with his skills as a front end developer, but what stands out even more to me is his strong work ethic and commitment to creating interfaces. It's clear that you put your heart into your work!",
    name: "Ramzi Abdulalishoev",
    designation: "Friend",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
  {
    name: "RESTA restaurant",
    description:
      "Front-End part of a platform that allows users to search and reserve restaurants' seats, providing a convenient solution for their needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "responsive",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: resta,
    source_code_link: "https://ramzi2003.github.io/responsive_react-RESTA/",
  },
  {
    name: "TravelBlog",
    description:
      "Front-End part of a traveling agency website. The platform allows user to book and find information about the places.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "no-responsive",
        color: "pink-text-gradient",
      },
    ],
    image: travelblog,
    source_code_link: "https://ramzi2003.github.io/landing_page_traveling/",
  },
  {
    name: "Photography Courses",
    description:
      "Front-End part of personal website. The websit allows user to book for a demo class to know the fundamentals of photography.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "no-responsive",
        color: "pink-text-gradient",
      },
    ],
    image: photography,
    source_code_link: "https://ramzi2003.github.io/landing_page_photography/",
  },
];

export { services, technologies, experiences, testimonials, projects };
