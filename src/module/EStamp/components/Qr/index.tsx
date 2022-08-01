import { useAutoAnimate } from '@formkit/auto-animate/react'
import React, { useState } from 'react'
import { QrReader } from 'react-qr-reader'

import PlaceInformationDrawer from '../PlaceInformationDrawer'
import { PlaceInformation } from '../PlaceInformationDrawer/types'
import { CameraBg } from './camerabg'
import { BackButton, Camera, QrContainer } from './styled'
import { QrProps } from './types'

const Qr = ({ onClose, events, checkedEvents }: QrProps) => {
  const [parent] = useAutoAnimate<HTMLDivElement>()
  const [data, setData] = useState<PlaceInformation | undefined>(undefined)

  return (
    <QrContainer
      ref={parent}
      css={
        data
          ? {}
          : { backgroundColor: '#D9D9D9', '@sm': { top: 0, height: '100vh' } }
      }
    >
      <Camera>
        {!data && (
          <>
            <BackButton onClick={onClose}>X</BackButton>
            <QrReader
              scanDelay={300}
              onResult={(result) => {
                if (result) {
                  console.log(result.getText())
                  const event = events.find((e) => e.id === '1')
                  if (event) {
                    setData({
                      ...event,
                      isChecked: !!checkedEvents.find((e) => e.id === event.id),
                    })
                  }
                }
              }}
              constraints={{ facingMode: 'user' }}
              videoContainerStyle={{
                position: 'relative',
              }}
              containerStyle={{ width: '100%', height: '100%' }}
              videoStyle={{
                width: 'initial',
                paddingBottom: '5px',
                paddingTop: '1px',
                backgroundColor: '#FAFAFA',
              }}
              ViewFinder={CameraBg}
            />
          </>
        )}
      </Camera>

      <PlaceInformationDrawer data={data} onClose={onClose} />
    </QrContainer>
  )
}

export default Qr
