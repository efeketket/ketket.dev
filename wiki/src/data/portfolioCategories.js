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
    id: 'cepteadisyon',
    title: 'CepteAdisyon',
    description: 'A modern web platform built for digital order-taking and restaurant operations management.',
    coverImage: '/img/cepteadisyon1.png',
    href: 'https://www.cepteadisyon.com/',
  },
  {
    id: 'npm-package-archive',
    title: 'NPM Package Archive',
    description: 'A complete list of my published npm packages and library archive.',
    coverImage: '/img/npm.png',
    href: 'https://www.npmjs.com/~efeketket',
  },
  {
    id: 'sandbox',
    title: 'Academic & Hobby Sandbox',
    description: 'A collection of academic and hobby projects, research experiments and coursework spanning mathematics, computer science and data systems.',
    coverImage: '/img/sandbox.png',
    to: '/sandbox',
  },
];
