import { InputField } from 'common/components/Input'
import { SelectField } from 'common/components/Select'
import Typography from 'common/components/Typography'
import { templateForm } from 'module/Register/schema'
import { useTranslation } from 'next-i18next'

import { useFormContext } from '../../../../common/hooks/useFormContext'
import { FormContainer, FormRootContainer } from './styled'

export const FormUI = () => {
  const { t } = useTranslation('register')
  const { register } = useFormContext()

  return (
    <FormRootContainer>
      <Typography css={{ color: '$error' }} variant="h3">
        {t('annoucement')}
      </Typography>
      <FormContainer>
        {templateForm.map((val) => (
          <div key={val.key} style={val.style || {}}>
            {val.type === 'text_input' && (
              <InputField title={t(val.key)} {...register(val.key)} />
            )}
            {val.type === 'select_input' && (
              <SelectField
                title={t(val.key)}
                option={val.option || []}
                {...register(val.key)}
              />
            )}
          </div>
        ))}
      </FormContainer>
    </FormRootContainer>
  )
}
