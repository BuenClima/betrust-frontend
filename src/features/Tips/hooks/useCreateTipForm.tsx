import dayjs, { Dayjs } from 'dayjs'
import {
  Control,
  FieldErrors,
  useForm,
  UseFormHandleSubmit,
  UseFormSetValue
} from 'react-hook-form'

import { SelectValueProps } from '@/types'

/**
 * @description CreateTipFormValues type
 * @property {SelectValueProps | null} sport
 * @property {SelectValueProps | null} league
 * @property {string} tip
 * @property {Dayjs} date
 * @property {SelectValueProps | null} provider
 * @property {number} odds
 * @property {number} stake
 * @property {boolean} paid
 */
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

/**
 * @description CreateTipForm type
 * @property {Control<CreateTipFormValues, any>} control
 * @property {UseFormHandleSubmit<CreateTipFormValues, undefined>} handleSubmit
 * @property {UseFormSetValue<CreateTipFormValues>} setValue
 * @property {FieldErrors<CreateTipFormValues>} errors
 */
type CreateTipForm = {
  control: Control<CreateTipFormValues, any>
  handleSubmit: UseFormHandleSubmit<CreateTipFormValues, undefined>
  setValue: UseFormSetValue<CreateTipFormValues>
  errors: FieldErrors<CreateTipFormValues>
}

/**
 * @description useCreateTipForm hook
 * @returns {CreateTipForm} CreateTipForm
 */
export const useCreateTipForm = (): CreateTipForm => {
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

export default useCreateTipForm
