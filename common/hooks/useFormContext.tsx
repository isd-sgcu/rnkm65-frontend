import { yupResolver } from '@hookform/resolvers/yup'
import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import { useForm, UseFormRegister } from 'react-hook-form'

import { formSchema, IFormSchemaType } from '../../module/Register/schema'

interface IFormContext {
  register: UseFormRegister<IFormSchemaType>
  img: string
  setImg: React.Dispatch<React.SetStateAction<string>>
}

const FormContext = createContext<IFormContext>({} as IFormContext)

export const FormProvider = (props: React.PropsWithChildren<{}>) => {
  const { children } = props

  const [img, setImg] = useState('')
  const { register, handleSubmit } = useForm<IFormSchemaType>({
    resolver: yupResolver(formSchema),
  })

  const handleSubmitSuccess = useCallback(async (e: Record<string, any>) => {
    // TODO
    console.log(e)
  }, [])

  const handleSubmitFailed = useCallback((e) => {
    // TODO
    console.log(e)
  }, [])

  const handleSubmitForm = handleSubmit(handleSubmitSuccess, handleSubmitFailed)

  const providerProps = useMemo(
    () => ({
      register,
      img,
      setImg,
    }),
    [img, register]
  )

  return (
    <FormContext.Provider value={providerProps}>
      <form onSubmit={handleSubmitForm}>{children}</form>
    </FormContext.Provider>
  )
}

export const useFormContext = () => useContext(FormContext)
