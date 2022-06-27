import Button from 'common/components/Button'
import Typography from 'common/components/Typography'
import { UPLOAD_LIMIT } from 'common/constants/upload'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import { blobToDataURL } from 'common/utils/imageHelper'
import { Trans } from 'next-i18next'
import { ChangeEvent, FC, useCallback, useRef, useState } from 'react'

import { InnerContainer, RequiredSymbol } from './styled'
import { IUploadFieldProps } from './types'

const UploadField: FC<IUploadFieldProps> = (props) => {
  const { title, required, errorMessage, url, onChange } = props

  const inputRef = useRef<HTMLInputElement | null>(null)
  const { t } = useSSRTranslation('register')
  const [preview, setPreview] = useState('')
  const [isOverSize, setOverSize] = useState(false)

  const onUploadData = useCallback(
    async (ev: ChangeEvent<HTMLInputElement>) => {
      ev.preventDefault()
      if (ev.target.files) {
        const file = ev.target.files[0]
        setOverSize(false)

        if (file.size > UPLOAD_LIMIT) {
          setOverSize(true)
          return
        }

        const imageUrl = await blobToDataURL(file)
        onChange(imageUrl)

        if (typeof window !== 'undefined') {
          window.URL.revokeObjectURL(preview)
          setPreview(window.URL.createObjectURL(file))
        }
      }
    },
    [onChange, preview, setOverSize]
  )

  const onClickUpload = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.value = ''
      inputRef.current.click()
    }
  }, [])

  return (
    <InnerContainer>
      <input
        ref={inputRef}
        type="file"
        style={{ display: 'none' }}
        onChange={onUploadData}
      />
      <Typography
        variant="body"
        css={{ marginBottom: '0.5rem', fontWeight: 'bold' }}
      >
        {title || ''}
        {required && <RequiredSymbol>*</RequiredSymbol>}
      </Typography>

      {preview || url ? (
        <a href={preview || url} target="_blank" rel="noreferrer">
          <Typography
            css={{
              marginRight: '1rem',
              textDecoration: 'underline',
            }}
            as="a"
            variant="body"
            color="confirm"
          >
            <Trans
              i18nKey="register:upload:seeFileLabel"
              values={{
                label: title,
              }}
            />
          </Typography>
        </a>
      ) : (
        <Typography
          css={{
            marginRight: '1rem',
            display: 'inline',
          }}
          variant="body"
        >
          {t('upload.noFileLabel')}
        </Typography>
      )}

      <Button onClick={onClickUpload} css={{ fontSize: '1rem' }} type="button">
        {t('upload.uploadBtnLabel')}
      </Button>

      <Typography color="error">
        {errorMessage || (isOverSize ? t('error.fileLimit') : '')}
      </Typography>
    </InnerContainer>
  )
}

export default UploadField
