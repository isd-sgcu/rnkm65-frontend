import Typography from 'common/components/Typography'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import React from 'react'

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
  const { places } = {
    places: [
      {
        name: 'place1',
        id: 1,
        urlMap: 'https://www.google.co.th/',
        status: true,
      },
      {
        name: 'place2',
        id: 2,
        urlMap: 'https://www.google.co.th/',
        status: true,
      },
      {
        name: 'place3',
        id: 3,
        urlMap: 'https://www.google.co.th/',
        status: false,
      },
      {
        name: 'place4',
        id: 4,
        urlMap: 'https://www.google.co.th/',
        status: false,
      },
      {
        name: 'place5',
        id: 5,
        urlMap: 'https://www.google.co.th/',
        status: true,
      },
      {
        name: 'place6',
        id: 6,
        urlMap: 'https://www.google.co.th/',
        status: false,
      },
      {
        name: 'place7',
        id: 7,
        urlMap: 'https://www.google.co.th/',
        status: false,
      },
      {
        name: 'place8',
        id: 8,
        urlMap: 'https://www.google.co.th/',
        status: false,
      },
      {
        name: 'place9',
        id: 9,
        urlMap: 'https://www.google.co.th/',
        status: true,
      },
    ],
  }
  const status = []
  for (let i = 0; i < places.length; i += 1) {
    status.push(places[i].status)
  }
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
          {places.map((place) => {
            if (!place.status) {
              return (
                <PinCard
                  name={place.name}
                  key={place.id}
                  urlMap={place.urlMap}
                  id={place.id}
                />
              )
            }
            return null
          })}
        </PinCardContainer>
      </PinContainer>
      <BottomNavBar />
    </RootContainer>
  )
}

export default EStamp
