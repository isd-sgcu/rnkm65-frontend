const BAAN_SELECTION_START = new Date('July 21, 2022 12:01 GMT+07:00').getTime()
const BAAN_SELECTION_END = new Date('July 25, 2022 12:00 GMT+07:00').getTime()

export const getDateStatus = () => {
  const now = new Date().getTime()
  const canSelectBaan = BAAN_SELECTION_START <= now && now < BAAN_SELECTION_END
  const canAccessProfile = now >= BAAN_SELECTION_START

  return {
    canAccessProfile,
    canSelectBaan,
  }
}

export type IDateStatus = ReturnType<typeof getDateStatus>