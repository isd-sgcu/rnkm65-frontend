import Button from 'common/components/Button'
import Typography from 'common/components/Typography'
import { blobToDataURL } from 'common/utils/imageHelper'
import { ChangeEvent, FC, useCallback, useRef, useState } from 'react'

import { InnerContainer, RequiredSymbol } from './styled'
import { IUploadFieldProps } from './types'

const UploadField: FC<IUploadFieldProps> = (props) => {
  const { title, required, errorMessage, url, onChange } = props

  const inputRef = useRef<HTMLInputElement | null>(null)
  const [preview, setPreview] = useState('')

  const onUploadData = useCallback(
    async (ev: ChangeEvent<HTMLInputElement>) => {
      ev.preventDefault()
      if (ev.target.files) {
        const file = ev.target.files[0]
        const imageUrl = await blobToDataURL(file)
        onChange(imageUrl)
        setPreview(window.URL.createObjectURL(file))
      }
    },
    [onChange]
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
            ดูใบรับรอง
          </Typography>
        </a>
      ) : (
        <Typography
          css={{
            marginRight: '1rem',
            display: 'inline',
            // textDecoration: 'underline',
          }}
          variant="body"
        >
          ยังไม่ได้เลือกไฟล์
        </Typography>
      )}

      <Button onClick={onClickUpload} css={{ fontSize: '1rem' }} type="button">
        อัพโหลดไฟล์
      </Button>

      <Typography color="error">{errorMessage}</Typography>
    </InnerContainer>
  )
}

export default UploadField
