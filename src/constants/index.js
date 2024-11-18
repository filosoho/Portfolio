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
    name: "Projects",
    href: "#projects",
  },
  {
    id: 4,
    name: "My Approach",
    href: "#myApproach",
  },
  {
    id: 5,
    name: "GitHub",
    href: "https://github.com/filosoho",
  },
  {
    id: 6,
    name: "Contact",
    href: "#contact",
  },
];

export const myProjects = [
  {
    title: "NC NEWS - News Application",
    desc: "NC NEWS is an application showcasing my ability to create a full-stack platform. It allows users to browse articles, vote on them, and add comments. The app also provides the ability to filter articles by topics and includes user authentication for deeper interaction with the content.",
    subdesc: `This project is one of my most technically challenging, built with React for the frontend and Node.js for the backend. I designed a RESTful API with Express and PostgreSQL, ensuring smooth communication between the client and server. On the frontend, I used React Router for navigation and the Context API for state management. Axios was used for making API requests, ensuring efficient and secure communication with the backend. Custom hooks helped manage state efficiently throughout the app. I also focused on creating a responsive, user-friendly interface that works seamlessly across mobile, tablet, and desktop. The backend service mimics real-world applications like Reddit, providing an API that handles CRUD operations for articles, comments, users, and topics. This approach ensures the platform is scalable and ready for real-world usage. NC NEWS is an example of my ability to build scalable, feature-rich applications, showcasing my skills in both front-end and back-end development.`,
    button: "NC NEWS",
    repo: "https://github.com/filosoho/nc-news",
    href: "https://fe-nc-news-gui8.onrender.com/",
    texture: "/textures/project/project1.avif",
    logo: "/assets/project-logo1.svg",
    alt: "NC NEWS logo - newspaper icon",
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
    subdesc: `The Autumn Chick Shopping App prototype, created in Figma, highlights my technical expertise in UI/UX design for mobile applications. This prototype focuses on clean and modern aesthetics combined with intuitive user flows. I developed a user-centric interface that prioritizes seamless interactions, essential for an enjoyable shopping experience on mobile devices. Interactive elements and a consistent design language allow users to visualize the full shopping journey, from product exploration to checkout. I utilized a component-based design approach, ensuring consistent styling and reusable elements throughout the app, which improves efficiency and maintains a cohesive look and feel. Additionally, the prototype includes touch gestures and animated transitions to simulate real user interactions and enhance engagement. By applying design tokens for color schemes and typography, I maintained a harmonious aesthetic while simplifying the design workflow. This project exemplifies my ability to blend visual design with practical usability, ensuring that the app is both appealing and functional for mobile users.`,
    button: "Autumn Chick",
    repo: "https://github.com/filosoho/UI-Prototype-Autumn-Chick-Shopping-App",
    href: "https://www.figma.com/proto/pi7lBTXrbKWaAbbgNLF8Rw/Autumn-Chick---Prototype?type=design&node-id=1-754&t=zo52pKhQZx3de15S-1&scaling=scale-down&page-id=1%3A2&starting-point-node-id=1%3A754&mode=design",
    texture: "/textures/project/project2.avif",
    logo: "/assets/project-logo5.png",
    alt: "Autumn Chick logo - autumn chick icon maple leaf",
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
    desc: `CityBite Burgers is a responsive web application developed to showcase my front-end skills in HTML, CSS, SCSS and JavaScript. This project allowed me to create a user-friendly, visually engaging platform that brings the CityBite Burgers brand’s menu to life, allowing users to browse through detailed sections of burgers, sides, desserts, and beverages with ease.`,
    subdesc: `One of my primary goals was to build an accessible interface that feels intuitive and inviting. I used SCSS to create a modular, reusable style system, which improves code maintainability and ensures a consistent design across the site. This approach made the codebase scalable and flexible—a valuable skill when working on larger applications. CSS media queries and a responsive grid system ensure optimal viewing on any device, reflecting my commitment to responsive design principles. Adding JavaScript further enhanced the interface by introducing dynamic interactions that create a more engaging user experience. Through CityBite Burgers, I focused on balancing performance and aesthetic integrity, showcasing my dedication to clean, efficient code and cohesive design. This project reflects my ability to deliver applications that are technically sound, visually appealing and tailored for a positive user experience.`,
    button: "CityBite Burgers",
    repo: "https://github.com/filosoho/CityBite-Burgers",
    href: "https://citybite-burgers.netlify.app/",
    texture: "/textures/project/project3.avif",
    logo: "/assets/project-logo4.png",
    alt: "CityBite Burgers logo - burger icon",
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
    desc: ` Creative Spot is a project built from scratch, using only HTML, CSS, media queries and some JavaScript. My vision was to create a space where art and technology intersect, allowing creativity to flourish without the weight of heavy frameworks. From the layout to the styling, everything was built to feel natural and engaging, inviting users to explore without distraction.`,
    subdesc: `With style.css and queries.css, I learned a lot about the finer points of writing CSS for responsiveness. Media queries allowed me to adapt the layout seamlessly for mobile, tablet and desktop views. This project gave me a deeper appreciation for building adaptability directly into the design, letting me control the look and feel on every device. Adding interactivity with vanilla JavaScript in scripts.js brought the site to life. Without relying on external libraries, I was able to create subtle effects that enhance the user experience without overwhelming it. This project also challenged me to problem-solve with limited resources, reinforcing my understanding of clean, efficient code. Creative Spot is reflecting a belief that even simple code can make a powerful impression. This project is a testament to how much impact you can achieve by keeping things simple and intentional.`,
    button: "Creative Spot",
    repo: "https://github.com/filosoho/CreativeSpot",
    href: "https://creative-spot.netlify.app/",
    texture: "/textures/project/project4.avif",
    logo: "/assets/project-logo2.png",
    alt: "Creative Spot logo - creative spot icon heart with hands",
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
        name: "JavaScript",
        path: "/assets/javascript.png",
      },
    ],
  },
  {
    title: "Dice Pig Game",
    desc: "The Pig Game is a two-player interactive dice game built using just HTML, CSS and JavaScript. It’s a simple yet competitive game where each player takes turns rolling a die, trying to accumulate points while avoiding the risk of rolling a 1, which would cause them to lose their turn’s score. The goal is to reach 100 points before the opponent.",
    subdesc: `One of the main technical challenges in this project was implementing the dynamic scoring system. I used JavaScript to track the score in real-time, updating the user interface based on the player’s actions. This required a solid understanding of DOM manipulation to ensure the score and game status updated smoothly during each turn. I also focused on making the game responsive using CSS, ensuring it looked and worked well across various devices, from desktops to tablets and phones. I achieved this with a flexible layout and media queries to adjust elements based on screen size. The project helped me sharpen my JavaScript skills, particularly in handling user input, event-driven behavior and working with conditional logic to manage the risk of losing points. Deploying the game on Netlify was an important step, giving me hands-on experience with hosting and sharing projects online.`,
    button: "Pig Game",
    repo: "https://github.com/filosoho/JavaScript-Projects/tree/main/PigGame",
    href: "https://dicepig-game.netlify.app/",
    texture: "/textures/project/project5.avif",
    logo: "/assets/project-logo3.png",
    alt: "Dice Pig Game logo - dice pig game icon dice",
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
    desc: "The Totoro-Pomodoro Timer is a Python-based application I developed to help users improve their productivity using the Pomodoro technique. Built with Tkinter, it offers a simple, intuitive graphical user interface that lets users manage their time by alternating between work and break intervals. ",
    subdesc: `Working on this project, I gained a deeper understanding of GUI development, particularly with Tkinter, which I used to create a clean, user-friendly interface that responds to input without delays. One of the key challenges I faced was implementing threading to ensure the timer countdowns and session transitions wouldn’t block the main UI thread. I used Python’s threading module to achieve this, reinforcing my ability to manage parallel processes in Python. Another important aspect was integrating audio notifications with pygame.mixer to signal the start of work sessions and breaks. I also implemented real-time volume control, which taught me how to manipulate sound properties dynamically within an app. Throughout this project, I improved my problem-solving skills, refining error handling and enhancing the user experience. The inclusion of Totoro-themed images made the app more engaging, making it not only functional but also enjoyable to use. This project helped me sharpen my Python skills while gaining valuable experience in integrating threading, sound and GUI elements into a cohesive application.`,
    button: "Totoro Pomodoro",
    repo: "https://github.com/filosoho/Linux-Totoro-Pomodoro-Timer",
    texture: "/textures/project/project6.avif",
    logo: "/assets/project-logo6.png",
    alt: "Totoro Pomodoro logo - totoro pomodoro icon Totoro",
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
    desc: "Filosoho Space is my personal website and online portfolio where I showcase my work and connect with developers and enthusiasts. Building this website helped me refine my front-end development skills, as I focused on crafting a user-friendly experience that highlights my projects in a clean, minimalist design.",
    subdesc: ` Using HTML, CSS and JavaScript, I ensured the site was visually appealing and easy to navigate while keeping performance in mind. A significant part of the project was optimizing the design to be responsive, allowing users to seamlessly browse the site on various devices. I also paid close attention to accessibility, making sure that all users, regardless of their needs, could easily interact with the site. By focusing on best practices in web development, such as semantic HTML and mobile-first design, I was able to create a website that not only looks good but also functions efficiently. Throughout this project, I praqcticed my skills in layout design, performance optimization and making sure the site loads quickly and remains functional. Filosoho Space reflects my commitment to clean, accessible and high-quality web development while offering a space to share my work and connect with like-minded people.`,
    button: "Filosoho Space",
    href: "https://filosoho.space/",
    texture: "/textures/project/project7.avif",
    logo: "/assets/project-logo7.png",
    alt: "Filosoho Space logo - black circle with yellow white and gray circels in the middle",
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
    desc: `Forkify is a recipe search and bookmarking app developed to help users easily find, save and view their favorite recipes from various sources. The app allows users to search recipes by keyword and adjust ingredient quantities based on their preferences.`,
    subdesc: `Forkify is built using vanilla JavaScript and integrates with a third-party API to dynamically fetch recipe data, which helped me practice my skills in working with APIs and handling asynchronous operations. One of the biggest challenges I faced was ensuring that the app’s interface remained smooth and responsive as it handled potentially large amounts of data. I focused on modular design and clean code to ensure that the application was easy to maintain and scale. This project gave me hands-on experience with JavaScript fundamentals, such as DOM manipulation, event handling and working with promises. Additionally, I learned how to manage state effectively as users interact with the app, including the ability to save favorite recipes in local storage. The app’s sleek, modern interface reflects my ability to design user-friendly applications, and through this project, I further developed my skills in JavaScript, front-end performance optimization and API integration. Forkify not only helped me enhance my technical skills but also provided a practical, real-world application of web development principles.`,
    button: "Forkify",
    repo: "https://github.com/filosoho/JavaScript-Projects/tree/main/Forkify",
    href: "https://forkify-recipes-js.netlify.app/",
    texture: "/textures/project/project8.avif",
    logo: "/assets/project-logo8.png",
    alt: "Forkify logo - fork and spoon icon",
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

export const myApproachValues = [
  {
    id: 1,
    title: "Empowerment",
    desc: `I’m all about creating an environment where everyone feels empowered. By sharing what I know and keeping the conversation open, I aim to inspire creativity and encourage innovative thinking. Together, we can lift each other up and grow, both as individuals and as a team.`,
    icon: "/assets/value1.svg",
    alt: "hand with a heart icon",
    animation: "bow",
  },
  {
    id: 2,
    title: "Diversity of Thought",
    desc: `There’s something special about working with people from different backgrounds. Each unique perspective adds to our collective brainstorming, leading to richer discussions and innovative solutions. I love the energy that comes from these diverse conversations.`,
    icon: "/assets/value2.svg",
    alt: "lightbulb icon",
    animation: "clapping",
  },
  {
    id: 3,
    title: "Pragmatic Problem-Solving",
    desc: `I take a pragmatic approach to development, balancing ambition with realistic solutions. By focusing on what works best for each project, I ensure that my contributions are both impactful and efficient, meeting the needs of users and stakeholders alike.`,
    icon: "/assets/value3.svg",
    alt: "suitcase icon",
    animation: "salute",
  },
  {
    id: 4,
    title: "Curiosity and Exploration",
    desc: `Curiosity drives my passion for development. I thrive on exploring new tools and frameworks, which keeps my work exciting and my skills sharp. This sense of adventure helps me to go through challenges with fresh perspectives and innovative solutions.`,
    icon: "/assets/value4.svg",
    alt: "book icon",
    animation: "thankful",
  },
];
