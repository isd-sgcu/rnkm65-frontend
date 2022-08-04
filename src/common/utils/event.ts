import axios from 'axios'
import { checkedEvents, events } from 'common/mock/fakeEvents'
import {
  getAllCheckedEventsSchema,
  getAllEventsSchema,
  IGetAllCheckedEvent,
  IGetAllEvent,
} from 'common/types/event'
import { API_BASE_URL, APP_BASE_URL } from 'config/env'

import { apiClient } from './axios'

export const getAllEvents = async (mock?: boolean) => {
  if (mock) return events
  const { data } = await axios.get<IGetAllEvent>(
    `${API_BASE_URL}/estamp?eventType=estamp`
  )
  if (await getAllEventsSchema.isValid(data))
    return getAllEventsSchema
      .validateSync(data)
      .event.sort((a, b) => a.id.localeCompare(b.id))
  throw new Error('Schema not match (getAllEvents)')
}

export const getAllCheckedEvents = async (mock?: boolean) => {
  if (mock) return checkedEvents
  const { data } = await apiClient.get<IGetAllCheckedEvent>('/estamp/user')
  if (await getAllCheckedEventsSchema.isValid(data))
    return getAllCheckedEventsSchema.validateSync(data).eventList
  throw new Error('Schema not match (getAllCheckedEvents)')
}

export const checkInEvent = async (id: string, mock?: boolean) => {
  if (mock) {
    const event = events.find((e) => e.id === id)
    if (event) {
      checkedEvents.push(event)
      return
    }
  }
  await apiClient.post('/qr/estamp/confirm', { event_id: id })
}

export const convertUrlToEventId = (url: string, mock?: boolean) => {
  if (mock) return '1'
  if (url.startsWith(`${APP_BASE_URL}/eStamp`)) {
    const params = new URLSearchParams(new URL(url).searchParams)
    return params.get('eventId')
  }
  return null
}
