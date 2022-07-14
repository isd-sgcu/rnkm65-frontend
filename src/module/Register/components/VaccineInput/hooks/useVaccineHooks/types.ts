export interface IVaccineUploadError {
  data: string
  message: string
  status: number
}

export interface IVaccineUploadBody {
  hcert: string
}
