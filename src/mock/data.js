import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Gaurav Anand', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi, I'm ",
  name: 'Gaurav Anand',
  subtitle: "I'm a Data Scientist and a Chemical Engineer.",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: "I graduated from Virginia Tech with a bachelor's degree in Chemical Engineering before falling in love with machine learning and AI. Now I study Data Science at the University of Virginia where I am pursuing my Master's degree in the field.",
  paragraphTwo: "I love challenging my boundaries and learning new skills so you can always find me in the student lounge working on my side projects! I enjoy thinking about new ways to apply data science technique to real-world problems, developing ideas for potential business and research opportunities, and applying my knowledge in statistics and computer science to build solutions.",
  paragraphThree: 'Scroll down to find out about some of the projects that I have been working on!',
  resume: 'resume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Deep learning on EEG signals with SITH',
    info: 'Developing computational models to link brain signals to human behavior based on time-series EEG data. Employing deep reinforcement learning and prediction models to enhance the predictive performance of Brain- Computer Interface (BCI) applications by decoding neural activity. Working with a scrum team in order to develop an efficient and useful solution to replace conventional DL algorithms like LSTMs for BCI applications.',
    info2: 'As part of this project, I am working with UVA Psychology in order to accurately predict the motor movements of individuals based on patterns within their brain signals that are picked up by scalp EEG electrodes.',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Interested in working together?',
  btn: 'Let me know!',
  email: 'gauvand9@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/gauvand/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/gauvand/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
