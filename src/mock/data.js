import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Portfolio', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello! my name is ',
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
  cv: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'angularjs.png',
    title: 'Angular web',
    info: '',
    info2: '',
    url: 'https://angular-web.netlify.app',
    repo: 'https://github.com/VictorFiant/Angular-Web', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'React.js Web',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'MongoDB+Express',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
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
