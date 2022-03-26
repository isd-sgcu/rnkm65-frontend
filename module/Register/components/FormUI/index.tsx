import { InputField } from 'common/components/Input'
import Typography from 'common/components/Typography'
import { useTranslation } from 'next-i18next'
import { FieldValues, UseFormRegister } from 'react-hook-form'

import { FormContainer, FormRootContainer, SubmitButton } from './styled'

interface IFormUI {
  register: UseFormRegister<FieldValues>
}

export function FormUI(props: IFormUI) {
  const { t } = useTranslation('register')
  const { register } = props

  return (
    <FormRootContainer>
      <Typography variant="h4">
        *กรุณาใส่ข้อมูลให้ครบทุกช่อง ( หากไม่มีให้ใส่ - )
      </Typography>
      <FormContainer>
        <InputField title={t('nameTitle')} {...register('title')} />
        <InputField title={t('firstname')} {...register('firstname')} />
        <InputField title={t('lastname')} {...register('lastname')} />
        <InputField title={t('nickname')} {...register('nickname')} />
        <InputField title={t('phone')} {...register('phoneNumber')} />
        <InputField title={t('facebook')} {...register('facebook')} />
        <InputField title={t('lineID')} {...register('lineID')} />
      </FormContainer>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <SubmitButton type="submit">{t('submit')}</SubmitButton>
      </div>
    </FormRootContainer>
  )
}
