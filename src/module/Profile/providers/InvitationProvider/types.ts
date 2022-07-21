import { ChangeGroupModalProps } from 'module/Profile/components/ChangeGroupModal/types'
import { InfoModalProps } from 'module/Profile/components/InfoModal/types'
import { JoinGroupModalProps } from 'module/Profile/components/JoinGroupModal/types'

export type IDialogState =
  | { type: 'info'; props: InfoModalProps }
  | { type: 'join'; props: JoinGroupModalProps }
  | { type: 'change'; props: ChangeGroupModalProps }
