import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography
} from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import { Controller } from 'react-hook-form'

import { Select } from '@/components/Inputs/Select/Select'
import { CreateTipFormValues, useCreateTipForm } from '@/hooks/Tips/useCreateTipForm'

export const CreateTipForm = () => {
  const { control, handleSubmit, errors } = useCreateTipForm()

  const onSubmit = (data: CreateTipFormValues) => {
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
      <Grid item xs={10} container justifyContent="center">
        <Typography variant="h6">Create Tip</Typography>
      </Grid>
      <Grid item xs={10}>
        <Controller
          name="date"
          control={control}
          render={({ field: { onChange, value } }) => (
            <DatePicker
              label="Date"
              value={value}
              onChange={onChange}
              slotProps={{
                textField: {
                  fullWidth: true,
                  helperText: errors.date?.message ?? 'Helper Text',
                  error: !!errors.date
                }
              }}
            />
          )}
        />
      </Grid>
      <Grid item xs={10}>
        <Controller
          name="sport"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Select
              value={value}
              setValue={onChange}
              error={!!errors.sport}
              options={[
                { name: 'Football', id: 'football' },
                { name: 'Basketball', id: 'basketball' },
                { name: 'Tennis', id: 'tennis' }
              ]}
              placeholder="Sport"
              helperText={errors.sport?.message ?? 'Helper text'}
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
                { name: 'Premier', id: 'premier' },
                { name: 'La Liga', id: 'laliga' }
              ]}
              placeholder="League"
              helperText={errors.league?.message ?? 'Helper text'}
            />
          )}
        />
      </Grid>

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
          name="tip"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              label="Tip"
              value={value}
              onChange={onChange}
              fullWidth
              helperText={errors.tip?.message ?? 'Helper text'}
              error={!!errors.tip}
              multiline
              rows={4}
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

      <Grid item xs={10}>
        <Controller
          name="paid"
          control={control}
          render={({ field: { onChange, value } }) => (
            <FormControlLabel
              label="Paid"
              control={<Checkbox checked={value} onChange={onChange} />}
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
