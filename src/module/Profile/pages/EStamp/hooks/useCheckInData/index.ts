import { Axios, AxiosResponse } from 'axios'
import { CHECKIN_LOCATION } from 'common/constants/checkin'
import { apiClient } from 'common/utils/axios'
import { CheckinDTO, CheckinType } from 'dto/checkinDTO'
import { PageType } from 'module/Checkin/types'
import { useRouter } from 'next/router'
import { useEffect, useMemo, useState } from 'react'

export const useCheckInData = () => {
  // please excuse my code, i am terribly sorry

  const [isLoading, setLoading] = useState(true)
  const [mainEventStatus, setMainEventStatus] = useState(PageType.checkin)
  const [mainEventToken, setMainEventToken] = useState('')
  const [freshmenNightStatus, setFreshmenNightStatus] = useState(
    PageType.checkin
  )
  const [freshmenNightToken, setFreshmenNightToken] = useState('')

  const mainEvent_i18nKey = useMemo(
    () => PageType[mainEventStatus],
    [mainEventToken]
  )
  const freshmenNight_i18nKey = useMemo(
    () => PageType[freshmenNightStatus],
    [freshmenNightToken]
  )
  const router = useRouter()

  useEffect(() => {
    const fetchEvent = async (
      eventType: string,
      onData: (res: AxiosResponse<CheckinDTO, any>) => void,
      onError: (err: unknown) => void
    ) => {
      try {
        // fetch main event
        const res = await apiClient.post<CheckinDTO>('/qr/checkin/verify', {
          event_type: eventType,
        })

        onData(res)
      } catch (err) {
        onError(err)
      }
    }

    const fetchToken = async () => {
      // fetch both event types
      const MainEventType = CHECKIN_LOCATION[1]
      const FreshmenNightType = CHECKIN_LOCATION[2]

      // digusting code, im sry again
      await Promise.all([
        fetchEvent(
          MainEventType,
          (res) => {
            setMainEventToken(res.data.checkin_token)
            setMainEventStatus(
              res.data.checkin_type === CheckinType.CHECK_IN
                ? PageType.checkin
                : PageType.checkout
            )
          },
          (err) => {
            console.error('er', err)
            setMainEventStatus(PageType.error)
          }
        ),
        fetchEvent(
          FreshmenNightType,
          (res) => {
            setFreshmenNightToken(res.data.checkin_token)
            setFreshmenNightStatus(
              res.data.checkin_type === CheckinType.CHECK_IN
                ? PageType.checkin
                : PageType.checkout
            )
          },
          (err) => {
            console.error('er', err)
            setFreshmenNightStatus(PageType.error)
          }
        ),
      ])

      return setLoading(false)
    }

    fetchToken()
  }, [router])

  return {
    isLoading,
    mainEvent_i18nKey,
    mainEventStatus,
    mainEventToken,
    freshmenNight_i18nKey,
    freshmenNightStatus,
    freshmenNightToken,
  }
}
