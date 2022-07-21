import type { IDateStatus } from 'common/utils/date'

export enum RegisterType {
  Register = 'register',
  Edit = 'edit',
}
export interface IRegisterFormPageProps extends IDateStatus {}
