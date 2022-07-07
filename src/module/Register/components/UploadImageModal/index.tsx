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
  const { handleClose, onSubmit, i18nPrefix = '' } = props
  const { tmpImg, setTmpImg, setCropMetadata, handleSubmitImage } =
    useImageHooks(handleClose, onSubmit)

  const description = useMemo(
    () => t(`${i18nPrefix}.desc`).split(' | '),
    [t, i18nPrefix]
  )

  return (
    <>
      <Typography color="blue" variant="h3" css={{ marginBottom: '0.5rem' }}>
        {t(`${i18nPrefix}.title`)}
      </Typography>
      <RootCropperContainer>
        <ImageCropper
          img={tmpImg}
          i18nPrefix={i18nPrefix}
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
          {t(`${i18nPrefix}.submit`)}
        </Button>
      )}
    </>
  )
})

export default UploadModal
