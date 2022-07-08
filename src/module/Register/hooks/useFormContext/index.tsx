import { yupResolver } from '@hookform/resolvers/yup'
import { useSwitch } from 'common/hooks/useSwitch'
import { IFormSchema } from 'common/types/form'
import { b64ToBlob } from 'common/utils/imageHelper'
import { formSchema, templateForm } from 'module/Register/utils/schema'
import React, { createContext, useCallback, useContext, useMemo } from 'react'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'

import { IFormContext } from './types'

const FormContext = createContext<IFormContext>({} as IFormContext)

export const FormProvider = (props: React.PropsWithChildren<{}>) => {
  const { children } = props
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
  } = useForm<IFormSchema>({
    resolver: yupResolver(formSchema),
    shouldFocusError: false,
  })

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
    const vaccineFileName = `${prefix}_.${uri.substring(stIdx + 1, edIdx)}`

    return new File([await b64ToBlob(uri)], vaccineFileName)
  }, [])

  const handleModalSubmit = useCallback(async () => {
    const data = getValues()

    const vaccineFile = await generateFile(
      data.vaccineCertificateUrl,
      'vaccine'
    )
    const profileFile = await generateFile(data.imageUrl, 'image')

    const formData = new FormData()
    // Some put request
    formData.append('image', vaccineFile)

    // Some put request
    formData.set('image', profileFile)

    console.log(data)
  }, [generateFile, getValues])

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

  return (
    <FormContext.Provider value={providerProps}>
      <form onSubmit={handleClickSubmit}>{children}</form>
    </FormContext.Provider>
  )
}

export const useFormContext = () => useContext(FormContext)
