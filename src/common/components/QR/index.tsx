import React from 'react'
import { useEffect, useState } from 'react'
import { QrReader } from 'react-qr-reader'
import { CameraBg } from './camerabg'
import { Camera, CameraContainer } from './styled'

const Qr = () => {
  const [data, setData] = useState('No Result')

  return (
    <CameraContainer>
      <Camera>
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
            width: '100%',
          }}
          ViewFinder={CameraBg}
        />
      </Camera>
    </CameraContainer>
  )
}

export default Qr
