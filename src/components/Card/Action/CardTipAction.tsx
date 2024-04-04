import { Typography } from '@mui/material'
import PropTypes from 'prop-types'
import { useMemo } from 'react'
/**
 * @description CardTipAction props
 * @property {string} status - status
 */
export type CardTipActionProps = {
  status: 'active' | 'inactive'
}

/**
 * @description CardTipAction component
 * @param {CardTipActionProps} props - CardTipActionProps
 * @returns {JSX.Element} CardTipAction component
 */
export const CardTipAction = (props: CardTipActionProps): JSX.Element => {
  const { status } = props

  /**
   * @description color based on status
   */
  const color = useMemo(
    () => (status === 'active' ? 'success.main' : 'error.main'),
    [status]
  )
  return (
    <Typography
      data-testid="card-tip-action"
      sx={{
        textTransform: 'capitalize',
        bgcolor: color,
        p: 0.8,
        color: 'primary.contrastText',
        borderRadius: 1
      }}
    >
      {status}
    </Typography>
  )
}

export default CardTipAction

/**
 * @description CardTipAction component props default values
 * @property {string} status - status
 */
CardTipAction.propTypes = {
  status: PropTypes.string
}
