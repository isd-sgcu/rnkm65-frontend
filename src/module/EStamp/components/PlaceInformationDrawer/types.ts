import { IEvent } from 'common/types/event'

export interface PlaceInformation extends IEvent {
  isChecked: boolean
}

export interface PlaceInformationDrawerProps {
  data: PlaceInformation | undefined
  onClose: () => void
}
