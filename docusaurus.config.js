import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GsKard 文档',
  tagline: '牌佬下场了？',
  favicon: 'img/favicon.ico',
  future: {
    v4: true,
  },

  markdown : {
    format : 'md'
  },

  url: 'https://hartgs.yw-games.top',
  baseUrl: '/',

  organizationName: 'HartGS',
  projectName: 'gskard-document',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/HartGS/gskard-document/tree/main',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'GsKard',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'kardSidebar',
            position: 'left',
            label: '搞牌',
          },
          // { to: '/blog', label: '博客', position: 'left' },
          {
            href: 'https://github.com/HartGS/gskard-document',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '社交媒体',
            items: [
              {
                label: 'BiliBili',
                href: 'https://space.bilibili.com/1787505100',
              },

              {
                label: 'QQ',
                href: 'https://qm.qq.com/q/2I8d9EHsIU',
              },
              {
                label: 'MineBBS',
                href: 'https://www.minebbs.com/resources/gskard-pvp-pve.10186',
              },
            ],
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
