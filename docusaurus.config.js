import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GSkard 文档',
  tagline: '牌佬下场了？',
  favicon: 'img/favicon.ico',
  future: {
    v4: true,
  },

  markdown: {
    format: 'md'
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

  plugins: [
    'plugin-image-zoom'
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        language: ["zh"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      }),
    ]
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'HartGS',
      logo: {
        alt: 'My Site Logo',
        src: 'img/hart_gs_avatar.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'kardSidebar',
          position: 'left',
          label: '地图',
        },
        // { to: '/blog', label: '博客', position: 'left' },
        {
          href: 'https://qm.qq.com/q/2I8d9EHsIU',
          label: 'QQ',
          position: "right"
        },
        {
          href: 'https://www.minebbs.com/resources/gskard-pvp-pve.10186',
          label: 'MineBBS',
          position: "right"
        },
        {
          href: 'https://docs.qq.com/smartsheet/DWHp5SWxGWGt5Q1RO',
          label: 'BUG反馈',
          position: "right"
        },
        {
          href: 'https://github.com/HartGS/gskard-document',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '搞牌文档',
              to: '/docs/kard/intro',
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
      copyright: `Copyright © ${new Date().getFullYear()} HartGS`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)',
      },
    },
  },
};

export default config;
