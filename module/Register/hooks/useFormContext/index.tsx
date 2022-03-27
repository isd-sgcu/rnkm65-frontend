import { yupResolver } from '@hookform/resolvers/yup'
import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'

import { formSchema, IFormSchemaType, templateForm } from '../../utils/schema'
import { IFormContext } from './types'

const FormContext = createContext<IFormContext>({} as IFormContext)

export const FormProvider = (props: React.PropsWithChildren<{}>) => {
  const { children } = props

  const [uploadImg, setUploadImg] = useState('')
  const [imgRequired, setImgRequired] = useState(false)
  const { register, handleSubmit, clearErrors, setError, control } =
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
      clearErrors()
      if (!checkImageExisted()) return
      // TODO
      console.log(e)
    },
    [checkImageExisted, clearErrors]
  )

  const handleSubmitFailed: SubmitErrorHandler<IFormSchemaType> = useCallback(
    (e) => {
      const imageExisted = checkImageExisted()

      let foundFirst = true
      templateForm.forEach((val) => {
        if (e[val.key]) {
          setError(
            val.key,
            { ...e[val.key] },
            { shouldFocus: imageExisted && foundFirst }
          )
          foundFirst = false
        }
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
