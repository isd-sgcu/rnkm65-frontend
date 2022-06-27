import Button from 'common/components/Button'
import Modal from 'common/components/Modal'
import Typography from 'common/components/Typography'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import { useSwitch } from 'common/hooks/useSwitch'
import { useFormContext } from 'module/Register/hooks/useFormContext'
import { memo } from 'react'
import { Controller } from 'react-hook-form'

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
  const { control } = useFormContext()

  return (
    <UploadImageContainer>
      <Controller
        control={control}
        name="imageUrl"
        render={({ field, fieldState }) => (
          <div id="image_section">
            {field.value ? (
              <StyledImage
                src={field.value}
                layout="fixed"
                width={200}
                height={300}
              />
            ) : (
              <FallbackImageContainer>
                <FallbackImage error={!!fieldState.error} />
                {!!fieldState.error && (
                  <Typography css={{ color: '$error' }}>
                    {t('error.requiredUploadImage')}
                  </Typography>
                )}
              </FallbackImageContainer>
            )}
          </div>
        )}
      />
      <Button
        css={{ width: '100%', marginTop: '1rem' }}
        onClick={handleOpen}
        type="button"
      >
        {t('uploadBtn')}
      </Button>
      <Modal modalClassName={modalStyle()} open={state} onClose={handleClose}>
        <UploadModal handleClose={handleClose} />
      </Modal>
    </UploadImageContainer>
  )
})

export default UploadImage
