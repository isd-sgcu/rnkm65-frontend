import { useAuth } from 'common/contexts/AuthContext'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import { IImageSize } from 'common/types/crop'
import { httpPost } from 'common/utils/axios'
import { getImageData } from 'common/utils/imageHelper'
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
          'http://localhost:3001/api/vaccine',
          {
            hcert: result.data,
            uid: studentId,
          }
        )
        res = body.data
      } catch (err) {
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
