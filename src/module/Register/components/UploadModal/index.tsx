import Button from 'common/components/Button'
import Typography from 'common/components/Typography'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import { memo, useMemo } from 'react'

import ImageCropper from './components/Cropper'
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
      <Typography color="blue" variant="h3" css={{ marginBottom: '0.5rem' }}>
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
              <Typography color="blue" variant="body">
                {val}
              </Typography>
            </DescriptionList>
          ))}
        </UnorderedListContainer>
      </RootCropperContainer>
      {tmpImg && (
        <Button onClick={handleSubmitImage} type="button">
          {t('uploadModal.submit')}
        </Button>
      )}
    </>
  )
})

export default UploadModal
