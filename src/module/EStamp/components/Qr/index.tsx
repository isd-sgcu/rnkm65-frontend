import { CSS } from '@stitches/react'
import { convertUrlToEventId } from 'common/utils/event'
import { APP_BASE_URL } from 'config/env'
import { useRouter } from 'next/router'
import React, { useMemo } from 'react'
import { QrReader } from 'react-qr-reader'

import PlaceInformationDrawer from '../PlaceInformationDrawer'
import { PlaceInformation } from '../PlaceInformationDrawer/types'
import { CameraBg } from './camerabg'
import { BackButton, Camera, QrContainer } from './styled'
import { QrProps } from './types'

const Qr = ({ open, onClose, onScan, event, checkedEvents }: QrProps) => {
  const router = useRouter()
  const data: PlaceInformation | undefined = useMemo(() => {
    if (event)
      return {
        ...event,
        isChecked: !!checkedEvents.find((e) => e.id === event.id),
      }
    return undefined
  }, [checkedEvents, event])

  const css = useMemo(() => {
    const cssOptions: CSS = {}
    if (!open) {
      cssOptions.top = '100%'
    } else if (open && !event) {
      cssOptions.backgroundColor = '#D9D9D9'
      cssOptions['@sm'] = { top: 0, height: '100vh' }
    }
    return cssOptions
  }, [open, event])

  return (
    <QrContainer css={css}>
      {open && !event && (
        <Camera>
          <BackButton onClick={onClose}>X</BackButton>
          <QrReader
            scanDelay={300}
            onResult={(result) => {
              if (result) {
                const scannedText = result.getText()

                // Handle if user uses eStamp QR reader to scan
                // (a) check-in/out QR Code
                if (scannedText.startsWith(`${APP_BASE_URL}/checkin`)) {
                  router.push(scannedText)
                  return
                }
                // (b) ticket redemption QR Code
                if (scannedText === `${APP_BASE_URL}/ticket`) {
                  router.push(scannedText)
                  return
                }

                const eventId = convertUrlToEventId(scannedText)
                if (eventId) onScan(eventId)
              }
            }}
            constraints={{ facingMode: { ideal: 'environment' } }}
            videoContainerStyle={{
              position: 'relative',
              alignItems: 'center',
            }}
            containerStyle={{ width: '100%', height: '100%' }}
            videoStyle={{
              width: 'initial',
              paddingBottom: '5px',
              paddingTop: '1px',
              backgroundColor: '#FAFAFA',
              transform: 'translate(-50%, -50%)',
              top: '50%',
              left: '50%',
            }}
            ViewFinder={CameraBg}
          />
        </Camera>
      )}
      <PlaceInformationDrawer open={open} data={data} onClose={onClose} />
    </QrContainer>
  )
}

export default Qr
