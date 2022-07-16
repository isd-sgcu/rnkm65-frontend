import Typography from 'common/components/Typography'
import { useAuth } from 'common/contexts/AuthContext'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import { templateForm } from 'module/Register/utils/schema'
import { Trans } from 'next-i18next'
import { Fragment, memo } from 'react'

import InnerFormController from './components/InnerFormController'
import { FormContainer, FormLink, FormRootContainer } from './styled'

const FormUI = memo(() => {
  const { t } = useSSRTranslation('register')
  const { user } = useAuth()

  return (
    <FormRootContainer>
      <Typography color="new-secondary" variant="h3">
        {t('annoucement')}
      </Typography>
      <Typography color="new-primary" variant="body">
        <Trans
          i18nKey="register:notRegisterMorProm"
          components={[
            // eslint-disable-next-line jsx-a11y/anchor-has-content
            <FormLink
              aria-label="non-vaccine-form"
              href="https://forms.gle/qSv6DCvgRGQkCtEK9"
              target="_blank"
              rel="noopener noreferrer"
            />,
          ]}
        />
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
