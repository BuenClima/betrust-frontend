import dayjs, { Dayjs } from 'dayjs'
import { useForm } from 'react-hook-form'

import { SelectValueProps } from '@/types'

export type CreateTipFormValues = {
  sport: SelectValueProps | null
  league: SelectValueProps | null
  tip: string
  date: Dayjs
  provider: SelectValueProps | null
  odds: number
  stake: number
  paid: boolean
}

export const useCreateTipForm = () => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<CreateTipFormValues>({
    defaultValues: {
      sport: null,
      league: null,
      tip: '',
      date: dayjs(),
      provider: null,
      odds: 0,
      stake: 0,
      paid: true
    }
  })

  return {
    control,
    handleSubmit,
    setValue,
    errors
  }
}
