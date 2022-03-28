import StyledButton from 'common/components/Button'
import Typography from 'common/components/Typography'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import { memo, useMemo } from 'react'

import ImageCropper from '../Cropper'
import { useImageHooks } from './hooks/useImageHooks'
import {
  DescriptionList,
  RootCropperContainer,
  UnorderedListContainer,
} from './styled'
import { IUploadModalProps } from './types'

const UploadModal = memo((props: IUploadModalProps) => {
  const { t } = useSSRTranslation('register')
  const { handleClose } = props
  const { tmpImg, setTmpImg, setCropMetadata, handleSubmitImage } =
    useImageHooks(handleClose)

  const description = useMemo(() => t('uploadModal.desc').split(' | '), [t])

  return (
    <>
      <Typography css={{ color: '$blue' }} variant="h2">
        {t('uploadModal.title')}
      </Typography>
      <RootCropperContainer>
        <ImageCropper
          img={tmpImg}
          setImg={setTmpImg}
          setCropMetaData={setCropMetadata}
        />
        <UnorderedListContainer>
          {description.map((val) => (
            <DescriptionList key={val}>
              <Typography css={{ color: '$blue' }} variant="body">
                {val}
              </Typography>
            </DescriptionList>
          ))}
        </UnorderedListContainer>
      </RootCropperContainer>
      {tmpImg && (
        <StyledButton onClick={handleSubmitImage} type="button">
          {t('uploadModal.submit')}
        </StyledButton>
      )}
    </>
  )
})

export default UploadModal
