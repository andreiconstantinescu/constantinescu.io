export default [
  {
    company: 'Partners Capital LLP',
    description:
      'Partners Capital Investment Group, LLC is an Outsourced Investment Office that serves endowments, foundations, pensions, investment professionals, and high-net-worth families in Europe, North America and Asia.',
    startDate: 1567292400000,
    endDate: null,
    type: 'contract',
    jobTitle: 'frontend developer',
    techStack: [
      'react-js',
      'redux',
      'redux-thunk',
      'reselect',
      'jest',
      'cypress',
      'typescript'
    ],
    tasks: `
  - contributed to the transition of the existing excel balance sheet to a fully fledged Reactjs based web app by developing various features dealing with large sets of data being delivered by different internal api endpoints.
  - improved the overall performance by 35% of the time to interactive and  by 25% of the calculation times by making use of reselect's custom memoization feature and normalising vital parts of the client side state.
  - added end to end smoke tests using cypess to boost the confidence of the newly developed features that coexist well with the existing ones."
    `
  },
  {
    company: 'Kaluza',
    description:
      'Kaluza has developed the technology that will enable the coordination and control of millions of connected devices, creating a fully distributed energy system and 100% penetration of renewable power.',
    startDate: 1559343600000,
    endDate: 1567292400000,
    type: 'contract',
    jobTitle: 'senior frontend developer',
    techStack: [
      'react-js',
      'webgl',
      'express-js',
      'kafka-streams',
      'jest',
      'typescript'
    ],
    tasks: `
  - created a real-time UK heat map split into DNO regions powered by a various Kafka stream of data collected from users regarding the charging/capacity/usage of their smart devices (smart chargers/home batteries/v2g devices).
    
  - contributed to the creation of the internal reusable components catalog in order to unify the experience across the company’s applications, both internal and client facing.
    `
  },
  {
    company: 'Sky',
    description:
      'Sky UK (formerly British Sky Broadcasting Limited, BSkyB and Sky) is a British telecommunications company which serves the United Kingdom owned by Comcast. ',
    startDate: 1533078000000,
    endDate: 1556665200000,
    type: 'contract',
    jobTitle: 'senior developer',
    techStack: [
      'enzyme',
      'webpack',
      'jest',
      'sinon-js',
      'concourse-ci',
      'cucumber',
      'react',
      'redux',
      'node',
      'optimizely'
    ],
    tasks: `
  - maintained and updated as needed the NowTV app’s Jest unit tests and Ruby functional tests in order to gain more confidence with each platform-dependent release of the application.
  - created a curated VOD content rail and a multi-variant A/B testing solution tailored to the needs of the app using Optimizely.
  - reduced the overall technical debt of the codebase by updating patterns and approaches and also by applying code linting rules where needed.
    `
  },
  {
    company: 'uSwitch',
    description:
      'uSwitch Limited is a UK-based price comparison service and switching website founded in 2000.',
    startDate: 1533078000000,
    endDate: 1538348400000,
    type: 'contract',
    jobTitle: 'senior frontend developer',
    techStack: [
      'webpack',
      'react',
      'redux',
      'node',
      'ub.io',
      'yakbak',
      'cypress'
    ],
    tasks: `
  - increased the client’s confidence when using the Broadband Checker tool (part of a multi tenancy user journey creation tool) by adding a 3D Secure Payment verification step before confirming the internet provider switch.
  - improved the e2e testing approaches by using the record/replay strategy of the requests with Cypress in order to reduce the testing times and improve the reliability of the tests.
    `
  },
  {
    company: 'The Sun, News UK',
    description:
      'The Sun is a tabloid newspaper published in the United Kingdom and the Republic of Ireland.',
    startDate: 1519862400000,
    endDate: 1530399600000,
    type: 'contract',
    jobTitle: 'fullstack developer',
    techStack: [
      'react',
      'redux',
      'webpack',
      'mocha',
      'enzyme',
      'mocha',
      'opta-sports',
      'brightcove',
      'parse.ly',
      'express-js'
    ],
    tasks: `
  - contributed to the creation of 2018’s World Cup Update page by integrating various services used throughout the site (Brightcove/Parsley/OPTA Sports) to deliver curated content and metrics in real time.
  - contributed to various tech stack upgrades and techniques in order to streamline the release process and also to increase the developer confidence.
    `
  },
  {
    company: 'AIG',
    description:
      'American International Group, Inc., also known as AIG, is an American multinational finance and insurance corporation with operations in more than 80 countries and jurisdictions.',
    startDate: 1506812400000,
    endDate: 1517443200000,
    type: 'contract',
    jobTitle: 'frontend developer',
    techStack: ['react', 'redux', 'redux-saga', 'reselect', 'webpack', 'sass'],
    tasks: `
  - contributed to the creation of an internal multi tenancy insurance quote generator by implementing the api orchestration (of multiple datasources) and data management within the app.
  - created internal small PoC/services that contributed to achieving feature parity of the new web based quote generator with the existing spreadsheet one.
    `
  },
  {
    company: 'Third Space Learning',
    description:
      'Third Space Learning is making high quality 1-to-1 maths teaching more accessible than ever before for pupils from year 1 through year 6.',
    startDate: 1498863600000,
    endDate: 1506812400000,
    type: 'contract',
    jobTitle: 'fullstack developer',
    techStack: [
      'react',
      'apollo-client',
      'apollo-server',
      'styled-jsx',
      'nextjs',
      'tachyons',
      'expressjs',
      'aws-s3',
      'aws-rds',
      'postgres'
    ],
    tasks: `
  - single handedly created from scratch both the frontend and the backend (along with the databases) of an online catalog of Maths resources for pupils from Year 1 to Year 6. The resources have different types (video, documents) and were available on a tier based model.
  - made use of AWS resources for deploying and storing the documents for the platform and also made use of different caching and availability methods for distributing the correct content to the user based on their level of access.
  - the server communicating with the AWS services and with the internal user authentication service is a graphql based nodejs server.
    `
  },
  {
    company: 'Beamly',
    description:
      'Beamly is a digital marketing and technology agency based in London, UK and New York City, United States.',
    startDate: 1477958400000,
    endDate: 1498863600000,
    type: 'permanent',
    jobTitle: 'software engineer',
    techStack: [
      'neo4j',
      'react',
      'webpack',
      'tachyons',
      'enzyme',
      'jest',
      'docker',
      'wordpress',
      'aws-rds',
      'google-vision',
      'postgres',
      'graphql-relay'
    ],
    tasks: `
  - single handedly created a social listening tool that used a graphql backend to gather, analyse and deliver different metrics relevant for the company's end goal of discovering and harnessing upcoming social trends.
  - open sourced the bespoke template of the social listening tool under the name of \`project viper\`. It consists of unifying different libraries and technologies from the nodejs ecosystem.
  - open sourced a docker based environment for developing Wordpress based projects in a isolated manner that will not interfere with the host environment.
    `
  },
  {
    company: 'Kano Computing',
    description:
      'Beamly is a digital marketing and technology agency based in London, UK and New York City, United States.',
    startDate: 1435705200000,
    endDate: 1475276400000,
    type: 'permanent',
    jobTitle: 'software engineer',
    techStack: [
      'polymer',
      'react',
      'babel',
      'gulp',
      'node',
      'stylus',
      'mongodb',
      'vue',
      'vuex',
      'shopify'
    ],
    tasks: `
  - developed shared components for navigating between the existing projects of the company that will maintain the logged user's details and access levels and for registering (and onboarding) a user into Kano World using Polymer and Web Components.
  - created the kano.me storefront with the help of Vuejs and Shopify by developing a small client side api responsible for bundling and setting prices of products based on their existence and availability info from Shopify.
  - among contributing to different Javascript projects company wide, I have created a small internal Amazon-like SLA service that would send to the storefront the delivery times of the orders with respect of the timezone of the user and stock availability.
    `
  },
  {
    company: 'Learn Forward',
    description:
      'Learn forward is a company that helps publishers create collaborative digital textbooks and we help teachers design & deliver lessons in a digital format.',
    startDate: 1396306800000,
    endDate: 1430434800000,
    type: 'permanent',
    jobTitle: 'software engineer',
    techStack: ['node', 'backbone', 'jade', 'styuls', 'gulp', 'heroku'],
    tasks: `
  - contributed to developing using BackboneJs, Jade, Stylus, Expressjs and an authoring tool, LFA, a series of interactive and collaborative textbook for pupils from Year 1 to Year 4 in the Romanian language for a wide spectrum of subjects: Romanian language, maths, history, ethics or geography.
  - contributed to creating the open source website of the 2014's presidential campaign for Monica Macovei with a stack based on BackboneJs, Jade, Stylus and Expressjs.
  - Redesigned the company website using BackboneJs, Jade, Stylus and Expressjs.
    `
  }
]
