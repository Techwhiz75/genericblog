/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
    future: {
      webpack5: true,
    },
    i18n: {
      locales: ['en'],
      defaultLocale: 'en',
    },
    distDir: 'out/',
    target: 'serverless',
  }
