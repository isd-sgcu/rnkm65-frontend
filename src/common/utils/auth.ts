import axios, { AxiosResponse } from 'axios'
import { ICredential } from 'common/types/auth'
import { API_BASE_URL } from 'config/env'

const authClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
})

const exchangeTicketForToken = async (
  ticket: string
): Promise<ICredential | null> => {
  let res: AxiosResponse
  try {
    res = await authClient.post<ICredential>('/auth/verify', { ticket })
  } catch (err) {
    return null
  }

  const expiresOn = new Date()
  expiresOn.setSeconds(expiresOn.getSeconds() + res.data.expiresIn)
  return {
    accessToken: res.data.accessToken,
    refreshToken: res.data.refreshToken,
    expiresOn,
  }
}

const renewAccessToken = async (refreshToken: string) => {
  let res: AxiosResponse
  try {
    res = await authClient.post<ICredential>('/auth/refreshToken', {
      refresh_token: refreshToken,
    })
  } catch (err) {
    return null
  }

  const expiresOn = new Date()
  expiresOn.setSeconds(expiresOn.getSeconds() + res.data.expiresIn)
  localStorage.setItem(
    'token',
    JSON.stringify({
      accessToken: res.data.accessToken,
      refreshToken: res.data.refreshToken,
      expiresOn,
    })
  )
  return res.data.accessToken
}

const getAccessToken = async () => {
  const token = localStorage.getItem('token')
  if (!token) {
    return null
  }

  const { accessToken, refreshToken, expiresOn } = JSON.parse(
    token
  ) as ICredential

  // Renew access token if expired
  const now = new Date()
  const expiry = new Date(expiresOn)
  if (now > expiry) {
    const newAccessToken = await renewAccessToken(refreshToken)
    if (!newAccessToken) {
      return null
    }
    return newAccessToken
  }
  return accessToken
}

export { exchangeTicketForToken, getAccessToken }
