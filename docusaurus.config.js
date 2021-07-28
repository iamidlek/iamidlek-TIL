const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Yhole',
  tagline: 'TIL : Today I Learned',
  url: 'https://yhole-til.netlify.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/Background.png',
  organizationName: 'iamidlek', // Usually your GitHub org/user name.
  projectName: 'til', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
    },
    navbar: {
      title: 'TIL',
      logo: {
        alt: 'My Site Logo',
        src: 'img/Background.png',
      },
      items: [{
          // type: 'doc',
          // docId: 'intro',
          position: 'left',
          label: 'Trace',
          items: [
            {
              label: '7월',
              to: 'docs/21년07월/secondweek/day1',
            },
            // {
            //   label: '2주차',
            //   to: 'docs/21년07월/twoweek/day1',
            // },
            // {
            //   label: 'devlog',
            //   to: 'docs/TIL/html/day1',
            // },
            // ... more items
          ],
        },
        // {
        //   to: '/blog',
        //   label: 'Blog',
        //   position: 'left'
        // },
        {
          href: 'https://github.com/iamidlek/iamidlek-TIL',
          position: 'right',
          className: 'mainpage-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [{
          title: 'Trace',
          // items: [{
          //   label: 'KDI 제출 양식',
          //   to: '/docs/intro',
          // },
          // {
          //   label: '콘텐츠',
          //   to: '/docs/1st-week/day1',
          // } 
          // ],

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