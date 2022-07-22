import Button from 'common/components/Button'
import Loading from 'common/components/Loading'
import Typography from 'common/components/Typography'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import { memo, useMemo, useRef } from 'react'

import ImageCropper from './components/Cropper'
import { useImageHooks } from './hooks/useImageHooks'
import {
  ActionButtonContainer,
  DescriptionList,
  RootCropperContainer,
  UnorderedListContainer,
} from './styled'
import { IUploadModalProps } from './types'

const UploadModal = memo((props: IUploadModalProps) => {
  const { t } = useSSRTranslation('register')
  const { handleClose, onSubmit, i18nPrefix = '', aspectRatio } = props
  const uploadAgainBtnRef = useRef<() => void | null>(null)
  const {
    tmpImg,
    setTmpImg,
    setCropMetadata,
    handleSubmitImage,
    innerError,
    resetError,
    isLoading,
  } = useImageHooks(handleClose, onSubmit)

  const description = useMemo(
    () => t(`${i18nPrefix}.desc`).split(' | '),
    [t, i18nPrefix]
  )

  return (
    <>
      {isLoading && <Loading />}
      <Typography color="blue" variant="h3" css={{ marginBottom: '0.5rem' }}>
        {t(`${i18nPrefix}.title`)}
      </Typography>
      <RootCropperContainer>
        <ImageCropper
          img={tmpImg}
          ref={uploadAgainBtnRef}
          aspectRatio={aspectRatio}
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
        <ActionButtonContainer>
          <Button
            css={{
              fontSize: '1.25rem',
              marginRight: '1.25rem',
              minWidth: '160px',
            }}
            variant="decline"
            onClick={() => {
              if (uploadAgainBtnRef.current) uploadAgainBtnRef.current()
              resetError()
            }}
            type="button"
          >
            {t(`${i18nPrefix}.uploadAgain`)}
          </Button>
          <Button
            variant="primary"
            css={{ fontSize: '1.25rem', minWidth: '160px' }}
            onClick={handleSubmitImage}
            type="button"
          >
            {t(`${i18nPrefix}.submit`)}
          </Button>
        </ActionButtonContainer>
      )}
      {innerError && (
        <Typography
          css={{ fontWeight: 'bold', marginTop: '0.75rem' }}
          color="error"
        >
          {innerError}
        </Typography>
      )}
    </>
  )
})

export default UploadModal
