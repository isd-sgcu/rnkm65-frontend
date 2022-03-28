import StyledButton from 'common/components/Button'
import Typography from 'common/components/Typography'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import { memo, useMemo } from 'react'

import { ImageCropper } from '../Cropper'
import { useImageHooks } from './hooks/useImageHooks'
import { DescriptionList, RootCropperContainer } from './styled'
import { IUploadModalProps } from './types'

export const UploadModal = memo((props: IUploadModalProps) => {
  const { t } = useSSRTranslation('register')
  const { handleClose } = props
  const { tmpImg, setTmpImg, setCropMetadata, handleSubmitImage } =
    useImageHooks(handleClose)

  const description = useMemo(() => t('modalDesc').split(' | '), [t])

  return (
    <>
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
    </>
  )
})
