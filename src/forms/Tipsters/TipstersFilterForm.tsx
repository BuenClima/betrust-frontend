import { Box, Button, Grid, Slider, Stack, Typography } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import { Controller } from 'react-hook-form'

import { useAppDispatch } from '@/app/store'
import { MultiSelect } from '@/components/Inputs/MultiSelect/MultiSelect'
import {
  FilterTipstersFormValues,
  useFilterTipstersForm
} from '@/hooks/Tipsters/useFilterTipstersForm'
import { filter } from '@/services/filtersSlice'
import { hide } from '@/services/modalSlice'

export const TipstersFilterForm = () => {
  const dispatch = useAppDispatch()
  const { control, handleSubmit, errors } = useFilterTipstersForm()

  const onSubmit = (data: FilterTipstersFormValues) => {
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
          name="league"
          control={control}
          render={({ field: { onChange, value } }) => (
            <MultiSelect
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
          name="picks"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Box>
              <Typography variant="body1">Picks</Typography>
              <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                <Slider value={value} onChange={onChange} min={0} max={1000} />
                <Typography variant="caption">{value}</Typography>
              </Stack>
            </Box>
          )}
        />
      </Grid>

      <Grid item xs={10}>
        <Controller
          name="yield"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Box>
              <Typography variant="body1">Yield</Typography>
              <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                <Slider value={value} onChange={onChange} />
                <Typography variant="caption">{value}%</Typography>
              </Stack>
            </Box>
          )}
        />
      </Grid>
      <Grid item xs={10}>
        <Controller
          name="profit"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Box>
              <Typography variant="body1">Profit</Typography>
              <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                <Slider value={value} onChange={onChange} min={0} max={1000} />
                <Typography variant="caption">{value}</Typography>
              </Stack>
            </Box>
          )}
        />
      </Grid>
      <Grid item xs={10}>
        <Controller
          name="winRate"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Box>
              <Typography variant="body1">Win Rate</Typography>
              <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                <Slider value={value} onChange={onChange} />
                <Typography variant="caption">{value}%</Typography>
              </Stack>
            </Box>
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
