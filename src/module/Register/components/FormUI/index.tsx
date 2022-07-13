import Typography from 'common/components/Typography'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import { templateForm } from 'module/Register/utils/schema'
import { Fragment, memo } from 'react'

import InnerFormController from './components/InnerFormController'
import { FormContainer, FormRootContainer } from './styled'

const FormUI = memo(() => {
  const { t } = useSSRTranslation('register')

  return (
    <FormRootContainer>
      <Typography color="new-primary" variant="h3">
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
