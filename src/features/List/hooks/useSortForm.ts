import {
  Control,
  FieldErrors,
  useForm,
  UseFormHandleSubmit,
  UseFormSetValue
} from 'react-hook-form'

/**
 * @description SortFormValues type.
 * @property {boolean} alphabetical - Alphabetical.
 * @property {boolean} topRated - Top rated.
 */
export type SortFormValues = {
  alphabetical: boolean
  topRated: boolean
}

/**
 * @description SortForm type.
 * @property {Control<SortFormValues, any>} control - Control.
 * @property {UseFormHandleSubmit<SortFormValues, undefined>} handleSubmit - Handle submit.
 * @property {UseFormSetValue<SortFormValues>} setValue - Set value.
 * @property {FieldErrors<SortFormValues>} errors - Errors.
 */
type SortForm = {
  control: Control<SortFormValues, any>
  handleSubmit: UseFormHandleSubmit<SortFormValues, undefined>
  setValue: UseFormSetValue<SortFormValues>
  errors: FieldErrors<SortFormValues>
}

/**
 * @description useSortForm hook
 * @returns {SortForm} SortForm.
 */
export const useSortForm = (): SortForm => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<SortFormValues>({
    defaultValues: {
      topRated: true,
      alphabetical: false
    }
  })
  return {
    control,
    handleSubmit,
    setValue,
    errors
  }
}

export default useSortForm
