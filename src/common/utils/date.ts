import { ACCESS_PROFILE } from 'config/env'

const BAAN_SELECTION_START = new Date('July 23, 2022 9:00 GMT+07:00').getTime()
const BAAN_SELECTION_END = new Date('July 27, 2022 20:00 GMT+07:00').getTime()
const REGISTER_END = new Date('July 22, 2022 20:00 GMT+07:00').getTime()

export const getDateStatus = () => {
  let now = new Date().getTime()
  if (process.env.NODE_ENV !== 'production' && process.env.CURRENT_DATE) {
    now = new Date(process.env.CURRENT_DATE).getTime()
  }
  const canSelectBaan = BAAN_SELECTION_START <= now && now < BAAN_SELECTION_END
  const canAccessProfile = now >= BAAN_SELECTION_START || ACCESS_PROFILE
  const canRegister = REGISTER_END >= now
  return {
    canAccessProfile,
    canSelectBaan,
    canRegister,
  }
}

export type IDateStatus = ReturnType<typeof getDateStatus>
