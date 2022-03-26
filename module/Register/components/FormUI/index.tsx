import { InputField } from 'common/components/Input'
import Typography from 'common/components/Typography'
import { useTranslation } from 'next-i18next'
import { FieldValues, UseFormRegister } from 'react-hook-form'

import { FormContainer, FormRootContainer } from './styled'

interface IFormUI {
  register: UseFormRegister<FieldValues>
}

export function FormUI(props: IFormUI) {
  const { t } = useTranslation('register')
  const { register } = props

  return (
    <FormRootContainer>
      <Typography variant="h3">{t('annoucement')}</Typography>
      <FormContainer>
        <div style={{ gridColumn: '1 / 2', minWidth: '100px' }}>
          <InputField title={t('title')} {...register('title')} />
        </div>
        <div style={{ gridColumn: '2 / 6' }}>
          <InputField title={t('firstname')} {...register('firstname')} />
        </div>
        <div style={{ gridColumn: '6 / 10' }}>
          <InputField title={t('lastname')} {...register('lastname')} />
        </div>
        <div style={{ gridColumn: '1 / 5' }}>
          <InputField title={t('nickname')} {...register('nickname')} />
        </div>
        <div style={{ gridColumn: '5 / 10' }}>
          <InputField title={t('phone')} {...register('phoneNumber')} />
        </div>
        <div style={{ gridColumn: '1 / 5' }}>
          <InputField title={t('facebook')} {...register('facebook')} />
        </div>
        <div style={{ gridColumn: '5 / 10' }}>
          <InputField title={t('lineID')} {...register('lineID')} />
        </div>
      </FormContainer>
    </FormRootContainer>
  )
}
