import StyledButton from 'common/components/Button'
import { Modal } from 'common/components/Modal'
import Typography from 'common/components/Typography'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import { useSwitch } from 'common/hooks/useSwitch'
import { useFormContext } from 'module/Register/hooks/useFormContext'
import { useCallback, useMemo, useState } from 'react'

import { ImageCropper } from './components/Cropper'
import {
  DescriptionList,
  FallbackImage,
  modalStyle,
  RootCropperContainer,
  StyledImage,
  UploadImageContainer,
} from './styled'
import { ICropMetadata } from './types'
import { getCroppedImage } from './utils/imageHelper'

const UploadImage = () => {
  const { state, handleOpen, handleClose } = useSwitch(false)
  const { t } = useSSRTranslation('register')
  const [tmpImg, setTmpImg] = useState<string>('')
  const { imgRequired, setImgRequired, uploadImg, setUploadImg } =
    useFormContext()
  const [cropMetadata, setCropMetadata] = useState<ICropMetadata>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  })

  const description = useMemo(() => t('modalDesc').split(' | '), [t])
  const handleOpenModal = useCallback(() => {
    setTmpImg('')
    setCropMetadata({
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    })
    handleOpen()
  }, [handleOpen])

  const handleSubmitImage = useCallback(async () => {
    const croppedImage = await getCroppedImage(tmpImg, cropMetadata)
    setUploadImg(croppedImage)
    setImgRequired(false)

    handleClose()
  }, [cropMetadata, handleClose, setImgRequired, setUploadImg, tmpImg])

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
          <FallbackImage error={imgRequired} />
        )}
      </div>
      <StyledButton
        css={{ width: '100%', marginTop: '1rem' }}
        onClick={handleOpenModal}
        type="button"
      >
        {t('uploadBtn')}
      </StyledButton>
      <Modal modalClassName={modalStyle()} open={state} onClose={handleClose}>
        <Typography variant="h2">{t('modalTitle')}</Typography>
        <RootCropperContainer>
          <ImageCropper
            img={tmpImg}
            setImg={setTmpImg}
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
        {tmpImg && (
          <StyledButton onClick={handleSubmitImage} type="button">
            {t('modalSubmit')}
          </StyledButton>
        )}
      </Modal>
    </UploadImageContainer>
  )
}

export { UploadImage }
