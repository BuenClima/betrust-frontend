import { Grid, Typography } from '@mui/material'
import PropTypes from 'prop-types'

/**
 * @description StatisticProps interface
 * @property {string | number} value - value
 * @property {string} label - label
 */
type StatisticProps = {
  value: string | number
  label: string
}

/**
 * @description Statistic component
 * @param {StatisticProps} { value, label } - StatisticProps
 * @returns {JSX.Element} Statistic component
 */
export const Statistic = (props: StatisticProps): JSX.Element => {
  const { value, label } = props
  return (
    <Grid
      item
      xs={12}
      sm={1}
      container
      sx={{
        cursor: 'pointer',
        color: 'text.secondary',
        '&:hover': {
          color: 'primary.main'
        }
      }}
    >
      <Grid item xs={12}>
        <Typography variant="body1" fontWeight={700}>
          {value}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="caption">{label}</Typography>
      </Grid>
    </Grid>
  )
}

export default Statistic

/**
 * @description Statistic props types
 * @property {string | number} value - value
 * @property {string} label - label
 */
Statistic.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string.isRequired
}
