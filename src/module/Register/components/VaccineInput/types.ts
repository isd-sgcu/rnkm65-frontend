export interface IVaccineInputProps {
  title: string
  error: boolean
  errorMessage: string
  required: boolean
  value: string
}

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
