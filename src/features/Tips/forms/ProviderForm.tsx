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
type ProviderFormProps = {
  tip?: CreateTipFormValues
  handleTabChange: (index: number, data: CreateTipFormValues) => void
  activeTab: number
}

/**
 * @description ProviderForm component
 * @param {ProviderFormProps} props - props
 * @returns {JSX.Element} ProviderForm component
 */
export const ProviderForm = (props: ProviderFormProps): JSX.Element => {
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
          Next
        </Button>
      </Grid>
    </Grid>
  )
}

export default ProviderForm

/**
 * @description ProviderForm props types
 * @property {CreateTipFormValues} tip - tip
 * @property {(index: number, data: CreateTipFormValues) => void} handleTabChange - handleTabChange
 * @property {number} activeTab - activeTab
 */
ProviderForm.propTypes = {
  tip: PropTypes.shape({
    date: PropTypes.instanceOf(Date),
    sport: PropTypes.string,
    league: PropTypes.string,
    tip: PropTypes.string
  }),
  handleTabChange: PropTypes.func.isRequired,
  activeTab: PropTypes.number.isRequired
}
