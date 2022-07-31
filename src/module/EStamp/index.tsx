import { useAutoAnimate } from '@formkit/auto-animate/react'
import Typography from 'common/components/Typography'
import { PLACES_DATA } from 'common/constants/eStamp'
import useHideFooter from 'common/contexts/LayoutContext/hooks/useHideFooter'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import dynamic from 'next/dynamic'
import React, { useMemo, useState } from 'react'

import BottomNavBar from './components/BottomNavBar'
import PaperStamp from './components/PaperStamp'
import PinCard from './components/PinCard'
import {
  PinCardContainer,
  PinContainer,
  RootContainer,
  StampContainer,
} from './styled'

const Qr = dynamic(() => import('./components/Qr'))

const EStamp = () => {
  const { t } = useSSRTranslation('eStamp')
  const [open, setOpen] = useState(false)
  const [parent] = useAutoAnimate<HTMLDivElement>()
  useHideFooter()

  const status = useMemo(() => PLACES_DATA.map((place) => place.status), [])

  return (
    <RootContainer ref={parent}>
      <StampContainer>
        <Typography variant="h3" color="blue">
          บัตรสะสม
        </Typography>
        <Typography variant="h2" color="blue">
          E - STAMP
        </Typography>
        <PaperStamp status={status} />
      </StampContainer>
      <PinContainer>
        <Typography variant="subhead2" color="blue">
          {t('placeTitle')}
        </Typography>
        <PinCardContainer>
          {PLACES_DATA.map((place) =>
            place.status ? null : (
              <PinCard
                name={place.name}
                key={place.id}
                urlMap={place.urlMap}
                id={place.id}
              />
            )
          )}
        </PinCardContainer>
      </PinContainer>
      {open && <Qr onClose={() => setOpen(false)} />}
      {!open && <BottomNavBar onClick={() => setOpen(true)} />}
    </RootContainer>
  )
}

export default EStamp
