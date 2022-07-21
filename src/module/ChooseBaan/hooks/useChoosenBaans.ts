import { AxiosError } from 'axios'
import { BaanSize, IBaan, IShortBaan } from 'common/types/baan'
import { httpPut } from 'common/utils/axios'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useMemo, useState } from 'react'

import { Baan, Filter } from './types'

const initialFilter: Filter = {
  search: '',
  size: [
    BaanSize.Small,
    BaanSize.Medium,
    BaanSize.Large,
    BaanSize.ExtraLarge,
    BaanSize.ExtraExtraLarge,
  ],
}

export const useChoosenBaans = (
  initBaans: IBaan[],
  initChoosenBaans: IShortBaan[]
) => {
  const [choosenBaans, setChoosenBaans] =
    useState<IShortBaan[]>(initChoosenBaans)

  const [isLoading, setLoading] = useState(false)

  const router = useRouter()

  const baans = useMemo(
    () =>
      initBaans.map((v) => {
        const order = choosenBaans.findIndex(({ id }) => id === v.id) + 1
        return { ...v, isSelected: !!order, order: order || null }
      }),
    [choosenBaans, initBaans]
  )

  const [displayBaans, setDisplayBaans] = useState<Baan[]>(baans)

  const [filter, setFilter] = useState<Filter>(initialFilter)

  // get choosen baans from local storage on mount
  useEffect(() => {
    if (!window || choosenBaans.length !== 0) return
    const StoredBaansString = window.localStorage.getItem('choosenBaans')
    if (!StoredBaansString) return
    const StoredBaans = JSON.parse(StoredBaansString) as IShortBaan[]
    setChoosenBaans(StoredBaans)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // save choosen baans to local storage
  useEffect(() => {
    window.localStorage.setItem('choosenBaans', JSON.stringify(choosenBaans))
  }, [choosenBaans])

  useEffect(() => {
    setDisplayBaans(
      baans.filter(
        ({ name, size }) =>
          name.includes(filter.search) && filter.size.includes(size)
      )
    )
  }, [baans, filter])

  const onChooseBaan = useCallback(
    (id: number) => {
      const foundBaan = choosenBaans.find((v) => v.id === id)
      if (!foundBaan && choosenBaans.length < 3) {
        const val = baans.find((v) => v.id === id)
        setChoosenBaans([...choosenBaans, val!])
      } else if (foundBaan) {
        const val = choosenBaans.filter((v) => v.id !== id)
        setChoosenBaans(val)
      }
    },
    [choosenBaans, baans]
  )

  const onRemoveBaan = useCallback(
    (index: number) =>
      setChoosenBaans((prev) => prev.filter((_, i) => i !== index)),
    []
  )

  const onSearch = useCallback((val: string) => {
    setFilter((prev) => ({ ...prev, search: val }))
  }, [])

  const onClickFilterSize = useCallback((val: BaanSize) => {
    setFilter((prev) => {
      if (prev.size?.includes(val)) {
        return { ...prev, size: prev.size?.filter((v) => v !== val) }
      }
      return { ...prev, size: [...prev.size, val] }
    })
  }, [])

  const updateBaans = useCallback((newBaans: IShortBaan[]) => {
    setChoosenBaans(newBaans)
  }, [])

  const submitBaan = useCallback(async () => {
    setLoading(true)

    const baanId = choosenBaans.map((v) => v.id)
    try {
      await httpPut('/group/select', {
        baans: baanId,
      })
      localStorage.removeItem('choosenBaans')
      router.replace('/')
    } catch (err) {
      const error = err as unknown as AxiosError
      setLoading(false)
      throw new Error(
        JSON.stringify({
          status: error.code,
          message: error.message,
          stack: error.stack?.substring(0, 300),
        })
      )
    }
  }, [choosenBaans, router])

  return {
    baans,
    loading: isLoading,
    choosenBaans,
    onChooseBaan,
    onRemoveBaan,
    onClickFilterSize,
    onSearch,
    displayBaans,
    filter,
    updateBaans,
    submitBaan,
  }
}
