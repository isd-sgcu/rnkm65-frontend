export interface PlaceInformation {
  title: string
  titleEn: string
  imgUrl: string
  detail: string
  detailEn: string
  time: string
  timeEn: string
}

export interface PlaceInformationDrawerProps {
  data: PlaceInformation | undefined
  onClose: () => void
}
