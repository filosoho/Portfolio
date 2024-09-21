export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const skillsAndContributions = [
  {
    id: 1,
    name: "Creative Collaboration",
    tag: "Team Player",
    img: "assets/skills1.svg",
    desc: "I thrive in collaborative environments, where diverse perspectives can lead to innovative solutions. I enjoy brainstorming with teams, sharing ideas, and collectively bringing projects to life.",
  },
  {
    id: 2,
    name: "Strong Work Ethic",
    tag: "Dedicated Professional",
    img: "assets/skills2.svg",
    desc: "I approach my work with dedication and perseverance. I believe in delivering quality results and consistently meeting deadlines, even under pressure, while maintaining a positive attitude.",
  },
  {
    id: 3,
    name: "Mentorship & Knowledge Sharing",
    tag: "Supportive Mentor",
    img: "assets/skills3.svg",
    desc: "I value the importance of mentorship and knowledge sharing. I enjoy supporting others in their learning journeys, whether through code reviews, pair programming, or simply sharing insights from my own experiences.",
  },
  {
    id: 4,
    name: "Analytical Thinking",
    tag: "Problem Solver",
    img: "assets/skills4.svg",
    desc: "I possess strong analytical skills that allow me to break down complex problems into manageable parts. This enables me to find effective solutions and optimize processes for better efficiency.",
  },
];

