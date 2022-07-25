export enum PageType {
  checkin = 'checkin',
  checkout = 'checkout',
  checkinSuccess = 'checkinSuccess',
  checkoutSuccess = 'checkoutSuccess',
  error = 'error',
}

export interface IFreshmenNightCheck {
  mode: PageType
}
