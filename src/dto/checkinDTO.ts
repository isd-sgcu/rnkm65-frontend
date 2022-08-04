export enum CheckinType {
  CHECK_IN = 1,
  CHECK_OUT = 2,
}

export interface CheckinDTO {
  checkin_token: string
  checkin_type: CheckinType
}

export interface CheckinResponseDTO {
  success: boolean
}
