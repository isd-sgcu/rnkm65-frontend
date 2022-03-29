import { yupResolver } from '@hookform/resolvers/yup'
import { useSwitch } from 'common/hooks/useSwitch'
import { IFormSchema } from 'common/types/form'
import { formSchema, templateForm } from 'module/Register/utils/schema'
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
  const {
    state: openModal,
    handleOpen,
    handleClose: handleCloseModal,
  } = useSwitch(false)
  const { register, handleSubmit, setError, control, getValues } =
    useForm<IFormSchema>({
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

  const handleModalSubmit = useCallback(() => {
    const data = getValues()
    console.log(data)
  }, [getValues])

  const handleSuccess: SubmitHandler<IFormSchema> = useCallback(() => {
    if (!checkImageExisted()) return
    handleOpen()
  }, [checkImageExisted, handleOpen])

  const handleFailed: SubmitErrorHandler<IFormSchema> = useCallback(
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

  const handleClickSubmit = handleSubmit(handleSuccess, handleFailed)

  const providerProps = useMemo(
    () => ({
      register,
      uploadImg,
      imgRequired,
      control,
      setUploadImg,
      setImgRequired,
      handleModalSubmit,
      handleCloseModal,
      openModal,
    }),
    [
      control,
      handleCloseModal,
      handleModalSubmit,
      imgRequired,
      openModal,
      register,
      uploadImg,
    ]
  )

  return (
    <FormContext.Provider value={providerProps}>
      <form onSubmit={handleClickSubmit}>{children}</form>
    </FormContext.Provider>
  )
}

export const useFormContext = () => useContext(FormContext)
