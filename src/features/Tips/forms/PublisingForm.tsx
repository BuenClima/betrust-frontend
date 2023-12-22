import { Button, Grid, TextField } from '@mui/material'
import { Controller } from 'react-hook-form'

import { useAppDispatch } from '@/app/store'
import { Select } from '@/components/Inputs/Select/Select'
import { hide } from '@/services/modalSlice'

import useCreateTipForm, { CreateTipFormValues } from '../hooks/useCreateTipForm'

export const PublishingForm = () => {
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
          name="stake"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              label="Hours to be open"
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
              label="Max amount of buyers"
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
          name="league"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Select
              value={value}
              setValue={onChange}
              error={!!errors.league}
              options={[
                { name: 'Intuition', id: 'premier' },
                { name: 'Trends', id: 'laliga' }
              ]}
              placeholder="Method"
              helperText={errors.league?.message ?? 'Helper text'}
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
