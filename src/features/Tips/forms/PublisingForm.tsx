import { Button, Grid, TextField } from '@mui/material'
import PropTypes from 'prop-types'
import { Controller } from 'react-hook-form'

import { Select } from '@/components/Select/Select'

import useCreateTipForm, { CreateTipFormValues } from '../hooks/useCreateTipForm'

/**
 * @description BetForm component
 * @property {CreateTipFormValues} tip - tip
 * @property {(index: number, data: CreateTipFormValues) => void} handleTabChange - handleTabChange
 * @property {number} activeTab - activeTab
 */
type PublishingFormProps = {
  tip?: CreateTipFormValues
  handleTabChange: (index: number, data: CreateTipFormValues) => void
  activeTab: number
}

/**
 * @description PublishingForm component
 * @param {PublishingFormProps} props - props
 * @returns {JSX.Element} PublishingForm component
 */
export const PublishingForm = (props: PublishingFormProps): JSX.Element => {
  const { handleTabChange, activeTab } = props
  const { control, handleSubmit, errors } = useCreateTipForm()

  const onSubmit = (data: CreateTipFormValues) => {
    const nextTab = activeTab + 1
    handleTabChange(nextTab, data)
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
          Next
        </Button>
      </Grid>
    </Grid>
  )
}

export default PublishingForm

/**
 * @description PublishingForm props types
 * @property {CreateTipFormValues} tip - tip
 * @property {(index: number, data: CreateTipFormValues) => void} handleTabChange - handleTabChange
 * @property {number} activeTab - activeTab
 */
PublishingForm.propTypes = {
  tip: PropTypes.shape({
    date: PropTypes.instanceOf(Date),
    sport: PropTypes.string,
    league: PropTypes.string,
    tip: PropTypes.string
  }),
  handleTabChange: PropTypes.func.isRequired,
  activeTab: PropTypes.number.isRequired
}
