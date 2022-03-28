import StyledButton from 'common/components/Button'
import Modal from 'common/components/Modal'
import Typography from 'common/components/Typography'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import { useSwitch } from 'common/hooks/useSwitch'
import { useFormContext } from 'module/Register/hooks/useFormContext'
import { memo } from 'react'

import UploadModal from './components/UploadModal'
import {
  FallbackImage,
  FallbackImageContainer,
  modalStyle,
  StyledImage,
  UploadImageContainer,
} from './styled'

const UploadImage = memo(() => {
  const { state, handleOpen, handleClose } = useSwitch(false)
  const { t } = useSSRTranslation('register')
  const { imgRequired, uploadImg } = useFormContext()

  return (
    <UploadImageContainer>
      <div id="image_section">
        {uploadImg ? (
          <StyledImage
            src={uploadImg}
            layout="fixed"
            width={200}
            height={300}
          />
        ) : (
          <FallbackImageContainer>
            <FallbackImage error={imgRequired} />
            {imgRequired && (
              <Typography css={{ color: '$error' }}>
                {t('error.requiredUploadImage')}
              </Typography>
            )}
          </FallbackImageContainer>
        )}
      </div>
      <StyledButton
        css={{ width: '100%', marginTop: '1rem' }}
        onClick={handleOpen}
        type="button"
      >
        {t('uploadBtn')}
      </StyledButton>
      <Modal modalClassName={modalStyle()} open={state} onClose={handleClose}>
        <UploadModal handleClose={handleClose} />
      </Modal>
    </UploadImageContainer>
  )
})

export default UploadImage
