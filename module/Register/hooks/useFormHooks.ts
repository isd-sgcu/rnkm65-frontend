import { yupResolver } from '@hookform/resolvers/yup'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'

import { formSchema } from '../schema'

export function useFormHooks() {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  })

  const handleSubmitSuccess = useCallback(async (e: Record<string, any>) => {
    // TODO
    console.log(e)
  }, [])

  const handleSubmitFailed = useCallback((e) => {
    // TODO
    console.log(e)
  }, [])

  const handleSubmitForm = handleSubmit(handleSubmitSuccess, handleSubmitFailed)

  return { register, handleSubmitForm }
}