export const myProjects = [
  {
    title: "NC NEWS - News Application",
    desc: "NC News is an application that allows users to view articles, vote on them and add comments. The app provides different categories of articles and users can filter articles by topics. Users can also log in to interact more deeply with the content.",
    subdesc:
      "This is a news application built with React for the frontend, using React Router for navigation and Context API for state management. Axios is used for API calls. The platform allows users to read and interact with articles on various topics. The backend service was built to provide data programmatically, mimicking a real-world application like Reddit. The API is designed to interact with a PostgreSQL database using node-postgres and allows for various operations related to articles, comments, users, and topics.",
    href: "https://fe-nc-news-gui8.onrender.com/",
    texture: "/textures/project/project1.png",
    logo: "/assets/project-logo1.svg",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "Express.js",
        path: "assets/expressjs.png",
      },
      {
        id: 3,
        name: "API",
        path: "/assets/api.png",
      },
      {
        id: 4,
        name: "PostgreSQL",
        path: "/assets/psql.png",
      },
      {
        id: 5,
        name: "CSS",
        path: "/assets/css.png",
      },
    ],
  },
  {
    title: "Autumn Chick - Shopping App UI/Prototype",
    desc: "Autumn Chick is a Figma-based shopping app prototype that showcases a stylish and user-centric interface for fashion shopping.",
    subdesc:
      "This prototype was designed using Figma, focusing on clean and modern aesthetics combined with intuitive user flows. Interactive elements and consistent design language allow users to visualize the full shopping journey, from product exploration to checkout.",
    href: "https://www.figma.com/proto/pi7lBTXrbKWaAbbgNLF8Rw/Autumn-Chick---Prototype?type=design&node-id=1-754&t=zo52pKhQZx3de15S-1&scaling=scale-down&page-id=1%3A2&starting-point-node-id=1%3A754&mode=design",
    texture: "/textures/project/project2.png",
    logo: "/assets/project-logo5.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "Figma",
        path: "/assets/figma.png",
      },
      {
        id: 2,
        name: "UI/UX",
        path: "/assets/ui.png",
      },
    ],
  },
  {
    title: "CityBite Burgers Website",
    desc: "The CityBite Burgers website is designed to provide a seamless and visually appealing experience for users. From a sleek design to interactive menus, the site combines style and functionality to engage visitors.",
    subdesc:
      "Built with HTML, CSS, JavaScript. This project showcases a modern and user-friendly web development project aimed at bringing the culinary world of CityBite Burgers to life.",
    href: "https://citybite-burgers.netlify.app/",
    texture: "/textures/project/project3.png",
    logo: "/assets/project-logo4.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "HTML",
        path: "assets/html.png",
      },
      {
        id: 2,
        name: "CSS",
        path: "/assets/css.png",
      },
      {
        id: 3,
        name: "SCSS",
        path: "/assets/sass.png",
      },
      {
        id: 4,
        name: "JavaScript",
        path: "/assets/javascript.png",
      },
    ],
  },
  {
    title: "Creative Spot",
    desc: "Creative Spot is a web platform that explores the convergence of art and technology. A dynamic space designed to celebrate creativity, foster innovation, and unite a global community of creatives.",
    subdesc:
      "A dynamic web platform uniting art and technology. Built with HTML, CSS, and JavaScript, it features responsive design for seamless user interaction.",
    href: "https://creative-spot.netlify.app/",
    texture: "/textures/project/project4.png",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "HTML",
        path: "assets/html.png",
      },
      {
        id: 2,
        name: "CSS",
        path: "/assets/css.png",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/javascript.png",
      },
    ],
  },
  {
    title: "Dice Pig Game",
    desc: "An interactive two-player dice game developed with HTML, CSS, and JavaScript. Players take turns rolling a die, aiming to reach 100 points first while managing the risk of rolling a 1 and losing their current turn score.",
    subdesc:
      "The game features dynamic UI updates, score tracking, and responsive design, providing an engaging and competitive experience. Hosted on Netlify for seamless deployment and access.",
    href: "https://dicepig-game.netlify.app/",
    texture: "/textures/project/project5.png",
    logo: "/assets/project-logo3.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, rgba(5, 56, 70 , 0.97), rgba(3, 54, 75, 0.60)), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(16, 63, 86, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "HTML",
        path: "assets/html.png",
      },
      {
        id: 2,
        name: "CSS",
        path: "/assets/css.png",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/javascript.png",
      },
    ],
  },
  {
    title: "Totoro-Pomodoro Timer",
    desc: "Totoro-Pomodoro is a Pomodoro timer application designed to help users manage their time effectively by breaking work into intervals with short breaks in between. Inspired by the Pomodoro technique, the app provides a fun and simple way to boost productivity.",
    subdesc:
      "This Pomodoro timer is built using Python, offering a lightweight and efficient time management tool for Linux users. The application features customizable work and break intervals, visual notifications and an intuitive command-line interface. The design emphasizes simplicity and productivity, making it easy for users to integrate the tool into their daily workflow.",
    href: "https://github.com/filosoho/Linux-Totoro-Pomodoro-Timer",
    texture: "/textures/project/project6.png",
    logo: "/assets/project-logo6.png",
    logoStyle: {
      backgroundColor: "#2C6E49",
      background:
        "linear-gradient(0deg, rgba(44, 110, 73, 0.97), rgba(67, 160, 100, 0.60)), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(44, 110, 73, 1)",
      boxShadow: "0px 0px 60px 0px rgba(44, 110, 73, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/python.png",
      },
      {
        id: 2,
        name: "Linux",
        path: "/assets/linux.png",
      },
    ],
  },
  {
    title: "Filosoho Space - Personal Website",
    desc: "Filosoho Space is a personal website that serves as an online portfolio. It showcases projects and provides a platform for connecting with fellow developers and enthusiasts.",
    subdesc:
      "This website is built with HTML, CSS and JavaScript, offering a clean, minimalist design with a focus on readability and ease of navigation. Filosoho Space features responsive design and project highlights. The site is optimized for performance and accessibility, reflecting best practices in web development while providing a personal touch.",
    href: "https://filosoho.space/",
    texture: "/textures/project/project7.png",
    logo: "/assets/project-logo7.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "HTML",
        path: "assets/html.png",
      },
      {
        id: 2,
        name: "CSS",
        path: "/assets/css.png",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/javascript.png",
      },
    ],
  },
  {
    title: "Forkify - Recipe Finder App",
    desc: "Forkify is a recipe search and bookmarking application that allows users to find, view and save their favorite recipes from various sources. It provides an easy way to search for recipes by keyword and view detailed instructions.",
    subdesc:
      "Built using vanilla JavaScript, Forkify integrates with a third-party API to fetch recipe data dynamically. The app features a modern interface that allows users to search recipes, adjust ingredient quantities and save favorite dishes to a personalized list. With an emphasis on clean code and modular design, this project showcases the power of JavaScript in building interactive web applications.",
    href: "https://forkify-recipes-js.netlify.app/",
    texture: "/textures/project/project8.png",
    logo: "/assets/project-logo8.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
      // boxShadow: "0px 0px 60px 0px rgba(246, 162, 132, 0.5)",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "JavaScript",
        path: "/assets/javascript.png",
      },
      {
        id: 2,
        name: "API",
        path: "/assets/api.png",
      },
      {
        id: 3,
        name: "HTML",
        path: "/assets/html.png",
      },
      {
        id: 4,
        name: "CSS",
        path: "/assets/css.png",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMedium, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.43 : isMobile ? 0.65 : 1,
    deskPosition: isSmall
      ? [0.35, 5, 3.5]
      : isMedium
      ? [0.35, 3, 3.5]
      : isMobile
      ? [0.35, 0, 3.5]
      : isTablet
      ? [0.35, -2, 3.5]
      : [0.35, -2, 3.5],
    deskRotation: isSmall
      ? [0.15, 0, 0]
      : isMedium
      ? [0.1, 0, 0]
      : isMobile
      ? [-0.03, 0, 0]
      : isTablet
      ? [-0.1, 0, 0]
      : [-0.1, 0, 0],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Framer",
    pos: "Lead Web Developer",
    duration: "2022 - Present",
    title:
      "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: "/assets/framer.svg",
    animation: "victory",
  },
  {
    id: 2,
    name: "Figma",
    pos: "Web Developer",
    duration: "2020 - 2022",
    title:
      "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: "/assets/figma.svg",
    animation: "clapping",
  },
  {
    id: 3,
    name: "Notion",
    pos: "Junior Web Developer",
    duration: "2019 - 2020",
    title:
      "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: "/assets/notion.svg",
    animation: "salute",
  },
];
