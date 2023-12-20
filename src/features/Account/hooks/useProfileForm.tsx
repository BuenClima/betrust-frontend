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
 * @property {string} description - description
 */
export type ProfileFormValues = {
  email: string
  name: string
  description: string
}

/**
 * @description UseProfileForm hook return type
 * @property {Control<ProfileFormValues, any>} control - control
 * @property {UseFormHandleSubmit<ProfileFormValues, undefined>} handleSubmit - handleSubmit
 * @property {UseFormSetValue<ProfileFormValues>} setValue - setValue
 * @property {FieldErrors<ProfileFormValues>} errors - errors
 */
type UseProfileForm = {
  control: Control<ProfileFormValues, any>
  handleSubmit: UseFormHandleSubmit<ProfileFormValues, undefined>
  setValue: UseFormSetValue<ProfileFormValues>
  errors: FieldErrors<ProfileFormValues>
}

/**
 * @description useProfileForm hook
 * @returns {UseProfileForm} useProfileForm hook
 */
export const useProfileForm = (): UseProfileForm => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<ProfileFormValues>({
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

export default useProfileForm
