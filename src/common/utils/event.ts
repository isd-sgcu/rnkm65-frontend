import { checkedEvents, events } from 'common/mock/fakeEvents'

export const getAllEvents = async (mock?: boolean) => {
  if (mock) return events
  throw new Error('TODO: implement this!')
}

export const getAllCheckedEvents = async (mock?: boolean) => {
  if (mock) return checkedEvents
  throw new Error('TODO: implement this!')
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
