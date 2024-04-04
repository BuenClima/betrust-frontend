import { Button, Grid, TextField } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { Controller } from 'react-hook-form'

import { useAppDispatch } from '@/app/store'
import { Select } from '@/components/Select/Select'
import { hide } from '@/services/modalSlice'

import useCreateTipForm, { CreateTipFormValues } from '../hooks/useCreateTipForm'

/**
 * @description BetForm component
 * @property {CreateTipFormValues} tip - tip
 * @property {(index: number, data: CreateTipFormValues) => void} handleTabChange - handleTabChange
 */
type BetFormProps = {
  tip?: CreateTipFormValues
  handleTabChange: (index: number, data: CreateTipFormValues) => void
}

/**
 * @description BetForm component
 * @param {BetFormProps} props - props
 * @returns {JSX.Element} BetForm component
 */
export const BetForm = (props: BetFormProps): JSX.Element => {
  const { tip, handleTabChange } = props
  const dispatch = useAppDispatch()
  const { control, handleSubmit, errors, setValue } = useCreateTipForm()

  const onSubmit = (data: CreateTipFormValues) => {
    dispatch(hide())
    handleTabChange(1, { ...tip, ...data })
  }

  useEffect(() => {
    if (tip) {
      tip.date && setValue('date', tip.date)
      tip.sport && setValue('sport', tip.sport)
      tip.league && setValue('league', tip.league)
      tip.tip && setValue('tip', tip.tip)
    }
  }, [tip])

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
          name="league"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Select
              value={value}
              setValue={onChange}
              error={!!errors.league}
              options={[
                { name: 'Femenine', id: 'premier' },
                { name: 'Masculine', id: 'laliga' }
              ]}
              placeholder="Gender"
              helperText={errors.league?.message ?? 'Helper text'}
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

      <Grid item xs={12} container justifyContent="center">
        <Button type="submit" variant="contained">
          Next
        </Button>
      </Grid>
    </Grid>
  )
}

/**
 * @description BetForm component default props
 * @property {CreateTipFormValues} tip - tip
 * @property {(index: number, data: CreateTipFormValues) => void} handleTabChange - handleTabChange
 */
BetForm.propTypes = {
  tip: PropTypes.shape({
    date: PropTypes.instanceOf(Date),
    sport: PropTypes.string,
    league: PropTypes.string,
    tip: PropTypes.string
  }),
  handleTabChange: PropTypes.func.isRequired
}

export default BetForm
