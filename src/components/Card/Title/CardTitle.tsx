import PropTypes from 'prop-types'
import { useMemo } from 'react'

import { CardType } from '../Card'
import CardTipsterTitle, { CardTipsterTitleProps } from './CardTipsterTitle'
import { CardTipTitle, CardTipTitleProps } from './CardTipTitle'

/**
 * @description CardTitle props
 * @property {CardType} type - type
 */
type CardTitleProps = {
  type: CardType
} & CardTipTitleProps &
  CardTipsterTitleProps

/**
 * @description CardTitle component
 * @param {CardTitleProps} props - CardTitleProps
 * @returns {JSX.Element} CardTitle component
 */
export const CardTitle = (props: CardTitleProps): JSX.Element => {
  const { type, ...rest } = props

  const cardTitles: Record<CardType, JSX.Element> = {
    tipster: <CardTipsterTitle {...rest} />,
    tip: <CardTipTitle {...rest} />
  }

  const titleComponent = useMemo(() => cardTitles[type], [props])

  return titleComponent
}

export default CardTitle

/**
 * @description CardTitle component props default values
 * @property {CardType} type - type
 */
CardTitle.propTypes = {
  type: PropTypes.oneOf<CardType>(['tipster', 'tip']).isRequired
}
