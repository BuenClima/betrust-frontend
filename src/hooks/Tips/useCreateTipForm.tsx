import { useForm } from 'react-hook-form'

export type CreateTipFormValues = {
  sport: string
  match: string
  tip: string
}

export const useCreateTipForm = () => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<CreateTipFormValues>({
    defaultValues: {
      sport: '',
      match: '',
      tip: ''
    }
  })

  return {
    control,
    handleSubmit,
    setValue,
    errors
  }
}
