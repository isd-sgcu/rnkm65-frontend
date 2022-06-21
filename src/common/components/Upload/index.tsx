import Button from 'common/components/Button'
import Typography from 'common/components/Typography'
import { FC, useCallback, useRef } from 'react'

import { InnerContainer, RequiredSymbol } from './styled'
import { IUploadFieldProps } from './types'

const UploadField: FC<IUploadFieldProps> = (props) => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const { title, required, errorMessage, url, ...remain } = props

  const onClickUpload = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.value = ''
      inputRef.current.click()
    }
  }, [])

  return (
    <InnerContainer>
      <input
        {...remain}
        ref={inputRef}
        type="file"
        style={{ display: 'none' }}
      />
      <Typography
        variant="body"
        css={{ marginBottom: '0.5rem', fontWeight: 'bold' }}
      >
        {title || ''}
        {required && <RequiredSymbol>*</RequiredSymbol>}
      </Typography>

      {url ? (
        <a href={url} target="">
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
