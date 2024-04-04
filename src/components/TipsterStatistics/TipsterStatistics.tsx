import { Grid } from '@mui/material'

import Statistic from '../Statistic/Statistic'

/**
 * @description TipsterStatistics component
 * @returns {JSX.Element} TipsterStatistics component
 */
export const TipsterStatistics = (): JSX.Element => {
  return (
    <Grid container justifyContent="space-between" alignItems="flex-start">
      <Statistic value="929" label="Picks" />
      <Statistic value="25.82%" label="Yield" />
      <Statistic value="311.34" label="Profit(Uds)" />
      <Statistic value="61.03%" label="Win Rate" />
      <Statistic value="1.30" label="Avg Stake" />
      <Statistic value="2.03" label="Avg Odds" />
      <Statistic value="15.74" label="Rating" />
    </Grid>
  )
}
export default TipsterStatistics
