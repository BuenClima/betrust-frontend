import { Typography } from '@mui/material'
import PropTypes from 'prop-types'

/**
 * @description CardTipsterSubtitle props
 * @property {string} subtitle - subtitle
 */
export type CardTipsterSubtitleProps = {
  subtitle?: string
}

/**
 * @description CardTipsterSubtitle component
 * @param {CardTipsterSubtitleProps} props - CardTipsterSubtitleProps
 * @returns {JSX.Element} CardTipsterSubtitle component
 */
export const CardTipsterSubtitle = (props: CardTipsterSubtitleProps) => {
  const { subtitle } = props
  return <Typography>{subtitle}</Typography>
}

export default CardTipsterSubtitle

/**
 * @description CardTipsterSubtitle component props default values
 * @property {string} subtitle - subtitle
 */
CardTipsterSubtitle.propTypes = {
  subtitle: PropTypes.string
}
