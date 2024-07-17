// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hi, I am Favour Kelvin',
  tagline: 'A technical writer and developer advocate',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://fakela.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'fakela', // Usually your GitHub org/user name.
  projectName: 'fakela.github.io', // Usually your repo name.
  deploymentBranch: "gh-pages",
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/fakela/fakela.github.io',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/fakela/fakela.github.io',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'About Me',
          },
          {
            href: 'https://github.com/fakela/fakela.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Experience',
            items: [
              {
                label: 'About me',
                to: 'http://localhost:3000/docs/intro',
              },
            ],
          },
          {
            title: 'More about me',
            items: [
              {
                label: 'Medium',
                href: 'https://medium.com/@favourkelvin17',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/favour-kelvin/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/fakela6',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Articles written by me',
                to: 'https://docs.google.com/spreadsheets/d/1bgPWg-X8ON2ugT5Eg2DR4boXtrEIvMxsSNq3uuaJb1U/edit?gid=0#gid=0',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/fakela',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
