import { useAutoAnimate } from '@formkit/auto-animate/react'
import useHideFooter from 'common/contexts/LayoutContext/hooks/useHideFooter'
import { useRouter } from 'next/router'
import React, { useCallback, useState } from 'react'
import { QrReader } from 'react-qr-reader'

import { CameraBg } from './components/camerabg'
import PlaceInformationDrawer from './components/PlaceInformationDrawer'
import { BackButton, Camera, QrContainer } from './styled'

const Qr = () => {
  const router = useRouter()
  const [data, setData] = useState<{} | undefined>(undefined)
  const [parent] = useAutoAnimate<HTMLDivElement>(/* optional config */)
  useHideFooter()

  const handleBackClick = useCallback(() => {
    router.push('/eStamp')
  }, [router])

  return (
    <QrContainer ref={parent} css={data ? {} : { backgroundColor: '#D9D9D9' }}>
      {!data && (
        <Camera>
          <BackButton onClick={handleBackClick}>X</BackButton>
          <QrReader
            scanDelay={300}
            onResult={(result) => {
              if (result) {
                console.log(result.getText())
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
              backgroundColor: '#FAFAFA',
            }}
            ViewFinder={CameraBg}
          />
        </Camera>
      )}
      <PlaceInformationDrawer data={data} />
    </QrContainer>
  )
}

export default Qr
