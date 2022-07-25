export enum PageType {
  checkin = 'checkin',
  checkout = 'checkout',
  checkinSuccess = 'checkinSuccess',
  checkOutSuccess = 'checkOutSuccess',
  error = 'error',
}

export interface IFreshmenNightCheck {
  mode: PageType
}
