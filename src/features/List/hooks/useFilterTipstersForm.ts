import { Dayjs } from 'dayjs'
import {
  Control,
  FieldErrors,
  useForm,
  UseFormHandleSubmit,
  UseFormSetValue
} from 'react-hook-form'

import { useAppSelector } from '@/app/store'
import { SelectValueProps } from '@/types'

/**
 * @description FilterTipstersFormValues type.
 * @property {Dayjs | null} date - Date.
 * @property {SelectValueProps[]} sport - Sport.
 * @property {SelectValueProps[]} league - League.
 * @property {number} picks - Picks.
 * @property {number} yield - Yield.
 * @property {number} profit - Profit.
 * @property {number} winRate - Win rate.
 */
export type FilterTipstersFormValues = {
  date: Dayjs | null
  sport: SelectValueProps[]
  league: SelectValueProps[]
  picks: number
  yield: number
  profit: number
  winRate: number
}

/**
 * @description FilterTipstersForm type.
 * @property {Control<FilterTipstersFormValues, any>} control - Control.
 * @property {UseFormHandleSubmit<FilterTipstersFormValues, undefined>} handleSubmit - Handle submit.
 * @property {UseFormSetValue<FilterTipstersFormValues>} setValue - Set value.
 * @property {FieldErrors<FilterTipstersFormValues>} errors - Errors.
 */
type FilterTipstersForm = {
  control: Control<FilterTipstersFormValues, any>
  handleSubmit: UseFormHandleSubmit<FilterTipstersFormValues, undefined>
  setValue: UseFormSetValue<FilterTipstersFormValues>
  errors: FieldErrors<FilterTipstersFormValues>
}

/**
 * @description useFilterTipstersForm hook
 * @returns {FilterTipstersForm} FilterTipstersForm.
 */
export const useFilterTipstersForm = (): FilterTipstersForm => {
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

export default useFilterTipstersForm
