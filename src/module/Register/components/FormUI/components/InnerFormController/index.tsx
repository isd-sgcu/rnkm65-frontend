import InputField from 'common/components/Input'
import { RadioField } from 'common/components/Radio'
import SelectField from 'common/components/Select'
import UploadField from 'common/components/Upload'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import { useFormContext } from 'module/Register/hooks/useFormContext'
import { memo } from 'react'
import { Controller } from 'react-hook-form'

import { IInnerFormControllerProps } from './types'

const InnerFormController = memo((props: IInnerFormControllerProps) => {
  const { fieldKey, type, option, style, translateNs, Component, errorKey } =
    props
  const { t } = useSSRTranslation(translateNs)
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
            text: _props.text || t(_props.i18nKey) || '',
          }))
          return (
            <>
              {type === 'text_input' && (
                <InputField
                  error={!!error}
                  title={t(`title.${fieldKey}`)}
                  errorMessage={error ? t(`error.${errorType}Text`) : ''}
                  placeholder={t(`placeholder.${fieldKey}`)}
                  {...field}
                />
              )}
              {type === 'select_input' && (
                <SelectField
                  error={!!error}
                  title={t(`title.${fieldKey}`)}
                  option={options || []}
                  errorMessage={error ? t(`error.${errorType}Select`) : ''}
                  placeholder={t(`placeholder.${fieldKey}`)}
                  {...field}
                />
              )}
              {type === 'upload_input' && (
                <UploadField
                  error={!!error}
                  title={t(`title.${fieldKey}`)}
                  errorMessage={error ? t(`error.${errorType}File`) : ''}
                  url={field.value}
                  {...field}
                />
              )}
              {type === 'radio_input' && (
                <RadioField
                  error={!!error}
                  title={t(`title.${fieldKey}`)}
                  errorMessage={error ? t(`error.${errorType}Select`) : ''}
                  option={options || []}
                  {...field}
                />
              )}
              {type === 'custom' && Component && (
                <Component
                  error={!!error}
                  title={t(`title.${fieldKey}`)}
                  errorMessage={error ? t(`error.${errorType}${errorKey}`) : ''}
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

export default InnerFormController
