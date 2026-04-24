/**
 * Portfolio kategori tanımları — ana sayfadaki hub kartlarını besler.
 *
 * Yeni bir kategori eklemek için bu diziye yeni bir nesne ekle ve
 * ilgili sayfayı `wiki/src/pages/<category-id>/index.js` yolunda oluştur.
 */

export const PORTFOLIO_CATEGORIES = [
  {
    id: 'minecraft',
    title: 'Minecraft Projects',
    description:
      'Explore my collection of Minecraft projects, joined by over 500,000 players worldwide, featuring detailed documentation and open-source code.',
    coverImage: '/img/hero/b6.png',
    to: '/minecraft',
  },
  {
    id: 'ceptecari',
    title: 'CepteCari',
    description: 'A comprehensive B2B SaaS solution for field sales and financial tracking, currently optimized for and operating within the Turkish market.',
    coverImage: '/img/ceptecari.png',
    href: 'https://www.ceptecari.com',
  },
  {
    id: 'silverboard',
    title: 'SilverBoard API',
    description: 'An open-source sports management and performance analysis platform designed to streamline training schedules and player statistics—currently maintained as a personal hobby project.',
    coverImage: '/img/sblogo.png',
    href: 'https://github.com/efeketket/SilverBoardAPI',
  },
  {
    id: 'sandbox',
    title: 'Academic Sandbox',
    description: 'A collection of academic projects, research experiments and coursework spanning mathematics, computer science and data systems.',
    coverImage: '/img/sandbox.png',
    to: '/sandbox',
  },
];
