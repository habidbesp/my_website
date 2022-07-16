import html5Logo from "./images/logos/html5.svg";
import css3 from "./images/logos/css3.svg";
import reactLogo from "./images/logos/react.svg";
import sassLogo from "./images/logos/sass.svg";
import javascriptLogo from "./images/logos/javascript.svg";
import bootstrapLogo from "./images/logos/bootstrap.svg";
import gitIcon from "./images/logos/git-icon.svg";
import mongoIcon from "./images/logos/mongodb.svg";
import nodeIcon from "./images/logos/nodejs.svg";
import expressLogo from "./images/logos/express.svg";
import cloudinaryLogo from "./images/logos/cloudinary.svg";
import mongoose from "./images/logos/mongoose_js.svg";
import mui from "./images/logos/material-ui.svg";
import reactBootstrap from "./images/logos/react-bootstrap.svg";
import lottie from "./images/quiz-pictures/lottie-files.svg";
import quizAPI from "./images/quiz-pictures/quizApi-logo.svg";
import phaserLogo from "./images/phaser-pictures/image2vector.svg";
import felaLogo from "./images/logos/fela.svg";
import graphqlLogo from "./images/logos/graphql-icon.svg";
import apolloClientLogo from "./images/logos/apollo-client-logo.svg";

import erwerk1 from "./images/erwerk-pictures/erwerk_1.png";
import erwerk2 from "./images/erwerk-pictures/erwerk_2.png";
import erwerk3 from "./images/erwerk-pictures/erwerk_3.png";

import phaser from "./images/phaser-pictures/phaser_3.png";
import phaser2 from "./images/phaser-pictures/gameStarts.png";
import phaser3 from "./images/phaser-pictures/gameOver.png";

import quiz1 from "./images/quiz-pictures/quiz_1.png";
import quiz2 from "./images/quiz-pictures/quiz_2.png";
import quiz3 from "./images/quiz-pictures/quiz_3.png";
import quiz4 from "./images/quiz-pictures/quiz_4.png";

import staBer1 from "./images/sta-ber-pictures/sta-ber1.png";
import staBer2 from "./images/sta-ber-pictures/sta-ber2.png";
import staBer3 from "./images/sta-ber-pictures/sta-ber3.png";
import staBer4 from "./images/sta-ber-pictures/sta-ber4.png";
import staBer5 from "./images/sta-ber-pictures/sta-ber5.png";
import staBer6 from "./images/sta-ber-pictures/sta-ber6.png";

// tasks book
import tasksBook1 from "./images/tasks-book-pictures/dashboard.png";
import tasksBook2 from "./images/tasks-book-pictures/light_modus.png";
import tasksBook3 from "./images/tasks-book-pictures/loggin.png";
import tasksBook4 from "./images/tasks-book-pictures/create_task_modal.png";
import tasksBook5 from "./images/tasks-book-pictures/profile.png";
import tasksBook6 from "./images/tasks-book-pictures/update_profile_modal.png";
import tasksBook7 from "./images/tasks-book-pictures/responsive.png";

export const dataSkills = [
  {
    image: html5Logo,
    alt: "html5-logo",
    name: "html5",
    learned: true,
  },
  {
    image: css3,
    alt: "css3-logo",
    name: "css3",
    learned: true,
  },
  {
    image: sassLogo,
    alt: "sass-logo",
    name: "sass",
    learned: true,
  },
  {
    image: bootstrapLogo,
    alt: "bootstrap-logo",
    name: "bootstrap",
    learned: true,
  },
  {
    image: reactBootstrap,
    alt: "react-bootstrap-logo",
    name: "react-bootstrap",
    learned: true,
  },
  {
    image: felaLogo,
    alt: "fela-logo",
    name: "fela",
    learned: true,
  },
  {
    image: javascriptLogo,
    alt: "javascript-logo",
    name: "javascript",
    learned: true,
  },
  {
    image: reactLogo,
    alt: "react-logo",
    name: "react",
    learned: true,
  },
  {
    image: nodeIcon,
    alt: "node-logo",
    name: "nodejs",
    learned: false,
  },
  {
    image: mongoIcon,
    alt: "mongo-logo",
    name: "mongodb",
    learned: true,
  },
  {
    image: mongoose,
    alt: "mongoose-logo",
    name: "mongoose",
    learned: true,
  },
  {
    image: expressLogo,
    alt: "express-logo",
    name: "express",
    learned: true,
  },
  {
    image: graphqlLogo,
    alt: "graphql",
    name: "graphql",
    learned: true,
  },
  {
    image: apolloClientLogo,
    alt: "apollo client",
    name: "apollo client",
    learned: true,
  },
  {
    image: gitIcon,
    alt: "git-logo",
    name: "git",
    learned: true,
  },
  {
    image: cloudinaryLogo,
    alt: "cloudinary-logo",
    name: "cloudinary",
    learned: true,
  },
  {
    image: mui,
    alt: "mui-logo",
    name: "MaterialUI",
    learned: false,
  },
];

