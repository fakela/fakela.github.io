module.exports = {
  siteTitle: 'Favour Kelvin | Software Engineer',
  siteDescription: 'Favour Kelvin is a software engineer based in Nigeria',
  siteKeywords: 'Favour Kelvin,software engineer, front-end engineer, web developer',

  siteUrl: 'http://fakela.github.io/',
  siteLanguage: 'en_US',

  name: 'Favour Kelvin',
  location: 'Nigeria',
  email: 'favourkelvin17@gmail.com',
  github: 'https://github.com/fakela',
  twitterHandle: '@fakela6',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/fakela',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/favour-kelvin/',
    },

    {
      name: 'Twitter',
      url: 'https://twitter.com/Fakela6',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
