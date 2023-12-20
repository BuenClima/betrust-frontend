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
 * @description FilterTipsFormValues type.
 * @property {Dayjs | null} date - Date.
 * @property {SelectValueProps[]} sport - Sport.
 * @property {SelectValueProps[]} status - Status.
 */
export type FilterTipsFormValues = {
  date: Dayjs | null
  sport: SelectValueProps[]
  status: SelectValueProps[]
}

/**
 * @description FilterTipsForm type.
 * @property {Control<FilterTipsFormValues, any>} control - Control.
 * @property {UseFormHandleSubmit<FilterTipsFormValues, undefined>} handleSubmit - Handle submit.
 * @property {UseFormSetValue<FilterTipsFormValues>} setValue - Set value.
 * @property {FieldErrors<FilterTipsFormValues>} errors - Errors.
 */
export type FilterTipsForm = {
  control: Control<FilterTipsFormValues, any>
  handleSubmit: UseFormHandleSubmit<FilterTipsFormValues, undefined>
  setValue: UseFormSetValue<FilterTipsFormValues>
  errors: FieldErrors<FilterTipsFormValues>
}

/**
 * @description useFilterTipsForm hook
 * @returns {FilterTipsForm} FilterTipsForm.
 */
export const useFilterTipsForm = (): FilterTipsForm => {
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

export default useFilterTipsForm
