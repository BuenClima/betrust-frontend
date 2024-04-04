import { Button, Grid, TextField } from '@mui/material'
import PropTypes from 'prop-types'
import { Controller } from 'react-hook-form'

import { useAppDispatch } from '@/app/store'
import { Select } from '@/components/Select/Select'
import { hide } from '@/services/modalSlice'

import useCreateTipForm, { CreateTipFormValues } from '../hooks/useCreateTipForm'

/**
 * @description PricingForm component
 * @property {CreateTipFormValues} tip - tip
 */
type PricingFormProps = {
  tip?: CreateTipFormValues
}

/**
 * @description PricingForm component
 * @param {PricingFormProps} props - props
 * @returns {JSX.Element} PricingForm component
 */
export const PricingForm = (props: PricingFormProps): JSX.Element => {
  const { tip } = props
  const dispatch = useAppDispatch()
  const { control, handleSubmit, errors } = useCreateTipForm()

  const onSubmit = (data: CreateTipFormValues) => {
    console.log(data, tip)
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
              label="Price"
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
          name="sport"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Select
              value={value}
              setValue={onChange}
              error={!!errors.sport}
              options={[
                { name: 'Paypal', id: 'football' },
                { name: 'Bank transfer', id: 'basketball' },
                { name: 'Bizum', id: 'tennis' }
              ]}
              placeholder="Payment method"
              helperText={errors.sport?.message ?? 'Helper text'}
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

export default PricingForm

/**
 * @description PricingForm props types
 * @property {CreateTipFormValues} tip - tip
 */
PricingForm.propTypes = {
  tip: PropTypes.shape({
    date: PropTypes.instanceOf(Date),
    sport: PropTypes.string,
    league: PropTypes.string,
    tip: PropTypes.string
  })
}
