import { yupResolver } from '@hookform/resolvers/yup'
import { useAuth } from 'common/contexts/AuthContext'
import { useSwitch } from 'common/hooks/useSwitch'
import { IFormSchema } from 'common/types/form'
import { httpPut } from 'common/utils/axios'
import { b64ToBlob } from 'common/utils/imageHelper'
import { formSchema, templateForm } from 'module/Register/utils/schema'
import { useRouter } from 'next/router'
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from 'react'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'

import { IFormContext } from './types'

const FormContext = createContext<IFormContext>({} as IFormContext)

export const FormProvider = (props: React.PropsWithChildren<{}>) => {
  const { children } = props
  const { user } = useAuth()
  const {
    state: openModal,
    handleOpen,
    handleClose: handleCloseModal,
  } = useSwitch(false)
  const {
    register,
    handleSubmit,
    setError,
    control,
    getValues,
    setValue,
    clearErrors,
    reset,
  } = useForm<IFormSchema>({
    defaultValues: user,
    resolver: yupResolver(formSchema),
    shouldFocusError: false,
  })

  const router = useRouter()

  const approveVaccine = useCallback(() => {
    setValue('vaccineCertificateUrl', 'true')
    clearErrors('vaccineCertificateUrl')
  }, [clearErrors, setValue])

  const setUploadImg = useCallback(
    (url: string) => {
      setValue('imageUrl', url)
    },
    [setValue]
  )

  const generateFile = useCallback(async (uri: string, prefix: string) => {
    const stIdx = uri.indexOf('/')
    const edIdx = uri.indexOf(';')
    const fileName = `${prefix}_.${uri.substring(stIdx + 1, edIdx)}`

    return [new File([await b64ToBlob(uri)], fileName), fileName]
  }, [])

  const handleModalSubmit = useCallback(async () => {
    const data = getValues()

    const profileUrl = data.imageUrl
    if (
      !profileUrl.startsWith('http://') &&
      !profileUrl.startsWith('https://')
    ) {
      const [file] = await generateFile(data.imageUrl, 'image')

      const formData = new FormData()

      // Some put request
      formData.set('image', file)
    }

    const {
      vaccineCertificateUrl,
      phoneNumber,
      lineID,
      imageUrl,
      canSelectBaan,
      ...remain
    } = data

    await httpPut('/user', {
      ...remain,
      phone: phoneNumber,
      line_id: lineID,
      image_url: imageUrl,
      can_select_baan: canSelectBaan === 'true',
    })

    router.push('/')
  }, [generateFile, getValues, router])

  const handleSuccess: SubmitHandler<IFormSchema> = useCallback(() => {
    handleOpen()
  }, [handleOpen])

  const handleFailed: SubmitErrorHandler<IFormSchema> = useCallback(
    (e) => {
      let foundFirst = true

      // Templates are 2D array
      templateForm.forEach((row) => {
        row.forEach((val) => {
          if (e[val.fieldKey]) {
            setError(
              val.fieldKey,
              { ...e[val.fieldKey] },
              { shouldFocus: foundFirst }
            )
            foundFirst = false
          }
        })
      })
    },
    [setError]
  )

  const handleClickSubmit = handleSubmit(handleSuccess, handleFailed)

  const providerProps = useMemo(
    () => ({
      register,
      control,
      approveVaccine,
      setUploadImg,
      handleModalSubmit,
      handleCloseModal,
      openModal,
    }),
    [
      control,
      handleCloseModal,
      approveVaccine,
      setUploadImg,
      handleModalSubmit,
      openModal,
      register,
    ]
  )

  // set initial value
  useEffect(() => {
    if (!user) return

    const { id, phone, ...rest } = user

    reset({
      phoneNumber: phone.replaceAll('-', ''),
      vaccineCertificateUrl: phone ? 'true' : 'false',
      ...rest,
    })
  }, [reset, user])

  return (
    <FormContext.Provider value={providerProps}>
      <form onSubmit={handleClickSubmit}>{children}</form>
    </FormContext.Provider>
  )
}

export const useFormContext = () => useContext(FormContext)
