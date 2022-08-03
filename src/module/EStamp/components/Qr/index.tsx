import { CSS } from '@stitches/react'
import { convertUrlToEventId } from 'common/utils/event'
import React, { useMemo } from 'react'
import { QrReader } from 'react-qr-reader'

import PlaceInformationDrawer from '../PlaceInformationDrawer'
import { PlaceInformation } from '../PlaceInformationDrawer/types'
import { CameraBg } from './camerabg'
import { BackButton, Camera, QrContainer } from './styled'
import { QrProps } from './types'

const Qr = ({ open, onClose, onScan, event, checkedEvents }: QrProps) => {
  const data: PlaceInformation | undefined = useMemo(() => {
    if (event)
      return {
        ...event,
        isChecked: !!checkedEvents.find((e) => e.id === event.id),
      }
    return undefined
  }, [checkedEvents, event])

  const css: CSS = { top: '100%' }
  if (open) {
    css.top = undefined
    if (!event) {
      css.backgroundColor = '#D9D9D9'
      css['@sm'] = { top: 0, height: '100vh' }
    }
  }

  return (
    <QrContainer css={css}>
      {open && !event && (
        <Camera>
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
        </Camera>
      )}
      <PlaceInformationDrawer data={data} onClose={onClose} />
    </QrContainer>
  )
}

export default Qr
