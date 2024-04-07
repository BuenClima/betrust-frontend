import {
  Control,
  FieldErrors,
  useForm,
  UseFormHandleSubmit,
  UseFormSetValue
} from 'react-hook-form'

/**
 * @description Profile form values
 * @property {string} email - email
 * @property {string} name - name
 */
export type SignInFormValues = {
  email: string
  password: string
}

/**
 * @description UseSignInForm hook return type
 * @property {Control<SignInFormValues, any>} control - control
 * @property {UseFormHandleSubmit<SignInFormValues, undefined>} handleSubmit - handleSubmit
 * @property {UseFormSetValue<SignInFormValues>} setValue - setValue
 * @property {FieldErrors<SignInFormValues>} errors - errors
 */
type UseSignInForm = {
  control: Control<SignInFormValues, any>
  handleSubmit: UseFormHandleSubmit<SignInFormValues, undefined>
  setValue: UseFormSetValue<SignInFormValues>
  errors: FieldErrors<SignInFormValues>
}

/**
 * @description useSignInForm hook
 * @returns {UseSignInForm} useSignInForm hook
 */
export const useSignInForm = (): UseSignInForm => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<SignInFormValues>({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  return {
    control,
    handleSubmit,
    setValue,
    errors
  }
}

export default useSignInForm
