import { IEvent } from 'common/types/event'

export interface QrProps {
  onScan: (_: string) => void
  onClose: () => void
  event: IEvent | undefined
  checkedEvents: IEvent[]
}
