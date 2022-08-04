import { CHECKIN_LOCATION } from 'common/constants/checkin'
import { apiClient } from 'common/utils/axios'
import { CheckinDTO, CheckinType } from 'dto/checkinDTO'
import { PageType } from 'module/Checkin/types'
import { useRouter } from 'next/router'
import { useEffect, useMemo, useState } from 'react'

export const useCheckInData = () => {
  const [isLoading, setLoading] = useState(true)
  const [pageStatus, setPageStatus] = useState(PageType.checkin)
  const [location, setLocation] = useState('')
  const [token, setToken] = useState('')
  const i18nKey = useMemo(() => PageType[pageStatus], [pageStatus])
  const router = useRouter()

  useEffect(() => {
    const fetchToken = async () => {
      const { id } = router.query
      const eventType = parseInt(id as string, 10)
      if (!eventType) {
        router.replace('/')
        return
      }

      const eventPlace = CHECKIN_LOCATION[eventType]
      if (!eventPlace) {
        router.replace('/')
        return
      }
      setLocation(eventPlace)

      try {
        const res = await apiClient.post<CheckinDTO>('/qr/checkin/verify', {
          event_type: eventType,
        })
        setToken(res.data.checkin_token)
        setPageStatus(
          res.data.checkin_type === CheckinType.CHECK_IN
            ? PageType.checkin
            : PageType.checkout
        )
      } catch (err) {
        setPageStatus(PageType.error)
      } finally {
        setLoading(false)
      }
    }
    fetchToken()
  }, [router])

  return {
    i18nKey,
    pageStatus,
    isLoading,
    location,
  }
}
