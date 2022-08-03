import { IEvent } from 'common/types/event'

export interface QrProps {
  open: boolean
  onScan: (_: string) => void
  onClose: () => void
  event: IEvent | undefined
  checkedEvents: IEvent[]
}
