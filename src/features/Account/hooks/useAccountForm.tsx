import { useForm } from 'react-hook-form'

export type AccountFormValues = {
  email: string
  name: string
  description: string
}

export const useAccountForm = () => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<AccountFormValues>({
    defaultValues: {
      email: '',
      name: '',
      description: ''
    }
  })

  return {
    control,
    handleSubmit,
    setValue,
    errors
  }
}
