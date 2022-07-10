import Button from 'common/components/Button'
import Modal from 'common/components/Modal'
import Typography from 'common/components/Typography'
import { useSwitch } from 'common/hooks/useSwitch'
import React, { forwardRef } from 'react'
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'

import UploadModal from '../UploadImageModal'
import { useVaccineHooks } from './hooks/useVaccineHooks'
import { modalStyle, RequiredSymbol, VaccineContainer } from './styled'
import { IVaccineInputProps } from './types'

const VaccineInput = forwardRef<HTMLInputElement, IVaccineInputProps>(
  (props: IVaccineInputProps) => {
    const { title, required, errorMessage, error, value } = props

    const { state, handleOpen, handleClose } = useSwitch(false)
    const { t, onSubmit } = useVaccineHooks()

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
)

export default VaccineInput
