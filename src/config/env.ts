import getConfigs from 'next/config'

const { publicRuntimeConfig } = getConfigs()

export const REMEMBER_LOCALE =
  publicRuntimeConfig.env.DISABLE_REMEMBER_LOCALE !== 'true'

export const API_BASE_URL =
  publicRuntimeConfig.env.API_BASE_URL || 'https://pbeta.freshersfairs.com'

export const APP_BASE_URL =
  publicRuntimeConfig.env.APP_BASE_URL ||
  'https://cerulean-sable-b1ec76.netlify.app'

export const SSO_BASE_URL =
  publicRuntimeConfig.env.SSO_BASE_URL || 'https://sso.cucheck.in'