export const projectsData = [
  {
    id: "5f4e5202da9fa6465440e7e6",
    title: "Erwerk",
    sentence: "The Furniture Shop",
    demoLink: "https://habidbesp.github.io/furniture.github.io/",
    githubLink: "https://github.com/habidbesp/furniture.github.io",
    technologies: [
      {
        image: html5Logo,
        alt: "html5-logo",
        name: "html5",
        learned: true,
      },
      {
        image: css3,
        alt: "css3-logo",
        name: "css3",
        learned: true,
      },
      {
        image: bootstrapLogo,
        alt: "bootstrap-logo",
        name: "bootstrap",
        learned: true,
      },
    ],
    features: [
      {
        order: 1,
        image: erwerk1,
        // description: `The idea behind this project is to create a page for a furniture store, where the visitor is automatically attracted by the elegance of the product for sale.
        // In this group project, I had the opportunity to experience teamwork planning, as well as practice GIT and GitHub working from different branches and creating pull requests.`,
        description: `The story behind this project was brought to live by a furniture store, that intended to have a page where visitors would immediately get attracted by the elegance and class of the product being advertised. It was a group project, and I had the opportunity to experience teamwork planning, as well as practice GIT and GitHub working from different branches and creating pull requests.
                `,
      },
      {
        order: 2,
        image: erwerk2,
        description: `The page has a horizontally scrollable gallery, thus making it easy for the visitor to choose between the different product categories.`,
      },
      {
        order: 3,
        image: erwerk3,
        description: `By selecting a category, visitors will find the items for sale and will eventually be able to add to them shopping cart.`,
      },
    ],
  },
  {
    id: "61633ce18699e6e264d7b397",
    title: "Game",
    sentence: "Jump & Run",
    demoLink: "https://habidbesp.github.io/new_project_game.io/",
    githubLink: "https://github.com/habidbesp/new_project_game.io",
    technologies: [
      {
        image: phaserLogo,
        alt: "phaser3-logo",
        name: "Phaser3",
        learned: true,
      },
      {
        image: javascriptLogo,
        alt: "javascript-logo",
        name: "javascript",
        learned: true,
      },
    ],
    features: [
      {
        order: 1,
        image: phaser,
        description: `Phaser3 is a fast, free and fun open-source framework for canvas and WebGL powered browser game. It offers a unique user experience, and this framework surprises by a comprehensive and insightful set of possibilities at building a game.`,
      },
      {
        order: 2,
        image: phaser2,
        description: `In a simple but provenly fun way, PHASER 3 explains how to develop your game by using different features like animations and physics from different libraries like matter.js and arcade.js.

                The objective in this game is to collect as many coins as possible using the cursor "right" and "left" to move in the "X" axis, and the cursor "up" to jump over the platforms ("Y" axis).`,
      },
      {
        order: 3,
        image: phaser3,
        description: `Each time the player collects a coin, the score will increase 10 points. If the player touches a bomb, the game finishes by displaying the message "Game Over".`,
      },
    ],
  },
  {
    id: "5f593108b41f145442dcb80a",
    title: "Quiz",
    sentence: "Javascript Quiz",
    demoLink: "https://habidbesp.github.io/quiz/",
    githubLink: "https://github.com/habidbesp/quiz/tree/master",
    technologies: [
      {
        image: reactLogo,
        alt: "react-logo",
        name: "react",
        learned: true,
      },
      {
        image: quizAPI,
        alt: "quizApi-logo",
        name: "QuizApi",
        learned: true,
      },
      {
        image: bootstrapLogo,
        alt: "bootstrap-logo",
        name: "bootstrap",
        learned: true,
      },
      {
        image: reactBootstrap,
        alt: "react-bootstrap-logo",
        name: "react-bootstrap",
        learned: true,
      },
      {
        image: sassLogo,
        alt: "sass-logo",
        name: "sass",
        learned: true,
      },
      {
        image: lottie,
        alt: "lottie-logo",
        name: "LottieFiles",
        learned: true,
      },
    ],
    features: [
      {
        order: 1,
        image: quiz1,
        description: `Using an API ( QuizApi ) and getting inspired by the QuizApi Homepage: this Quiz is about basic Javascript questions. Using React.js, learning how to implement the logic to create a quiz, and implementing LottieFiles animations with the LottieWeb package.  Developing this project was highly insightful and offers multiple learnings for future projects.
                `,
      },
      {
        order: 2,
        image: quiz2,
        description:
          "Starting the quiz, you have the option to choose how many questions you want to answer.",
      },
      {
        order: 3,
        image: quiz3,
        description:
          "Once you have started the quiz you will have the possibility to navigate through the questions by clicking on the boxes, or by using the buttons at the bottom.",
      },
      {
        order: 4,
        image: quiz4,
        description:
          "Once you submit your answers, you will find your average, as well as the number of correct or false answers that you provided.",
      },
    ],
  },
  {
    id: "5f592fc65109405423129df4",
    title: "Staging Berlin",
    sentence: "Job-Searching Platform For Independent Theatre Artist",
    demoLink: "https://staging-berlin.vercel.app/",
    githubLink: "https://github.com/stagingBerlin",
    technologies: [
      {
        image: sassLogo,
        alt: "sass-logo",
        name: "sass",
        learned: true,
      },
      {
        image: mui,
        alt: "mui-logo",
        name: "MaterialUI",
        learned: false,
      },
      {
        image: reactLogo,
        alt: "react-logo",
        name: "react",
        learned: true,
      },
      {
        image: mongoIcon,
        alt: "mongo-logo",
        name: "mongodb",
        learned: true,
      },
      {
        image: mongoose,
        alt: "mongoose-logo",
        name: "mongoose",
        learned: true,
      },
      {
        image: expressLogo,
        alt: "express-logo",
        name: "express",
        learned: true,
      },
      {
        image: cloudinaryLogo,
        alt: "cloudinary-logo",
        name: "cloudinary",
        learned: true,
      },
    ],
    features: [
      {
        order: 1,
        image: staBer1,
        description: `The concept behind this project is to offer a platform for independent artists in the area of Berlin. Artists in various spaces often struggle at finding projects to participate in or to easily connect with the right people to source their own projects. This platform helps exactly on these challenges and intends to help artists and project owners in further developing their skills and career by expanding their access to a related network of people.`,
      },
      {
        order: 2,
        image: staBer2,
        description: `With a basic authentication (email and password), the user can open a profile, either as someone searching for a job or as an employer.`,
      },
      {
        order: 3,
        image: staBer3,
        description: `Once users have a profile, they can update their details including a profile picture. They can also browse through other users’ profiles, various ongoing projects and then even apply or save them as favorites to their own profile. All is accessible from the user's own dashboard.`,
      },
      {
        order: 4,
        image: staBer4,
        description: `The employer (artist director) can upload their own projects to the platform adding all desired details and images...`,
      },
      {
        order: 5,
        image: staBer5,
        description:
          "...and can add job offers for other artists, depending on the staffing needs of the artist's own project.",
      },
      {
        order: 6,
        image: staBer6,
        description:
          "Artists can apply and send a message to a project owner; in response, the project owner can either accept or reject the request.",
      },
    ],
  },
  {
    id: "6152de5173549ad48f34a0c3",
    title: "Tasks Book",
    sentence: "Manage And Classify Your Daily Tasks By Categories",
    demoLink: "https://tasks-book-nine.vercel.app/",
    githubLink: "https://github.com/Task-book-app",
    technologies: [
      {
        image: reactLogo,
        alt: "react-logo",
        name: "react",
        learned: true,
      },
      {
        image: felaLogo,
        alt: "fela-logo",
        name: "fela",
        learned: true,
      },
      {
        image: mongoIcon,
        alt: "mongo-logo",
        name: "mongodb",
        learned: true,
      },
      {
        image: mongoose,
        alt: "mongoose-logo",
        name: "mongoose",
        learned: true,
      },
      {
        image: graphqlLogo,
        alt: "graphql",
        name: "graphql",
        learned: true,
      },
      {
        image: apolloClientLogo,
        alt: "apollo client",
        name: "apollo client",
        learned: true,
      },
      {
        image: expressLogo,
        alt: "express-logo",
        name: "express",
        learned: true,
      },
      {
        image: cloudinaryLogo,
        alt: "cloudinary-logo",
        name: "cloudinary",
        learned: true,
      },
    ],
    features: [
      {
        order: 1,
        image: tasksBook1,
        description: `The idea behind this project was to create a to-do list, and take it to something more than just a list, presenting it as an interface where users could have a sense of order and feel motivated to list their daily tasks.`,
      },
      {
        order: 2,
        image: tasksBook2,
        description: `The interface has a dark and light mode, this helps users with eyestrain problems. Light mode is shown.`,
      },
      {
        order: 3,
        image: tasksBook3,
        description: `With only email and password, users will be able to have a profile where they can start writing their tasks.`,
      },
      {
        order: 4,
        image: tasksBook4,
        description: `Once a user profile is obtained, users will be able to start writing their tasks and classify them by categories.`,
      },
      {
        order: 5,
        image: tasksBook5,
        description: `The interface has a progress chart where users can compare the number of tasks per category that they have created.
        There is also a section where users can look at their profile data.`,
      },
      {
        order: 6,
        image: tasksBook6,
        description: `The data, as well as the user image, can be updated.`,
      },
      {
        order: 7,
        image: tasksBook7,
        description: `The interface is completely responsive and perfectly visible from any device.`,
      },
    ],
  },
];
