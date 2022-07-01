import getConfigs from 'next/config'

const { publicRuntimeConfig } = getConfigs()

export const REMEMBER_LOCALE =
  publicRuntimeConfig.env.DISABLE_REMEMBER_LOCALE !== 'true'

export const API_BASE_URL = publicRuntimeConfig.env.API_BASE_URL || ''
