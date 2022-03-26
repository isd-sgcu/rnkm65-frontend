import StyledButton from 'common/components/Button'
import { Modal } from 'common/components/Modal'
import Typography from 'common/components/Typography'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import { useSwitch } from 'common/hooks/useSwitch'
import { useMemo, useState } from 'react'

import { ImageCropper } from './components/Cropper'
import {
  DescriptionList,
  FallbackImage,
  modalStyle,
  RootCropperContainer,
  UploadImageContainer,
} from './styled'
import { ICropMetadata } from './types'

function UploadImage() {
  const { state, handleOpen, handleClose } = useSwitch(false)
  const { t } = useSSRTranslation('register')
  const [img, setImg] = useState<string>('')
  const [, setCropMetadata] = useState<ICropMetadata>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  })

  const description = useMemo(() => t('modalDesc').split(' | '), [t])

  return (
    <UploadImageContainer>
      <FallbackImage />
      <StyledButton onClick={handleOpen} type="button">
        อัพโหลดรูป
      </StyledButton>
      <Modal modalClassName={modalStyle()} open={state} onClose={handleClose}>
        <Typography variant="h2">แก้ไขรูปภาพ</Typography>
        <RootCropperContainer>
          <ImageCropper
            img={img}
            setImg={setImg}
            setCropMetaData={setCropMetadata}
          />
          <ul>
            {description.map((val) => (
              <DescriptionList key={val}>
                <Typography variant="body">{t(val)}</Typography>
              </DescriptionList>
            ))}
          </ul>
        </RootCropperContainer>
        <StyledButton onClick={handleClose}>{t('submitModal')}</StyledButton>
      </Modal>
    </UploadImageContainer>
  )
}

export { UploadImage }
