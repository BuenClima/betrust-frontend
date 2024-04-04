import { styled } from '@mui/material'
import {
  DefaultizedPieValueType,
  pieArcLabelClasses,
  PieChart as PieChartMui,
  useDrawingArea
} from '@mui/x-charts'
import PropTypes from 'prop-types'

/**
 * @description Data test
 */
const data = [
  { id: 0, value: 10, label: 'Football' },
  { id: 1, value: 15, label: 'Basketball' },
  { id: 2, value: 20, label: 'Baseball' }
]

/**
 * @description Total value of data test
 */
const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0)

/**
 * @description StyledText for the PieCenterLabel
 */
const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 16,
  fontFamily: theme.typography.fontFamily
}))

/**
 * @description PieCenterLabel component
 * @param {React.ReactNode} { children } - children
 * @returns {JSX.Element} PieCenterLabel component
 */
function PieCenterLabel({ children }: { children: React.ReactNode }): JSX.Element {
  const { width, left, top } = useDrawingArea()
  return (
    <StyledText x={left + width / 2} y={top + 10}>
      {children}
    </StyledText>
  )
}

/**
 * @description getArcLabel function
 * @param {DefaultizedPieValueType} params - params
 * @returns {string} arc label
 */
const getArcLabel = (params: DefaultizedPieValueType): string => {
  const percent = params.value / TOTAL
  return `${(percent * 100).toFixed(0)}%`
}

/**
 * @description PieChartProps interface
 * @property {string} centerLabel - centerLabel
 */
type PieChartProps = {
  centerLabel: string
}

/**
 * @description PieChart component
 * @returns {JSX.Element} Stats component
 */
export const PieChart = ({ centerLabel }: PieChartProps): JSX.Element => {
  return (
    <PieChartMui
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
      <PieCenterLabel>{centerLabel}</PieCenterLabel>
    </PieChartMui>
  )
}

export default PieChart

/**
 * @description PieChart props types
 * @property {string} centerLabel - centerLabel
 */
PieChart.propTypes = {
  centerLabel: PropTypes.string.isRequired
}
