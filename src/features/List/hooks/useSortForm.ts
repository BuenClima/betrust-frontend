import { useForm } from 'react-hook-form'

export type SortFormValues = {
  alphabetical: boolean
  topRated: boolean
}

export const useSortForm = () => {
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
