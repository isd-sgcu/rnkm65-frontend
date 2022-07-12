import { yupResolver } from '@hookform/resolvers/yup'
import Loading from 'common/components/Loading'
import { useAuth } from 'common/contexts/AuthContext'
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
        throw new Error("Can't upload image")
      }
    }

    const {
      vaccineCertificateUrl,
      phoneNumber,
      lineID,
      imageUrl,
      canSelectBaan,
      ...remain
    } = data

    try {
      await httpPut('/user', {
        ...remain,
        phone: phoneNumber,
        line_id: lineID,
        // image_url: profileUrl,
        can_select_baan: canSelectBaan === 'true',
      })
    } catch (err) {
      setLoading(false)
      throw new Error("Can't update user")
    }

    await refreshContext()

    router.push('/')
  }, [generateFile, getValues, refreshContext, router])

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

    const { id, phone, canSelectBaan, ...rest } = user

    if (type === RegisterType.Register && phone) {
      router.push('/')
      return
    }

    reset({
      phoneNumber: phone.replaceAll('-', ''),
      vaccineCertificateUrl: phone ? 'true' : 'false',
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
