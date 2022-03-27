import { yupResolver } from '@hookform/resolvers/yup'
import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import { FieldError, useForm, UseFormRegister } from 'react-hook-form'

import { formSchema, IFormSchemaType, templateForm } from '../schema'

interface IFormContext {
  uploadImg: string
  imgRequired: boolean
  errors: Partial<Record<keyof IFormSchemaType, FieldError>>
  register: UseFormRegister<IFormSchemaType>
  setUploadImg: React.Dispatch<React.SetStateAction<string>>
  setImgRequired: React.Dispatch<React.SetStateAction<boolean>>
}

const FormContext = createContext<IFormContext>({} as IFormContext)

export const FormProvider = (props: React.PropsWithChildren<{}>) => {
  const { children } = props

  const [uploadImg, setUploadImg] = useState('')
  const [imgRequired, setImgRequired] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm<IFormSchemaType>({
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

  const handleSubmitSuccess = useCallback(
    async (e: Record<string, any>) => {
      clearErrors()
      if (!checkImageExisted()) return
      // TODO
      console.log(e)
    },
    [checkImageExisted, clearErrors]
  )

  const handleSubmitFailed = useCallback(
    (e) => {
      const imageExisted = checkImageExisted()

      // TODO
      let foundFirst = true
      templateForm.forEach((val) => {
        if (e[val.key]) {
          setError(val.key, {}, { shouldFocus: imageExisted && foundFirst })
          foundFirst = false
        }
      })

      console.log(errors)
    },
    [checkImageExisted, errors, setError]
  )

  const handleSubmitForm = handleSubmit(handleSubmitSuccess, handleSubmitFailed)

  const providerProps = useMemo(
    () => ({
      register,
      uploadImg,
      imgRequired,
      errors,
      setUploadImg,
      setImgRequired,
    }),
    [errors, imgRequired, register, uploadImg]
  )

  return (
    <FormContext.Provider value={providerProps}>
      <form onSubmit={handleSubmitForm}>{children}</form>
    </FormContext.Provider>
  )
}

export const useFormContext = () => useContext(FormContext)
