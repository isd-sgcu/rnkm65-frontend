import { InputField } from 'common/components/Input'
import { SelectField } from 'common/components/Select'
import Typography from 'common/components/Typography'
import { templateForm } from 'module/Register/utils/schema'
import { useTranslation } from 'next-i18next'
import { Controller } from 'react-hook-form'

import { useFormContext } from '../../hooks/useFormContext'
import { FormContainer, FormRootContainer } from './styled'

export const FormUI = () => {
  const { t } = useTranslation('register')
  const { control } = useFormContext()

  return (
    <FormRootContainer>
      <Typography css={{ color: '$error' }} variant="h3">
        {t('annoucement')}
      </Typography>
      <FormContainer>
        {templateForm.map((val) => (
          <div key={val.key} style={val.style || {}}>
            <Controller
              control={control}
              name={val.key}
              render={({ field, fieldState: { error } }) => {
                const errorType = error?.message?.includes('Required')
                  ? 'required'
                  : 'format'
                return (
                  <>
                    {val.type === 'text_input' && (
                      <InputField
                        error={!!error}
                        title={t(val.key)}
                        errorMessage={error ? t(`${errorType}TextError`) : ''}
                        {...field}
                      />
                    )}
                    {val.type === 'select_input' && (
                      <SelectField
                        error={!!error}
                        title={t(val.key)}
                        option={
                          val.option?.map((_val) => ({
                            ..._val,
                            text: t(_val.i18nKey),
                          })) || []
                        }
                        errorMessage={error ? t(`${errorType}SelectError`) : ''}
                        {...field}
                      />
                    )}
                  </>
                )
              }}
            />
          </div>
        ))}
      </FormContainer>
    </FormRootContainer>
  )
}