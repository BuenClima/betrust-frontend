import PropTypes from 'prop-types'
import { useMemo } from 'react'

import { CardType } from '../Card'
import { CardTipsterSubtitle, CardTipsterSubtitleProps } from './CardTipsterSubtitle'
import { CardTipSubtitle } from './CardTipSubtitle'

/**
 * @description CardSubTitle props
 * @property {CardType} type - type
 */
type CardSubTitleProps = {
  type: CardType
} & CardTipsterSubtitleProps &
  CardTipsterSubtitleProps

/**
 * @description CardSubTitle component
 * @param {CardSubTitleProps} props - CardSubTitleProps
 * @returns {JSX.Element} CardSubTitle component
 */
export const CardSubTitle = (props: CardSubTitleProps): JSX.Element => {
  const { type, ...rest } = props

  const subtitles: Record<CardType, JSX.Element> = {
    tipster: <CardTipsterSubtitle {...rest} />,
    tip: <CardTipSubtitle {...rest} />
  }

  const subtitleComponent = useMemo(() => subtitles[type], [props])

  return subtitleComponent
}

export default CardSubTitle

/**
 * @description CardSubTitle component props default values
 * @property {CardType} type - type
 */
CardSubTitle.propTypes = {
  type: PropTypes.oneOf<CardType>(['tipster', 'tip']).isRequired
}
