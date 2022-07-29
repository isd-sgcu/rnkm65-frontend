import { CameraButton, ButtonContainer, WhiteBar } from './styled'
import React, { useCallback } from 'react'
import { CameraIcon } from './cameraIcon'
import { useRouter } from 'next/router'

const Camera = () => {
    const router = useRouter()

    const handleCamClick = useCallback(() => {
      router.push('/qr')
    }, [router])

  return (
    <ButtonContainer>
      <WhiteBar>
        <CameraButton onClick={handleCamClick}>
          <CameraIcon />
        </CameraButton>
      </WhiteBar>
    </ButtonContainer>
  )
}

export default Camera
