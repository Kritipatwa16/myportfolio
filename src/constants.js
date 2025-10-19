// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import vercelLogo from './assets/tech_logo/vercel.png';


// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import school_logo from './assets/education_logo/school_logo.png';

// Project Section Logo's
import cryptoplace from './assets/work_logo/cryptoplace.png';
import chatapp from './assets/work_logo/chatapp.png';
import ecommerce from './assets/work_logo/ecommerce.png';
import prescripto from './assets/work_logo/prescripto.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    
    ],
  },
  {
    title: 'Backend',
    skills: [
     
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'JavaScript', logo: javascriptLogo },
     
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
];

  export const education = [
    
    {
      id: 0,
      img: school_logo,
      school: "St. Gregorios Senior Secondary School Udaipur, Rajasthan",
      date: "Apr 2020 - March 2021",
      grade: "95.6%",
      desc: "I completed my class 12 education from St. Gregorios Senior Secondary School, Udaipur, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 1,
      img: school_logo,
      school: "St. Gregorios Senior Secondary School Udaipur, Rajasthan",
      date: "Apr 2018 - March 2019",
      grade: "94.2%",
      desc: "I completed my class 10 education from St. Gregorios Senior Secondary School, Udaipur, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
   {
  id: 0,
  title: "Prescripto – Doctor Appointment Booking Website",
  description:
    "Prescripto is a responsive and user-friendly doctor appointment booking platform that connects patients with healthcare professionals seamlessly. Users can browse doctors, view their profiles, schedule appointments online, and manage their bookings efficiently. Built with the MERN stack, Prescripto ensures smooth navigation, real-time appointment handling, and secure authentication for both patients and doctors.",
  image: prescripto,
  tags: ["React JS", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
  github: "https://github.com/Kritipatwa16/Prescripto", // replace with your actual repo link
  webapp: "https://prescripto-kappa-ten.vercel.app/", // replace with your deployed link
}
,
   {
  id: 1,
  title: "E-Commerce Platform",
  description:
    "A fully functional full-stack e-commerce application designed to deliver a smooth online shopping experience. It includes features like product listings, cart management, order processing, authentication, and a modern UI. Built using the MERN stack, the platform focuses on scalability, responsive design, and real-time updates to enhance user experience.",
  image: ecommerce,
  tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
  github: "https://github.com/Kritipatwa16/E-commerce",
  webapp: "https://e-commerce-frontend-five-iota.vercel.app/",
}
,
   {
  id: 2,
  title: "QuickChat - Real-Time Chat Application",
  description:
    "A full-stack real-time chat application built using the MERN stack and Socket.io. It enables users to chat instantly with real-time messaging, authentication, message status updates, and a modern UI for a seamless experience.",
  image: chatapp,
  tags: ["React JS", "Node.js", "Express.js", "MongoDB", "Socket.io", "Tailwind CSS"],
  github: "https://github.com/Kritipatwa16/chatapp",
  webapp: "https://chatapp-mu-plum.vercel.app/login",
},
{
  id: 3,
  title: "CryptoPlace – Cryptocurrency Tracker",
  description:
    "A responsive React.js application that provides real-time cryptocurrency data. Users can track prices, view coin stats, and analyze market trends through a smooth and engaging UI powered by live crypto APIs.",
  image: cryptoplace,
  tags: ["React JS", "HTML", "CSS", "JavaScript", "API"],
  github: "https://github.com/Kritipatwa16/cryptoplace",
  webapp: "https://cryptoplace-kriti.vercel.app/",
},
    
  ];  