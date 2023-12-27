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
export const CardTipSubtitle = (props: CardTipsterSubtitleProps): JSX.Element => {
  const { subtitle } = props
  return <Typography>{subtitle}</Typography>
}

export default CardTipSubtitle

/**
 * @description CardTipsterSubtitle component props default values
 * @property {string} subtitle - subtitle
 */
CardTipSubtitle.propTypes = {
  subtitle: PropTypes.string
}
