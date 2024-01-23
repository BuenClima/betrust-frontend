import { Button, Grid, TextField } from '@mui/material'
import { Controller } from 'react-hook-form'

import { useAppDispatch } from '@/app/store'
import { Select } from '@/components/Select/Select'
import { hide } from '@/services/modalSlice'

import useCreateTipForm, { CreateTipFormValues } from '../hooks/useCreateTipForm'

export const ProviderForm = () => {
  const dispatch = useAppDispatch()
  const { control, handleSubmit, errors } = useCreateTipForm()

  const onSubmit = (data: CreateTipFormValues) => {
    console.log(data)
    dispatch(hide())
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
      <Grid item xs={10}>
        <Controller
          name="provider"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Select
              value={value}
              setValue={onChange}
              error={!!errors.provider}
              options={[
                { name: 'Bet365', id: 'bet365' },
                { name: 'William Hill', id: 'williamhill' }
              ]}
              placeholder="Provider"
              helperText={errors.provider?.message ?? 'Helper text'}
            />
          )}
        />
      </Grid>

      <Grid item xs={10}>
        <Controller
          name="odds"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              label="Odds"
              inputProps={{ type: 'number' }}
              value={value}
              onChange={onChange}
              fullWidth
              helperText={errors.tip?.message ?? 'Helper text'}
              error={!!errors.tip}
            />
          )}
        />
      </Grid>
      <Grid item xs={10}>
        <Controller
          name="stake"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              label="Stake"
              inputProps={{ type: 'number' }}
              value={value}
              onChange={onChange}
              fullWidth
              helperText={errors.tip?.message ?? 'Helper text'}
              error={!!errors.tip}
            />
          )}
        />
      </Grid>

      <Grid item xs={12} container justifyContent="center">
        <Button type="submit" variant="contained">
          Create
        </Button>
      </Grid>
    </Grid>
  )
}
