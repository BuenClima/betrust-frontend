import { Grid, Typography } from '@mui/material'

export const TipsterStatistics = () => {
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

type StatisticProps = {
  value: string | number
  label: string
}

const Statistic = ({ value, label }: StatisticProps) => {
  return (
    <Grid item xs={12} sm={1} container>
      <Grid item xs={12}>
        <Typography variant="body1" color="text.secondary" fontWeight={700}>
          {value}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="caption" color="text.secondary">
          {label}
        </Typography>
      </Grid>
    </Grid>
  )
}
