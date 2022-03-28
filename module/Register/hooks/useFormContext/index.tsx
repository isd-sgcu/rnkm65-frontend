import { yupResolver } from '@hookform/resolvers/yup'
import {
  formSchema,
  IFormSchemaType,
  templateForm,
} from 'module/Register/utils/schema'
import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'

import { IFormContext } from './types'

const FormContext = createContext<IFormContext>({} as IFormContext)

export const FormProvider = (props: React.PropsWithChildren<{}>) => {
  const { children } = props

  const [uploadImg, setUploadImg] = useState('')
  const [imgRequired, setImgRequired] = useState(false)
  const { register, handleSubmit, setError, control } =
    useForm<IFormSchemaType>({
      resolver: yupResolver(formSchema),
      shouldFocusError: false,
    })

  const checkImageExisted = useCallback(() => {
    if (uploadImg === '') {
      const el = document.getElementById('image_section')
      if (el) {
        el.scrollIntoView()
      }

      setImgRequired(true)
      return false
    }
    setImgRequired(false)
    return true
  }, [uploadImg])

  const handleSubmitSuccess: SubmitHandler<IFormSchemaType> = useCallback(
    async (e) => {
      if (!checkImageExisted()) return
      // TODO
      console.log(e)
    },
    [checkImageExisted]
  )

  const handleSubmitFailed: SubmitErrorHandler<IFormSchemaType> = useCallback(
    (e) => {
      const imageExisted = checkImageExisted()

      let foundFirst = true

      // Templates are 2D array
      templateForm.forEach((row) => {
        row.forEach((val) => {
          if (e[val.fieldKey]) {
            setError(
              val.fieldKey,
              { ...e[val.fieldKey] },
              { shouldFocus: imageExisted && foundFirst }
            )
            foundFirst = false
          }
        })
      })
    },
    [checkImageExisted, setError]
  )

  const handleSubmitForm = handleSubmit(handleSubmitSuccess, handleSubmitFailed)

  const providerProps = useMemo(
    () => ({
      register,
      uploadImg,
      imgRequired,
      control,
      setUploadImg,
      setImgRequired,
    }),
    [control, imgRequired, register, uploadImg]
  )

  return (
    <FormContext.Provider value={providerProps}>
      <form onSubmit={handleSubmitForm}>{children}</form>
    </FormContext.Provider>
  )
}

export const useFormContext = () => useContext(FormContext)
