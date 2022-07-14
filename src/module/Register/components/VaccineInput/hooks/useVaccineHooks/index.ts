import { AxiosError } from 'axios'
import { useAuth } from 'common/contexts/AuthContext'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import { IImageSize } from 'common/types/crop'
import { httpPost } from 'common/utils/axios'
import { getImageData } from 'common/utils/imageHelper'
import jsQR from 'jsqr'
import { useFormContext } from 'module/Register/hooks/useFormContext'
import { useCallback } from 'react'

import { IVaccineUploadBody, IVaccineUploadError } from './types'

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

      try {
        await httpPost<IVaccineUploadBody>('/vaccine/verify', {
          hcert: result.data,
        })
      } catch (err) {
        const error = err as AxiosError<IVaccineUploadError>

        if (!error.response?.status || error.response.status === 500) {
          throw new Error(t('error.unknownError'))
        }
        if (error.response.status === 400) {
          throw new Error(t('error.invalidQrCode'))
        }
        throw new Error(t('error.notAllowUpload'))
      }

      approveVaccine()
    },
    [t, user?.studentID, approveVaccine]
  )

  return { onSubmit, t }
}
