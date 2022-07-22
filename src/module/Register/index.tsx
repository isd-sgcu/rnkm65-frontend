import Loading from 'common/components/Loading'
import Typography from 'common/components/Typography'
import { CAN_REGISTER } from 'common/constants/phase'
import { useAuth } from 'common/contexts/AuthContext'
import { usePhase } from 'common/contexts/PhaseContext'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import LatePage from 'module/LatePage'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import ConfirmModal from './components/ConfirmModal'
import FormUI from './components/FormUI'
import UploadImage from './components/Image'
import { FormProvider } from './hooks/useFormContext'
import {
  RegisterContainer,
  RootContainer,
  SubmitButton,
  SubmitContainer,
} from './styled'
import { RegisterType } from './types'

const RegisterForm = () => {
  const { t } = useSSRTranslation('register')
  const router = useRouter()
  const type = (router.query.type as RegisterType) || RegisterType.Register
  const { checkPhase } = usePhase()
  const canRegister = checkPhase(CAN_REGISTER)
  const [isLoading, setLoading] = useState(true)

  const { user } = useAuth()

  useEffect(() => {
    if (!user) return

    const { phone = '', isVerify } = user

    if (phone && isVerify) {
      router.replace('/')
      return
    }

    setLoading(false)
  }, [router, type, user])

  if (isLoading) return <Loading />

  if (!canRegister) {
    return <LatePage />
  }

  return (
    <FormProvider>
      <RootContainer>
        <Typography color="new-primary" variant="h1">
          {t(type)}
        </Typography>
        <RegisterContainer>
          <UploadImage />
          <FormUI />
        </RegisterContainer>
        <SubmitContainer>
          {type === RegisterType.Edit && (
            <SubmitButton
              type="button"
              variant="secondary"
              onClick={() => router.push('/')}
            >
              {t('back')}
            </SubmitButton>
          )}
          <SubmitButton variant="primary" type="submit">
            {t('submit')}
          </SubmitButton>
        </SubmitContainer>
      </RootContainer>
      <ConfirmModal />
    </FormProvider>
  )
}

export default RegisterForm
