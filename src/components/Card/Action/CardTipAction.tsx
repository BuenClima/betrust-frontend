import { Typography } from '@mui/material'
import PropTypes from 'prop-types'
/**
 * @description CardTipAction props
 * @property {string} status - status
 */
export type CardTipActionProps = {
  status: string
}

/**
 * @description CardTipAction component
 * @param {CardTipActionProps} props - CardTipActionProps
 * @returns {JSX.Element} CardTipAction component
 */
export const CardTipAction = (props: CardTipActionProps): JSX.Element => {
  const { status } = props
  return <Typography data-testid="card-tip-action">{status}</Typography>
}

export default CardTipAction

/**
 * @description CardTipAction component props default values
 * @property {string} status - status
 */
CardTipAction.propTypes = {
  status: PropTypes.string
}
