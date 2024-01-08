import PropTypes from 'prop-types'
import { useMemo } from 'react'

import { CardType } from '../Card'
import { CardTipContent, CardTipContentProps } from './CardTipContent'
import { CardTipsterContent, CardTipsterContentProps } from './CardTipsterContent'

/**
 * @description CardContent props
 * @property {CardType} type - type
 */
type CardContentProps = {
  type: CardType
} & CardTipContentProps &
  CardTipsterContentProps

/**
 * @description CardContent component
 * @param {CardContentProps} props - CardContentProps
 * @returns {JSX.Element} CardContent component
 */
export const CardContent = (props: CardContentProps): JSX.Element => {
  const { type, ...rest } = props

  const content: Record<CardType, JSX.Element> = {
    tipster: <CardTipsterContent />,
    tip: <CardTipContent {...rest} />
  }

  const contentComponent = useMemo(() => content[type], [props])
  return contentComponent
}

export default CardContent

/**
 * @description CardContent component props default values
 * @property {CardType} type - type
 */
CardContent.propTypes = {
  type: PropTypes.oneOf<CardType>(['tipster', 'tip']).isRequired
}
