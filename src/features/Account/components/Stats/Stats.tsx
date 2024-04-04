import { Grid, Typography } from '@mui/material'

import { PieChart } from '@/components/Charts'
import TipsterStatistics from '@/components/TipsterStatistics/TipsterStatistics'

/**
 * @description Account Stats component
 * @returns {JSX.Element} Account Stats component
 */
export const Stats = (): JSX.Element => {
  return (
    <Grid container spacing={2} gap={1}>
      <Grid item xs={12} container justifyContent="center">
        <Typography variant="h5">Summary</Typography>
      </Grid>
      <Grid item xs={12}>
        <TipsterStatistics />
      </Grid>
      <Grid item xs={12} container justifyContent="center">
        <Typography variant="h5">Charts</Typography>
      </Grid>
      <Grid item xs={12}>
        <PieChart centerLabel="Sport Ratio" />
      </Grid>
    </Grid>
  )
}

export default Stats
