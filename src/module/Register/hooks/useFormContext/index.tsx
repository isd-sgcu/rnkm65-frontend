import { yupResolver } from '@hookform/resolvers/yup'
import { AxiosError } from 'axios'
import Loading from 'common/components/Loading'
import { useAuth } from 'common/contexts/AuthContext'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import { useSwitch } from 'common/hooks/useSwitch'
import { IFormSchema } from 'common/types/form'
import { httpPost, httpPut } from 'common/utils/axios'
import { b64ToBlob } from 'common/utils/imageHelper'
import { RegisterType } from 'module/Register/types'
import { formSchema, templateForm } from 'module/Register/utils/schema'
import { useRouter } from 'next/router'
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'

import { IFormContext } from './types'

const FormContext = createContext<IFormContext>({} as IFormContext)

export const FormProvider = (props: React.PropsWithChildren<{}>) => {
  const { children } = props
  const { user, refreshContext } = useAuth()
  const {
    state: openModal,
    handleOpen,
    handleClose: handleCloseModal,
  } = useSwitch(false)
  const [isLoading, setLoading] = useState(false)
  const [firstLoad, setFirstLoad] = useState(true)
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
    resolver: yupResolver(formSchema),
    shouldFocusError: false,
  })
  const { t } = useSSRTranslation('register')

  const router = useRouter()
  const type = (router.query.type as RegisterType) || RegisterType.Register

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

    const file = new File([await b64ToBlob(uri)], fileName, {
      type: `${prefix}/${uri.substring(stIdx + 1, edIdx)}`,
    })
    return file
  }, [])

  const handleModalSubmit = useCallback(async () => {
    setLoading(true)
    const data = getValues()

    let profileUrl = data.imageUrl
    if (
      !profileUrl.startsWith('http://') &&
      !profileUrl.startsWith('https://')
    ) {
      const file = await generateFile(data.imageUrl, 'image')

      const formData = new FormData()

      // Some put request
      formData.set('file', file)
      formData.set('type', 'image')
      formData.set('tag', 'profile')

      try {
        const res = await httpPost<FormData, { url: string }>(
          '/file/upload',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        )
        profileUrl = res.data.url
      } catch (err) {
        setLoading(false)

        const error = err as unknown as AxiosError

        if (!error.response?.status || error.response.status === 500) {
          throw new Error(t('error.unknownError'))
        }
        throw new Error(t('error.uploadImageFailed'))
      }
    }

    const {
      vaccineCertificateUrl,
      phoneNumber,
      lineID,
      imageUrl,
      canSelectBaan,
      allergyFood,
      allergyMedicine,
      foodRestriction,
      ...remain
    } = data

    try {
      await httpPut('/user', {
        ...remain,
        phone: phoneNumber,
        line_id: lineID,
        allergy_medicine: allergyMedicine,
        food_restriction: foodRestriction,
        can_select_baan: canSelectBaan === 'true',
      })
    } catch (err) {
      setLoading(false)
      const error = err as unknown as AxiosError

      if (!error.response || error.response?.status === 500) {
        throw new Error(t('error.serverError'))
      }

      if (error.response.status === 400) {
        throw new Error(t('error.updateProfileFailed'))
      }

      throw new Error(
        `${t('error.unknownError')} (${error.response.data.message})`
      )
    }

    await refreshContext()

    const redirectUrl = localStorage.getItem('redirectUrl')
    if (redirectUrl) {
      localStorage.removeItem('redirectUrl')
      router.push(redirectUrl)
      return
    }

    router.push('/')
  }, [generateFile, getValues, refreshContext, router, t])

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

    const { id, phone = '', canSelectBaan, isVerify, ...rest } = user

    if (type === RegisterType.Register && phone && isVerify) {
      router.push('/')
      return
    }

    reset({
      phoneNumber: phone === '-' ? '-' : phone.replaceAll('-', ''),
      vaccineCertificateUrl: isVerify ? 'true' : 'false',
      canSelectBaan: canSelectBaan ? 'true' : 'false',
      ...rest,
    })

    setFirstLoad(false)
  }, [reset, router, type, user])

  return (
    <FormContext.Provider value={providerProps}>
      {(isLoading || firstLoad) && <Loading />}
      <form onSubmit={handleClickSubmit}>{!firstLoad && children}</form>
    </FormContext.Provider>
  )
}

export const useFormContext = () => useContext(FormContext)
