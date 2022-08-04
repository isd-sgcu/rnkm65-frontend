import { array, InferType, object, string } from 'yup'

const eventSchema = object({
  id: string().required(),
  nameTH: string().required(),
  descriptionTH: string().required(),
  nameEN: string().required(),
  descriptionEN: string().required(),
  imageURL: string().required(),
})

export const getAllEventsSchema = object({
  event: array().of(eventSchema).required(),
})

export const getAllCheckedEventsSchema = object({
  eventList: array(eventSchema).required(),
})

export interface IEvent extends InferType<typeof eventSchema> {}

export interface IGetAllEvent extends InferType<typeof getAllEventsSchema> {}

export interface IGetAllCheckedEvent
  extends InferType<typeof getAllCheckedEventsSchema> {}
