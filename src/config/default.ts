//defaults.ts
const config = {
  theme: {
    colors: {
      primary: '#2d5ff1',
      background: '#2d5ff1',
      text: {
        primary: '#333333',
        secondary: '#666666',
      },
    },
    fontSizes: {
      logo: 'text-2xl',
      heading: 'text-4xl font-bold',
      subheading: 'text-2xl',
      body: 'text-lg',
      button: 'text-lg',
    },
    spacing: {
      containerPadding: 'p-8',
      elementSpacing: 'mb-6',
    },
    borderRadius: 'rounded-lg',
  },
  copy: {
    logo: 'Cakewalk',
    greeting: 'Hey Business Owner',
    steps: [
      {
        question: "Let's start with the hardest question. What's your Zip code?",
        input: 'zip',
        headline: "Let's get started",
        subHeadline: "We'll need your zip code to provide accurate information.",
        visual: "/public/step1.png/step1.png",
        funFact: "Did you know? The US Postal Service processes and delivers 472.1 million mail pieces each day",
      },
      {
        question: 'Tell me, when is your birthday?',
        input: 'age',
        headline: "Age matters",
        subHeadline: "Your age helps us tailor our services to you.",
        visual: "/path/to/step2.png",
        funFact: "The world's population is aging: by 2050, 1 in 6 people in the world will be over age 65!",
      },
      {
        question: 'Do you already have a Cakewalk account?',
        options: ['YES', 'NOPE'],
        headline: "Almost there!",
        subHeadline: "Let us know if you're already part of the Cakewalk family.",
        visual: "/path/to/step3.png",
        funFact: "Over 4.66 billion people were active internet users as of January 2021.",
      },
    ],
    buttons: {
      next: 'NEXT',
    },
  },
} as const;

export default config;

export type Config = typeof config;