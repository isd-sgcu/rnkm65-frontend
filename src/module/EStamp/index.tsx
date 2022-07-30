import Typography from 'common/components/Typography'
import { PLACES_DATA } from 'common/constants/eStamp'
import useHideFooter from 'common/contexts/LayoutContext/hooks/useHideFooter'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import React, { useMemo } from 'react'

import BottomNavBar from './components/BottomNavBar'
import PaperStamp from './components/PaperStamp'
import PinCard from './components/PinCard'
import {
  PinCardContainer,
  PinContainer,
  RootContainer,
  StampContainer,
} from './styled'

const EStamp = () => {
  const { t } = useSSRTranslation('eStamp')
  useHideFooter()

  const status = useMemo(() => PLACES_DATA.map((place) => place.status), [])

  return (
    <RootContainer>
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
      <BottomNavBar />
    </RootContainer>
  )
}

export default EStamp
