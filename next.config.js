const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ignoreDuringBuilds: true,
  i18n,
  publicRuntimeConfig: {
    env: {
      DISABLE_REMEMBER_LOCALE: process.env.DISABLE_REMEMBER_LOCALE,
      API_BASE_URL: process.env.API_BASE_URL,
      APP_BASE_URL: process.env.APP_BASE_URL,
      SSO_BASE_URL: process.env.SSO_BASE_URL,
      VACCINE_BASE_URL: process.env.VACCINE_BASE_URL,
    },
  },
}

module.exports = nextConfig
