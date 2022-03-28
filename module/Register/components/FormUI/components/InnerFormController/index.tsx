import { InputField } from 'common/components/Input'
import { SelectField } from 'common/components/Select'
import { useFormContext } from 'module/Register/hooks/useFormContext'
import { useTranslation } from 'next-i18next'
import { memo } from 'react'
import { Controller } from 'react-hook-form'

import { IInnerFormControllerProps } from './types'

export const InnerFormController = memo((props: IInnerFormControllerProps) => {
  const { fieldKey, type, option, style, translateNs } = props
  const { t } = useTranslation(translateNs)
  const { control } = useFormContext()

  return (
    <div style={style || {}}>
      <Controller
        control={control}
        name={fieldKey}
        render={({ field, fieldState: { error } }) => {
          const errorType = error?.message?.includes('Required')
            ? 'required'
            : 'format'
          const options = option?.map((_props) => ({
            ..._props,
            text: t(_props.i18nKey),
          }))
          return (
            <>
              {type === 'text_input' && (
                <InputField
                  error={!!error}
                  title={t(fieldKey)}
                  errorMessage={error ? t(`${errorType}TextError`) : ''}
                  {...field}
                />
              )}
              {type === 'select_input' && (
                <SelectField
                  error={!!error}
                  title={t(fieldKey)}
                  option={options || []}
                  errorMessage={error ? t(`${errorType}SelectError`) : ''}
                  {...field}
                />
              )}
            </>
          )
        }}
      />
    </div>
  )
})
