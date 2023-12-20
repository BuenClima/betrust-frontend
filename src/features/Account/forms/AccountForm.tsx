import { Button, Grid, TextField } from '@mui/material'
import { Controller } from 'react-hook-form'

import {
  AccountFormValues,
  useAccountForm
} from '@/features/Account/hooks/useAccountForm'

export const AccountForm = () => {
  const { control, handleSubmit, errors } = useAccountForm()

  const onSubmit = (data: AccountFormValues) => {
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
