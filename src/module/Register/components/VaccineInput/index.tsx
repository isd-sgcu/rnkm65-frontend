import Button from 'common/components/Button'
import Modal from 'common/components/Modal'
import Typography from 'common/components/Typography'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import { useSwitch } from 'common/hooks/useSwitch'
import { IImageSize } from 'common/types/crop'
import { getImageData } from 'common/utils/imageHelper'
import jsQR from 'jsqr'
import { useFormContext } from 'module/Register/hooks/useFormContext'
import React, { useCallback } from 'react'
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'

import UploadModal from '../UploadImageModal'
import { modalStyle, RequiredSymbol, VaccineContainer } from './styled'
import { IVaccineInputProps } from './types'

const VaccineInput = (props: IVaccineInputProps) => {
  const { title, required, errorMessage, error, value } = props

  const { t } = useSSRTranslation('register')
  const { state, handleOpen, handleClose } = useSwitch(false)
  const { approveVaccine } = useFormContext()

  const onSubmit = useCallback(
    async (image: string, metadata?: IImageSize) => {
      if (!metadata) return

      const imageData = await getImageData(image, metadata)

      const result = jsQR(imageData, metadata.width, metadata.height)
      if (!result) throw new Error(t('error.noQrCode'))

      console.log(result.data)

      approveVaccine()
    },
    [t, approveVaccine]
  )

  return (
    <>
      <VaccineContainer>
        <Typography variant="body" css={{ fontWeight: 'bold' }}>
          {title || ''}
          {required && <RequiredSymbol>*</RequiredSymbol>}
        </Typography>

        {value === 'true' ? (
          <AiOutlineCheck size="24" color="green" />
        ) : (
          <AiOutlineClose size="24" color="red" />
        )}

        <Button
          onClick={handleOpen}
          css={{ fontSize: '1rem' }}
          variant="secondary"
          type="button"
        >
          {t('upload.uploadBtnLabel')}
        </Button>
      </VaccineContainer>

      {error && <Typography color="error">{errorMessage}</Typography>}

      <Modal modalClassName={modalStyle()} open={state} onClose={handleClose}>
        <UploadModal
          aspectRatio={1}
          i18nPrefix="vaccineModal"
          handleClose={handleClose}
          onSubmit={onSubmit}
        />
      </Modal>
    </>
  )
}

export default VaccineInput
