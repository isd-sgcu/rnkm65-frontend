import { checkedEvents, events } from 'common/mock/fakeEvents'
import { IEvent } from 'common/types/event'

import { httpGet } from './axios'

export const getAllEvents = async (mock?: boolean) => {
  if (mock) return events
  return (await httpGet<{ eventList: IEvent[] }>('/estamp?eventType=estamp'))
    .data.eventList
}

export const getAllCheckedEvents = async (mock?: boolean) => {
  if (mock) return checkedEvents
  return (await httpGet<{ eventList: IEvent[] }>('/estamp/user')).data.eventList
}

export const checkInEvent = async (id: string, mock?: boolean) => {
  if (mock) {
    const event = events.find((e) => e.id === id)
    if (event) {
      checkedEvents.push(event)
      return
    }
  }
  throw new Error('TODO: implement this!')
}
