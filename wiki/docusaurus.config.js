// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Ketket's Developments",
  tagline: "Welcome to wonderful world of Ketket's Creations.",
  favicon: 'img/playerhead.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://ketket.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'efeketket', // Usually your GitHub org/user name.
  projectName: 'ketket.dev', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Google AdSense script
  scripts: [
    {
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9510503271005373',
      async: true,
      crossorigin: 'anonymous',
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/efeketket/ketket.dev/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/efeketket/ketket.dev/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/transppp.png',
      
      // Color mode configuration
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      
      navbar: {
        title: "Ketket's Creations",
        logo: {
          alt: "Ketket's Wiki Logo",
          src: 'img/transppp.png',
          width: 40,
          height: 40,
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: 'Wiki',
          },
          {to: '/blog', label: 'FAQ', position: 'right'},
          {to: '/about', label: 'About Me', position: 'right'},
          {
            href: 'https://github.com/efeketket',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Wiki',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Projects',
            items: [
              {
                label: 'Modrinth',
                href: 'https://modrinth.com/user/efeketket',
              },
              {
                label: 'CurseForge',
                href: 'https://www.curseforge.com/members/efeketket__/projects',
              },
              {
                label: 'PlanetMC',
                href: 'https://www.planetminecraft.com/member/efeketket/',
              }
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/efeketket',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/efe-ketancı-193902248/',
              },
              {
                label: 'Instagram',
                href: 'https://instagram.com/efeketket',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Efe Ketenci. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
