const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Yhole',
  tagline: 'TIL : Today I Learned',
  url: 'https://docusaurus-2.netlify.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/Background.png',
  organizationName: 'iamidlek', // Usually your GitHub org/user name.
  projectName: 'til', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'TIL',
      logo: {
        alt: 'My Site Logo',
        src: 'img/Background.png',
      },
      items: [{
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Trace',
        },
        // {
        //   to: '/blog',
        //   label: 'Blog',
        //   position: 'left'
        // },
        { 
          href: 'https://github.com/iamidlek/iamidlek.github.io',
          label: 'git',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [{
          title: 'Trace',
          items: [{
            label: 'description',
            to: '/docs/intro',
          }, ],
        },
        // {
        //   title: 'Community',
        //   items: [{
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        // {
        //   title: 'More',
        //   items: [{
        //       label: 'GitHub',
        //       href: 'https://github.com/facebook/docusaurus',
        //       position: 'right',
        //     },
        //     //{
        //       //label: 'Blog',
        //       //to: '/blog',
        //     //},
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Yhole Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },
};