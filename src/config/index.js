module.exports = {
  siteTitle: 'Reactive Indonesia | Software Developer',
  siteDescription:
    'Reactive Indonesia is a Digital Agency based in Jakarta, Indonesia who specializes in developing (and occasionally designing) exceptional, high-quality websites and applications.',
  siteKeywords:
    'reactive indonesia, reactive, indonesia, react, active, digital agency, agency, software engineer, front-end engineer, web developer, javascript, jakarta, indonesia',
  siteUrl: 'https://reactive.id',
  siteLanguage: 'id_ID',
  siteManifest: {
    name: 'ReactiveId',
    short: 'reactiveid',
  },
  googleAnalyticsID: '',
  googleVerification: '',
  name: 'Ervandra Halim',
  location: 'Jakarta, Indonesia',
  email: 'ervandra.halim@gmail.com',
  github: 'https://github.com/ervandra',
  twitterHandle: '@vahnisme',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/ervandra',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/ervandra',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/ervandra',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/vahnisme',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/vahnisme',
    },
  ],

  primaryColor: '#222',
  backgroundColor: '#f8f8f8',

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
