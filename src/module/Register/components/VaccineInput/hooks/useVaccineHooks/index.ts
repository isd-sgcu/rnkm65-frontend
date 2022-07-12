import { AxiosError } from 'axios'
import { useAuth } from 'common/contexts/AuthContext'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import { IImageSize } from 'common/types/crop'
import { httpPost } from 'common/utils/axios'
import { getImageData } from 'common/utils/imageHelper'
import { VACCINE_BASE_URL } from 'config/env'
import jsQR from 'jsqr'
import { useFormContext } from 'module/Register/hooks/useFormContext'
import { useCallback } from 'react'

import { IVaccineUploadBody, IVaccineUploadResponse } from './types'

export const useVaccineHooks = () => {
  const { t } = useSSRTranslation('register')
  const { approveVaccine } = useFormContext()
  const { user } = useAuth()

  const onSubmit = useCallback(
    async (image: string, metadata?: IImageSize) => {
      if (!metadata) return

      const imageData = await getImageData(image, metadata)

      const result = jsQR(imageData, metadata.width, metadata.height)
      if (!result) throw new Error(t('error.noQrCode'))
      const studentId = user?.studentID

      if (!studentId) return

      let res: IVaccineUploadResponse

      try {
        const body = await httpPost<IVaccineUploadBody, IVaccineUploadResponse>(
          `${VACCINE_BASE_URL}/api/vaccine`,
          {
            hcert: result.data,
            uid: studentId,
          }
        )
        res = body.data
      } catch (err) {
        const error = err as AxiosError
        if (error.response?.status === 500) {
          throw new Error(t('error.unknownError'))
        }
        if (error.response?.data.error.includes('already')) {
          throw new Error(t('error.vaccineAlreadyApproved'))
        }
        throw new Error(t('error.invalidQrCode'))
      }

      if (!res.isPassed) {
        throw new Error('Vaccine is not passed')
      }

      approveVaccine()
    },
    [t, user?.studentID, approveVaccine]
  )

  return { onSubmit, t }
}
