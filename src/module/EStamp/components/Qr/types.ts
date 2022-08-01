import { IEvent } from 'common/types/event'

export interface QrProps {
  onClose: () => void
  events: IEvent[]
  checkedEvents: IEvent[]
}
