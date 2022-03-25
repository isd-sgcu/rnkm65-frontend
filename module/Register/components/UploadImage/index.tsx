import { Modal } from 'common/components/Modal'
import Typography from 'common/components/Typography'
import { useSwitch } from 'common/hooks/useSwitch'

import { FallbackImage, UploadButton, UploadImageContainer } from './styled'

function UploadImage() {
  const { state, handleOpen, handleClose } = useSwitch(false)
  return (
    <UploadImageContainer>
      <FallbackImage />
      <UploadButton onClick={handleOpen} type="submit">
        อัพโหลดรูป
      </UploadButton>
      <Modal open={state} onClose={handleClose}>
        <Typography variant="h2">แก้ไขรูปภาพ</Typography>
      </Modal>
    </UploadImageContainer>
  )
}

export { UploadImage }
