import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useQuery } from '@tanstack/react-query'
import Loading from 'common/components/Loading'
import Typography from 'common/components/Typography'
import { PLACES_DATA } from 'common/constants/eStamp'
import useHideFooter from 'common/contexts/LayoutContext/hooks/useHideFooter'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import { checkedEvents, events } from 'common/mock/fakeEvents'
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
  const { data, isLoading } = useQuery(['events'], () => checkedEvents, {
    initialData: [],
  })
  useHideFooter()

  const status = useMemo(
    () => events.map((event) => !!data?.find((d) => d.id === event.id)),
    [data]
  )

  if (isLoading) return <Loading />

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
      {open && (
        <Qr
          onClose={() => setOpen(false)}
          events={events}
          checkedEvents={data}
        />
      )}
      {!open && (
        <>
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
          <BottomNavBar onClick={() => setOpen(true)} />
        </>
      )}
    </RootContainer>
  )
}

export default EStamp
