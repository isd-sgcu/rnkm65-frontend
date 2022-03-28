import Typography from 'common/components/Typography'
import { templateForm } from 'module/Register/utils/schema'
import { useTranslation } from 'next-i18next'
import { Fragment, memo } from 'react'

import InnerFormController from './components/InnerFormController'
import { FormContainer, FormRootContainer } from './styled'

const FormUI = memo(() => {
  const { t } = useTranslation('register')

  return (
    <FormRootContainer>
      <Typography color="pink" variant="h3">
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

export default FormUI
