import dayjs, { Dayjs } from 'dayjs'
import { useForm } from 'react-hook-form'

import { SelectValueProps } from '@/types'

export type FilterBetsFormValues = {
  date: Dayjs
  sport: SelectValueProps[]
  status: SelectValueProps[]
}
export const useFilterBetsForm = () => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<FilterBetsFormValues>({
    defaultValues: {
      date: dayjs(),
      sport: [],
      status: []
    }
  })

  return {
    control,
    handleSubmit,
    setValue,
    errors
  }
}
