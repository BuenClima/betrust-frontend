import { Dayjs } from 'dayjs'
import { useForm } from 'react-hook-form'

import { useAppSelector } from '@/app/store'
import { SelectValueProps } from '@/types'

export type FilterTipstersFormValues = {
  date: Dayjs | null
  sport: SelectValueProps[]
  league: SelectValueProps[]
  picks: number
  yield: number
  profit: number
  winRate: number
}
export const useFilterTipstersForm = () => {
  const filters = useAppSelector((state) => state.filters)

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<FilterTipstersFormValues>({
    defaultValues: {
      ...filters.filters
    }
  })

  return {
    control,
    handleSubmit,
    setValue,
    errors
  }
}
