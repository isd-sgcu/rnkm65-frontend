import { yupResolver } from '@hookform/resolvers/yup'
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { FieldError, useForm, UseFormRegister } from 'react-hook-form'

import { formSchema, IFormSchemaType } from '../schema'

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
    watch,
  } = useForm<IFormSchemaType>({
    resolver: yupResolver(formSchema),
  })

  const checkImageExisted = useCallback(() => {
    if (uploadImg === '') {
      document.getElementById('image')?.focus()
      setImgRequired(true)
      return false
    }
    setImgRequired(false)
    return true
  }, [uploadImg])

  const handleSubmitSuccess = useCallback(
    async (e: Record<string, any>) => {
      clearErrors()
      checkImageExisted()
      // TODO
      console.log(e)
    },
    [checkImageExisted, clearErrors]
  )

  const handleSubmitFailed = useCallback(
    (e) => {
      const imageExist = checkImageExisted()
      // TODO
      Object.keys(e).forEach((value) => {
        setError(
          value as keyof IFormSchemaType,
          {},
          { shouldFocus: imageExist }
        )
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

  // Clear error in subscription actually not working
  useEffect(() => {
    const subscription = watch((data) => {
      const entries = Object.entries(data)
      entries.forEach(([key, value]) => {
        if (value) {
          clearErrors(key as keyof IFormSchemaType)
        }
      })
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [clearErrors, watch])

  return (
    <FormContext.Provider value={providerProps}>
      <form onSubmit={handleSubmitForm}>{children}</form>
    </FormContext.Provider>
  )
}

export const useFormContext = () => useContext(FormContext)
