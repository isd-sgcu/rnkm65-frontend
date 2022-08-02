import { useAutoAnimate } from '@formkit/auto-animate/react'
import { convertUrlToEventId } from 'common/utils/event'
import React, { useMemo } from 'react'
import { QrReader } from 'react-qr-reader'

import PlaceInformationDrawer from '../PlaceInformationDrawer'
import { PlaceInformation } from '../PlaceInformationDrawer/types'
import { CameraBg } from './camerabg'
import { BackButton, Camera, QrContainer } from './styled'
import { QrProps } from './types'

const Qr = ({ onClose, onScan, event, checkedEvents }: QrProps) => {
  const [parent] = useAutoAnimate<HTMLDivElement>()
  const data: PlaceInformation | undefined = useMemo(() => {
    if (event)
      return {
        ...event,
        isChecked: !!checkedEvents.find((e) => e.id === event.id),
      }
    return undefined
  }, [checkedEvents, event])

  return (
    <QrContainer
      ref={parent}
      css={
        event
          ? {}
          : { backgroundColor: '#D9D9D9', '@sm': { top: 0, height: '100vh' } }
      }
    >
      <Camera>
        {!event && (
          <>
            <BackButton onClick={onClose}>X</BackButton>
            <QrReader
              scanDelay={300}
              onResult={(result) => {
                if (result) {
                  const eventId = convertUrlToEventId(result.getText())
                  if (eventId) onScan(eventId)
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
