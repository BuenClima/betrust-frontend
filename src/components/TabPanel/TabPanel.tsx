import { Box } from '@mui/material'
import PropTypes from 'prop-types'
/**
 * @description TabPanelProps interface
 * @property {React.ReactNode} children - children
 * @property {number} index - index
 * @property {number} value - value
 */
interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

/**
 * @description TabPanel component
 * @param {React.ReactNode} children - children
 * @param {number} index - index
 * @param {number} value - value
 * @return {JSX.Element} TabPanel component
 */
export const TabPanel = (props: TabPanelProps): JSX.Element => {
  const { children, value, index, ...rest } = props
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...rest}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

export default TabPanel

/**
 * @description TabPanel props types
 * @property {React.ReactNode} children - children
 * @property {number} index - index
 * @property {number} value - value
 */
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
}
