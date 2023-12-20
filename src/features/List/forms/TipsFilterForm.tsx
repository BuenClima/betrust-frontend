import { Button, Grid, Typography } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import { Controller } from 'react-hook-form'

import { useAppDispatch } from '@/app/store'
import { MultiSelect } from '@/components/Inputs/MultiSelect/MultiSelect'
import {
  FilterTipsFormValues,
  useFilterTipsForm
} from '@/features/List/hooks/useFilterTipsForm'
import { filter } from '@/services/filtersSlice'
import { hide } from '@/services/modalSlice'

export const TipsFilterForm = () => {
  const dispatch = useAppDispatch()
  const { control, handleSubmit, errors } = useFilterTipsForm()

  const onSubmit = (data: FilterTipsFormValues) => {
    dispatch(
      filter({
        active: true,
        filters: {
          ...data
        }
      })
    )
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
      <Grid item xs={10} container justifyContent="center">
        <Typography variant="h6">Filters</Typography>
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
            <MultiSelect
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
          name="status"
          control={control}
          render={({ field: { onChange, value } }) => (
            <MultiSelect
              value={value}
              setValue={onChange}
              error={!!errors.sport}
              options={[
                { name: 'OnGoing', id: 'ongoing' },
                { name: 'Past', id: 'past' },
                { name: 'Live', id: 'live' }
              ]}
              placeholder="Status"
              helperText={errors.sport?.message ?? 'Helper text'}
            />
          )}
        />
      </Grid>

      <Grid item xs={12} container justifyContent="center">
        <Button type="submit" variant="contained">
          Apply
        </Button>
      </Grid>
    </Grid>
  )
}
