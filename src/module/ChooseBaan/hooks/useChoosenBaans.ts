import { IBaan, IShortBaan } from 'common/types/baan'
import { useCallback, useEffect, useMemo, useState } from 'react'

import { Baan, Filter } from './types'

const initialFilter: Filter = {
  search: '',
  size: null,
}

export const useChoosenBaans = (
  initBaans: IBaan[],
  initChoosenBaans: IShortBaan[]
) => {
  const [choosenBaans, setChoosenBaans] =
    useState<IShortBaan[]>(initChoosenBaans)

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
    setDisplayBaans(baans.filter(({ name }) => name.includes(filter.search)))
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

  return {
    baans,
    choosenBaans,
    onChooseBaan,
    onRemoveBaan,
    onSearch,
    displayBaans,
    filter,
  }
}
