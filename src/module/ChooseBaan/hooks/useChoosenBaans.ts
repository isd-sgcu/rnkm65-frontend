import { IBaan, IShortBaan } from 'common/types/baan'
import { useEffect, useState } from 'react'

interface Baan extends IBaan {
  isSelected: boolean
  order: number | null
}

export const useChoosenBaans = (
  initBaans: IBaan[],
  initChoosenBaans: IShortBaan[]
) => {
  const [baans, setBaans] = useState<Baan[]>(
    initBaans.map((v) => {
      const order = initChoosenBaans.findIndex(({ id }) => id === v.id) + 1
      return { ...v, isSelected: !!order, order: order || null }
    })
  )
  const [choosenBaans, setChoosenBaans] =
    useState<IShortBaan[]>(initChoosenBaans)

  useEffect(() => {
    setBaans((b) =>
      b.map((v) => {
        const order = choosenBaans.findIndex(({ id }) => id === v.id) + 1
        return { ...v, isSelected: !!order, order: order || null }
      })
    )
  }, [choosenBaans])

  const onChooseBaan = (id: number) => {
    if (!choosenBaans.find((v) => v.id === id) && choosenBaans.length < 3) {
      const val = baans.find((v) => v.id === id)
      setChoosenBaans([...choosenBaans, val!])
    }
  }

  const onRemoveBaan = (index: number) =>
    setChoosenBaans(choosenBaans.filter((_, i) => i !== index))

  return { baans, choosenBaans, onChooseBaan, onRemoveBaan }
}
