import { useQuery } from '@tanstack/react-query'
import Loading from 'common/components/Loading'
import Typography from 'common/components/Typography'
import useHideFooter from 'common/contexts/LayoutContext/hooks/useHideFooter'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import { IEvent } from 'common/types/event'
import { getAllCheckedEvents } from 'common/utils/event'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useMemo, useState } from 'react'

import BottomNavBar from './components/BottomNavBar'
import PaperStamp from './components/PaperStamp'
import PinCard from './components/PinCard'
import Qr from './components/Qr'
import {
  PinCardContainer,
  PinContainer,
  RootContainer,
  StampContainer,
} from './styled'
import { EStampProps } from './types'

const EStamp = ({ events }: EStampProps) => {
  const router = useRouter()
  const { t, i18n } = useSSRTranslation('eStamp')
  const [open, setOpen] = useState(!!router.query.openCamera)
  const [scanedEvent, setScanedEvent] = useState<IEvent | undefined>(undefined)
  const { data, isLoading } = useQuery(
    ['events'],
    () => getAllCheckedEvents(),
    {
      initialData: [],
    }
  )
  useHideFooter()

  const estamps = useMemo(
    () =>
      events.map((event) => ({
        id: event.id,
        status: !!data.find((d) => d.id === event.id),
      })),
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
      router.replace({ pathname: router.pathname }, undefined, {
        shallow: true,
      })
      if (scanedEvent) setOpen(true)
    }
  }, [router, scanedEvent, qrScanHandler])

  const remainingPlaces = useMemo(
    () => events.filter((event) => !data.find((e) => e.id === event.id)),
    [data, events]
  )

  const pinCards = useMemo(
    () =>
      remainingPlaces.map((event) => (
        <PinCard
          key={event.id}
          imageURL={event.imageURL}
          name={i18n.language === 'en' ? event.nameEN : event.nameTH}
        />
      )),
    [i18n.language, remainingPlaces]
  )

  if (isLoading) return <Loading />

  return (
    <RootContainer>
      <StampContainer>
        <Typography variant="h3" color="blue">
          {t('title')}
        </Typography>
        <Typography variant="h2" color="blue">
          E - STAMP
        </Typography>
        <PaperStamp estamps={estamps} />
      </StampContainer>
      <Qr
        open={open}
        onClose={closeDrawerHandler}
        onScan={qrScanHandler}
        event={scanedEvent}
        checkedEvents={data}
      />
      {remainingPlaces.length !== 0 && (
        <PinContainer css={open ? { display: 'none' } : {}}>
          <Typography variant="subhead2" color="blue">
            {t('placeTitle')}
          </Typography>
          <PinCardContainer>{pinCards}</PinCardContainer>
        </PinContainer>
      )}
      <BottomNavBar
        css={open ? { display: 'none' } : {}}
        onClick={openDrawerHandler}
      />
    </RootContainer>
  )
}

export default EStamp
