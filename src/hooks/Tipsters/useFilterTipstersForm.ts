import dayjs, { Dayjs } from 'dayjs'
import { useForm } from 'react-hook-form'

import { SelectValueProps } from '@/types'

export type FilterTipstersFormValues = {
  date: Dayjs
  sport: SelectValueProps[]
  league: SelectValueProps[]
  picks: number
  yield: number
  profit: number
  winRate: number
}
export const useFilterTipstersForm = () => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<FilterTipstersFormValues>({
    defaultValues: {
      date: dayjs(),
      sport: [],
      league: [],
      picks: 0,
      yield: 0,
      profit: 0,
      winRate: 0
    }
  })

  return {
    control,
    handleSubmit,
    setValue,
    errors
  }
}
