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
    img: 'uva_psych.png',
    title: 'Deep learning on EEG signals with SITH',
    info: 'As part of this project, I am working with the folks at the Computational Memory Lab of the UVA Department of Psychology to accurately and efficiently predict human motor movements based on patterns within brain signals recorded through scalp EEG. We attempt to implement SITH -- a novel deep learning layer that attempts to mimic the way the human brain stores information by introducing a concept that is very familiar to most people -- "fuzzy memory".',
    info2: 'Our goal in this project is to develop and implement advanced deep learning algorithms on time-series EEG data in order to beat some of the most sophisticated algorithms for decoding neural activity such as Long Short Term Memory (LSTM) networks. We also aim to decrease the memory and training time required to learn on brain data so that we can advance the science of Brain-Computer Interfaces. Our results showed dramatic increases in performance when compared with several cutting edge deep learning approaches to this problem.',
    url: 'https://github.com/gauvand/SIF_Capstone',
    repo: 'https://github.com/gauvand/SIF_Capstone', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'all-of-us-graphMining.png',
    title: 'NIH All of Us Project',
    info: 'In September of 2020, I began working with UVA Data Science and Vibrant Health to analyze and interpret COVID-19 COPE survey results using data from the All of Us Research Project. The goal of our project is to measure the risk of transmission and infectivity of the virus in an effort to understand and control the spread of the virus. One of the biggest challenges in understanding the spread of the disease is identifying patterns between different groups of individuals with respect to the answers they provide in surveys.',
    info2: "I'm currently tackling these problems using a mixture of various techniques -- from simple data mining ones like association analysis to much more advanced numerical techniques ones such as diffusion maps and partition trees. In the future, I aim to build a foundation for fast and useful analysis of infectious diseases through the use of survey questionnaire data. Click the link below to see a sample of some of the work that I've done using synthetic data!",
    url: 'https://github.com/gauvand/NIH-InitialSurveyAnalysis',
    repo: 'https://github.com/gauvand/NIH-InitialSurveyAnalysis', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'spotify.png',
    title: 'Spotify Playlist Analyzer',
    info: '"What kind of music do you listen to?"',
    info2: "I've always got this question but never had an answer for it. I decided to create an application that would help users answer these questions with the help of the good folks over at Spotify. Through my application, users will be able to better understand what kind of music they listen to based on the songs in their playlists.",
    url: 'https://github.com/gauvand/Spotify-Playlist-Analyzer',
    repo: 'https://github.com/gauvand/Spotify-Playlist-Analyzer', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'rain-forecasting.png',
    title: 'Australian Rain Forecasting',
    info: 'Rainfall has impacts on many human industries like crop production, hydroelectric power generation and forestry. This is especially true in Australia, where rainfall patterns also have a tremendous impact on the spread and intensity of forest fires. In this project, my team and I analyze the "Rain in Australia" dataset on Kaggle with a focus on Bayesian Machine Learning.',
    info2: 'We implemented a Bayesian Logistic Regression model which gives us insight into the effect of each variable on the probability of rain the next day. We also developed and analyzed a hierarchical model based on location, which allows us to draw comparisons between different cities/counties in Australia. Finally, we used Markov Chain Monte Carlo sampling to approximate the posterior distribution of our parameters.',
    url: 'https://docs.google.com/presentation/d/1ln2E42Sc8hknZ8SQlZsc8CRPSLueBkP6pBU3GRnXDO8/edit?ts=5fc977bd#slide=id.g7117580564_0_461',
    repo: 'https://github.com/gauvand/DS6014-FinalProject', // if no repo, the button will not show up
  }
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
