import { FallbackImage, UploadButton, UploadImageContainer } from './styled'

function UploadImage() {
  return (
    <UploadImageContainer>
      <FallbackImage />
      <UploadButton type="submit">อัพโหลดรูป</UploadButton>
    </UploadImageContainer>
  )
}

export { UploadImage }
