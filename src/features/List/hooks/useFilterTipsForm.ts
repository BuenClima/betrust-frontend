import { Dayjs } from 'dayjs'
import { useForm } from 'react-hook-form'

import { useAppSelector } from '@/app/store'
import { SelectValueProps } from '@/types'

export type FilterTipsFormValues = {
  date: Dayjs | null
  sport: SelectValueProps[]
  status: SelectValueProps[]
}
export const useFilterTipsForm = () => {
  const filters = useAppSelector((state) => state.filters)

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<FilterTipsFormValues>({
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
