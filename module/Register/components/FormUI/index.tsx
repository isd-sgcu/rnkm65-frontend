import Typography from 'common/components/Typography'
import { templateForm } from 'module/Register/utils/schema'
import { useTranslation } from 'next-i18next'
import { Fragment, memo } from 'react'

import InnerFormController from './components/InnerFormController'
import { FormContainer, FormRootContainer } from './styled'

export default memo(() => {
  const { t } = useTranslation('register')

  return (
    <FormRootContainer>
      <Typography css={{ color: '$pink500' }} variant="h3">
        {t('annoucement')}
      </Typography>
      {templateForm.map((row) => (
        <Fragment key={JSON.stringify(row)}>
          <FormContainer>
            {row.map((props) => (
              <InnerFormController
                translateNs="register"
                {...props}
                key={props.fieldKey}
              />
            ))}
          </FormContainer>
        </Fragment>
      ))}
    </FormRootContainer>
  )
})
