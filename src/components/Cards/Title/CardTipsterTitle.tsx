import { Typography } from '@mui/material'
import PropTypes from 'prop-types'

/**
 * @description CardTipsterTitle props
 * @property {string} title - title
 */
export type CardTipsterTitleProps = {
  title?: string
}

/**
 * @description CardTipsterTitle component
 * @param {CardTipsterTitleProps} props - CardTipsterTitleProps
 * @returns {JSX.Element} CardTipsterTitle component
 */
export const CardTipsterTitle = (props: CardTipsterTitleProps): JSX.Element => {
  const { title } = props
  return <Typography>{title}</Typography>
}

export default CardTipsterTitle

/**
 * @description CardTipsterTitle component props default values
 * @property {string} title - title
 */
CardTipsterTitle.propTypes = {
  title: PropTypes.string
}
