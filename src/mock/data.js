import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Portfolio', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello! My name is ',
  name: 'Victor Fiant',
  subtitle: 'I am a Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'Perfil7.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  cv: 'https://drive.google.com/file/d/12JXj0CdOvuIf3Ti_lfdROudVF7U_wFQl/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'next.png',
    title: 'React.js - Next.js Social Media',
    info:
      'It was completely developed using Typescript with React.js, Next.js, TailwindCSS and TypeORM. Express.js as back-end and the Database was PostgreSQL. It was deployed on AWServices.',
    info2: '',
    url: 'https://52.15.236.32',
    repo: 'https://github.com/VictorFiant/s-media', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'react.png',
    title: 'React.js E-commerce',
    info:
      'Creative and compact Marketplace, completely developed using JavaScript with React.js, Material-UI, HTML5, and CSS. Used Commerce.js as the back-end that returns products and product details. ',
    info2: '',
    url: 'https://merkato.netlify.app/',
    repo: 'https://github.com/VictorFiant/e-commerce', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'react.png',
    title: 'React.js Video-chat',
    info:
      'Realtime Chat Application. It has been used React on the front end, with NodeJS + Socket.io web socket library on the back end. ',
    info2: '',
    url: 'https://video-c-app.netlify.app',
    repo: 'https://github.com/VictorFiant/chat-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'mongodb1.png',
    title: 'MongoDB+Express',
    info: 'Small REST API developed in Express.js using MongoDB. It has used all of the methods Post, Put, Get, Update and Delete, which can be manipulate the operations on the database. Test implemented in Postman.',
    info2: '',
    url: 'https://github.com/VictorFiant/UTN-Final',
    repo: 'https://github.com/VictorFiant/UTN-Final', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'angular.png',
    title: 'Angular web',
    info: '',
    info2: '',
    url: 'https://angular-web.netlify.app',
    repo: 'https://github.com/VictorFiant/Angular-Web', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/victor-fiant-792a70164/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/VictorFiant',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
