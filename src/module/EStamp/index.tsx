import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useQuery } from '@tanstack/react-query'
import Loading from 'common/components/Loading'
import Typography from 'common/components/Typography'
import useHideFooter from 'common/contexts/LayoutContext/hooks/useHideFooter'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import { IEvent } from 'common/types/event'
import { getAllCheckedEvents, getAllEvents } from 'common/utils/event'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useMemo, useState } from 'react'

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
  const router = useRouter()
  const { t, i18n } = useSSRTranslation('eStamp')
  const [open, setOpen] = useState(false)
  const [scanedEvent, setScanedEvent] = useState<IEvent | undefined>(undefined)
  const [parent] = useAutoAnimate<HTMLDivElement>()
  const { data: events, isLoading: eventsIsLoading } = useQuery(
    ['allEvents'],
    () => getAllEvents(),
    {
      initialData: [],
    }
  )
  const { data, isLoading } = useQuery(
    ['events'],
    () => getAllCheckedEvents(),
    {
      initialData: [],
    }
  )
  useHideFooter()

  const status = useMemo(
    () => events.map((event) => !!data?.find((d) => d.id === event.id)),
    [events, data]
  )
  const qrScanHandler = useCallback(
    (eId: string) => {
      const event = events.find((e) => e.id === eId)
      if (event) setScanedEvent(event)
    },
    [events]
  )
  const openDrawerHandler = useCallback(() => {
    setOpen(true)
  }, [])
  const closeDrawerHandler = useCallback(() => {
    setScanedEvent(undefined)
    setOpen(false)
  }, [])

  useEffect(() => {
    if (router.query.eventId) {
      qrScanHandler(router.query.eventId.toString())
      setOpen(true)
    }
  }, [router.query, qrScanHandler])

  if (eventsIsLoading || isLoading) return <Loading />

  return (
    <RootContainer ref={parent}>
      <StampContainer>
        <Typography variant="h3" color="blue">
          {t('title')}
        </Typography>
        <Typography variant="h2" color="blue">
          E - STAMP
        </Typography>
        <PaperStamp status={status} />
      </StampContainer>
      {open && (
        <Qr
          onClose={closeDrawerHandler}
          onScan={qrScanHandler}
          event={scanedEvent}
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
          <BottomNavBar onClick={openDrawerHandler} />
        </>
      )}
    </RootContainer>
  )
}

export default EStamp
