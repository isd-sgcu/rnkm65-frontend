import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useQuery } from '@tanstack/react-query'
import Loading from 'common/components/Loading'
import Typography from 'common/components/Typography'
import useHideFooter from 'common/contexts/LayoutContext/hooks/useHideFooter'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import { getAllCheckedEvents } from 'common/utils/event'
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
import { EStampProps } from './types'

const Qr = dynamic(() => import('./components/Qr'))

const EStamp = ({ events }: EStampProps) => {
  const { t, i18n } = useSSRTranslation('eStamp')
  const [open, setOpen] = useState(false)
  const [parent] = useAutoAnimate<HTMLDivElement>()
  const { data, isLoading } = useQuery(
    ['events'],
    () => getAllCheckedEvents(true),
    {
      initialData: [],
    }
  )
  useHideFooter()

  const status = useMemo(
    () => events.map((event) => !!data?.find((d) => d.id === event.id)),
    [events, data]
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
              {events
                .filter((event) => !data.find((e) => e.id === event.id))
                .map((event) => (
                  <PinCard
                    key={event.id}
                    imgUrl={event.imageURL}
                    name={i18n.language === 'en' ? event.nameEN : event.nameTH}
                  />
                ))}
            </PinCardContainer>
          </PinContainer>
          <BottomNavBar onClick={() => setOpen(true)} />
        </>
      )}
    </RootContainer>
  )
}

export default EStamp
