import StyledButton from 'common/components/Button'
import { Modal } from 'common/components/Modal'
import Typography from 'common/components/Typography'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import { useSwitch } from 'common/hooks/useSwitch'
import { useMemo } from 'react'

import { ImageCropper } from './components/Cropper'
import { DescriptionList, FallbackImage, UploadImageContainer } from './styled'

function UploadImage() {
  const { state, handleOpen, handleClose } = useSwitch(false)
  const { t } = useSSRTranslation('register')

  const description = useMemo(() => t('modalDesc').split(' | '), [t])

  return (
    <UploadImageContainer>
      <FallbackImage />
      <StyledButton onClick={handleOpen} type="button">
        อัพโหลดรูป
      </StyledButton>
      <Modal open={state} onClose={handleClose}>
        <Typography variant="h2">แก้ไขรูปภาพ</Typography>
        <div>
          <ImageCropper />
          <ul>
            {description.map((val) => (
              <DescriptionList key={val}>
                <Typography variant="body">{t(val)}</Typography>
              </DescriptionList>
            ))}
          </ul>
        </div>
        <StyledButton onClick={handleClose}>{t('submitModal')}</StyledButton>
      </Modal>
    </UploadImageContainer>
  )
}

export { UploadImage }
