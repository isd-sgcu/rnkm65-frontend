export interface IVaccineUploadResponse {
  firstName: string
  lastName: string
  isPassed: boolean
  uid: string
}

export interface IVaccineUploadBody {
  hcert: string
  uid: string
}
