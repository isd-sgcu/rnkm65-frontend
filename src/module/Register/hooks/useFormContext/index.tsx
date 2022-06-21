import { yupResolver } from '@hookform/resolvers/yup'
import { useSwitch } from 'common/hooks/useSwitch'
import { IFormSchema } from 'common/types/form'
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
  const { register, handleSubmit, setError, control, getValues, setValue } =
    useForm<IFormSchema>({
      resolver: yupResolver(formSchema),
      shouldFocusError: false,
    })

  const setUploadImg = useCallback(
    (url: string) => {
      setValue('imageUrl', url)
    },
    [setValue]
  )

  const handleModalSubmit = useCallback(() => {
    const data = getValues()
    console.log(data)
  }, [getValues])

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
      setUploadImg,
      handleModalSubmit,
      handleCloseModal,
      openModal,
    }),
    [
      control,
      handleCloseModal,
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
