export enum Phase {
  REGISTER = 'REGISER',
  REGISTER_END = 'REGISTER_END',
  BAAN_SELECTION = 'BAAN_SELECTION',
  BAAN_SELECTION_END = 'BAAN_SELECTION_END',
  BAAN_ANNOUNCE = 'BAAN_ANNOUNCE',
  ESTAMP = 'ESTAMP',
}

export const DEFAULT_ROUTE = ['/', '/login']

export const PHASE_DATA = [
  {
    phase: Phase.REGISTER,
    startTime: new Date('July 16, 2022 9:00 GMT+07:00').getTime(),
    allowRoute: ['/register'],
  },
  {
    phase: Phase.REGISTER_END,
    startTime: new Date('July 22, 2022 20:00 GMT+07:00').getTime(),
    allowRoute: [],
  },
  {
    phase: Phase.BAAN_SELECTION,
    startTime: new Date('July 23, 2022 9:00 GMT+07:00').getTime(),
    allowRoute: ['/chooseBaan'],
  },
  {
    phase: Phase.BAAN_SELECTION_END,
    startTime: new Date('July 27, 2022 12.00 GMT+07:00').getTime(),
    allowRoute: [],
  },
  {
    phase: Phase.BAAN_ANNOUNCE,
    startTime: new Date('August 1, 2022 20:00 GMT+07:00').getTime(),
    allowRoute: [],
  },
  {
    phase: Phase.ESTAMP,
    startTime: new Date('August 4, 2022 9:00 GMT+07:00').getTime(),
    allowRoute: ['/checkinSuccess'],
  },
]
