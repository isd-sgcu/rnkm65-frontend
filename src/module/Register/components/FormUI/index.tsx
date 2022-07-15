import Typography from 'common/components/Typography'
import { useAuth } from 'common/contexts/AuthContext'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import { templateForm } from 'module/Register/utils/schema'
import { Fragment, memo } from 'react'

import InnerFormController from './components/InnerFormController'
import { FormContainer, FormRootContainer } from './styled'

const FormUI = memo(() => {
  const { t } = useSSRTranslation('register')
  const { user } = useAuth()

  return (
    <FormRootContainer>
      <Typography color="new-secondary" variant="h3">
        {t('annoucement')}
      </Typography>
      {templateForm.map((row, idx) => (
        <Fragment key={JSON.stringify(row)}>
          {(idx !== templateForm.length - 1 ||
            user?.studentID.startsWith('65')) && (
            <FormContainer>
              {row.map((props) => (
                <InnerFormController
                  translateNs="register"
                  {...props}
                  key={props.fieldKey}
                />
              ))}
            </FormContainer>
          )}
        </Fragment>
      ))}
    </FormRootContainer>
  )
})

export default FormUI
