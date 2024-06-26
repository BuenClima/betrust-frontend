import { Button, Grid, TextField } from '@mui/material'
import { Controller } from 'react-hook-form'

import {
  ProfileFormValues,
  useProfileForm
} from '@/features/Account/hooks/useProfileForm'

/**
 * @description Profile form
 * @returns {JSX.Element} Profile form
 */
export const ProfileForm = (): JSX.Element => {
  const { control, handleSubmit, errors } = useProfileForm()

  const onSubmit = (data: ProfileFormValues) => {
    console.log(data)
  }

  return (
    <Grid
      container
      component="form"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      justifyContent="center"
      spacing={1}
    >
      <Grid item xs={12}>
        <Controller
          name="name"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              label="Name"
              value={value}
              onChange={onChange}
              fullWidth
              helperText={errors.name?.message ?? 'Helper text'}
              error={!!errors.name}
              placeholder="Name"
            />
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              label="Email"
              value={value}
              onChange={onChange}
              fullWidth
              helperText={errors.email?.message ?? 'Helper text'}
              error={!!errors.email}
              placeholder="Email"
            />
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <Controller
          name="description"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              label="Description"
              value={value}
              onChange={onChange}
              fullWidth
              helperText={errors.description?.message ?? 'Helper text'}
              error={!!errors.description}
              multiline
              rows={4}
              placeholder="Description"
            />
          )}
        />
      </Grid>

      <Grid item xs={12} container justifyContent="center">
        <Button type="submit" variant="contained">
          Save
        </Button>
      </Grid>
    </Grid>
  )
}

export default ProfileForm
