import { Grid, styled, Typography } from '@mui/material'
import {
  DefaultizedPieValueType,
  pieArcLabelClasses,
  PieChart,
  useDrawingArea
} from '@mui/x-charts'

import TipsterStatistics from '@/components/TipsterStatistics/TipsterStatistic'

const data = [
  { id: 0, value: 10, label: 'Football' },
  { id: 1, value: 15, label: 'Basketball' },
  { id: 2, value: 20, label: 'Baseball' }
]

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 16,
  fontFamily: theme.typography.fontFamily
}))

function PieCenterLabel({ children }: { children: React.ReactNode }) {
  const { width, left, top } = useDrawingArea()
  return (
    <StyledText x={left + width / 2} y={top + 10}>
      {children}
    </StyledText>
  )
}
const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0)

const getArcLabel = (params: DefaultizedPieValueType) => {
  const percent = params.value / TOTAL
  return `${(percent * 100).toFixed(0)}%`
}

export const Stats = () => {
  return (
    <Grid container spacing={2} gap={1}>
      <Grid item xs={12} container justifyContent="center">
        <Typography variant="h5">Summary</Typography>
      </Grid>
      <Grid item xs={12}>
        <TipsterStatistics />
      </Grid>
      <Grid item xs={12} container justifyContent="center">
        <Typography variant="h5">Win Rate</Typography>
      </Grid>
      <Grid item xs={12}>
        <PieChart
          series={[
            {
              data,
              highlightScope: { faded: 'global', highlighted: 'item' },
              faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
              outerRadius: 70,
              innerRadius: 20,
              arcLabel: getArcLabel
            }
          ]}
          sx={{
            [`& .${pieArcLabelClasses.root}`]: {
              fill: 'white',
              fontSize: 14
            }
          }}
          height={200}
          width={400}
        >
          <PieCenterLabel>Center label</PieCenterLabel>
        </PieChart>
      </Grid>
    </Grid>
  )
}
