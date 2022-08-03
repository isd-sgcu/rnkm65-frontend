import React, { useMemo } from 'react'
import { useRouter } from 'next/router'
import { useState, useCallback } from 'react'
import { QrReader } from 'react-qr-reader'
import { CameraBg } from './camerabg'
import {
  BackButton,
  Camera,
  CameraContainer,
  QRcontainer,
} from './styled'

const Qr = () => {
  const [data, setData] = useState('No Result')

  const router = useRouter()

  const handleBackClick = useCallback(() => {
    router.push('/')
  }, [router])

  return (
    <QRcontainer>
      <CameraContainer>
        <Camera>
          <BackButton onClick={handleBackClick}>X</BackButton>
          <QrReader
            scanDelay={300}
            onResult={(result) => {
              if (result) {
                setData(result.getText())
              }
            }}
            constraints={{ facingMode: 'environment' }}
            videoContainerStyle={{
              position: 'relative',
            }}
            containerStyle={{ width: '100%', height: '100%' }}
            videoStyle={{
              width: 'initial',
              paddingBottom: '5px',
              paddingTop: '1px',
            }}
            ViewFinder={CameraBg}
          />
        </Camera>
      </CameraContainer>
    </QRcontainer>
  )
}

export default Qr
