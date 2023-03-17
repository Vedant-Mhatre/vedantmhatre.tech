module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://vedantmhatre.tech/`,
    // Your Name
    name: 'Vedant Mhatre',
    // Main Site Title
    title: `Vedant Mhatre`,
    // Description that goes under your name in main bio
    description: `Software Engineer / Tinkerer / Absurdist`,
    // Optional: Twitter account handle
    author: `Vedant-Mhatre`,
    // Optional: Github account URL
    github: `https://github.com/Vedant-Mhatre`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/vedant-mhatre/`,
    // Content of the About Me section
    about: `Software engineer who wants to solve real world problems using technology.
    Started my journey in 2014 by tinkering around linux, android, applying custom patches to apps or entire OS,
    using custom kernels and frameworks optimise OS. Over the next few years explored various domains like cyber 
    security, web development, cloud engineering and DevOps.`,// Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Ambulance Booking App',
        description:
          'Built with features like live ambulance tracking, used Java, Google Maps & Firebase.',
        link: '#',
      },
      {
        name: 'Excessive Food Portal',
        description:
          'To connect hotels & people having excess food to NGOs, used LAMP stack & Docker.',
        link: 'https://github.com/hackinutu-CAVE/Food-Portal',
      },
      {
        name: 'Stocks Notifier',
        description:
          'Lightweight stock tracker which alerts when stock price drops, built using Go.',
        link: 'https://stocksnotifier.com/',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Hiver',
        description: 'Software Engineer, May 2022 - Present',
        link: 'http://hiverhq.com/',
        children: [
          {
            description: 'Developed a CLI tool for local development using DevSpace, Node js, and EKS improving consistency between local & production environments.'
          },
          {
            description: 'Containerized & deployed legacy microservices to Kubernetes, improving scalability and reliability.'
          }
        ]
      },
      {
        name: 'Sapio Analytics',
        description: 'Cloud Engineer Intern, January 2021 - August 2021',
        link: 'https://sapioanalytics.com/',
        children: [
          {
            description: 'Led a cloud team of 2-3 interns and restructured the overall architecture of the system.'
          },
          {
            description: 'Migrated system from EC2s to AWS Lambdas using zappa which increased scalability and reliability.'
          }
        ]
      },
      {
        name: 'A.P. Shah Institute of Technology',
        description: 'Technical Team Lead - Volunteer, October 2019 - March 2020',
        link: 'https://www.apsit.edu.in/',
        children: [
          {
            description: 'Developed a college training and placement portal using Django framework and MySQL database which could handle 500+ users.'
          },
          {
            description: 'Built an administration panel with multiple features to facilitate easier management of real-time data.'
          }
        ]
      }

    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages / Configuration',
        description:
          'Python, Java, Go, Javascript, Terraform, Helm',
      },
      {
        name: 'Databases',
        description: 'MySQL, MongoDB, Cloud Databases',
      },
      {
        name: 'Tools',
        description:
          'Docker, Kubernetes, Prometheus, Elasticsearch, Argo CD',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: `GTM-TKSDDFV`, // Optional Google Tag Manager
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#333f99`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
