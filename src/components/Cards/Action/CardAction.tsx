import PropTypes from 'prop-types'
import { useMemo } from 'react'

import { CardType } from '../Card'
import CardTipAction, { CardTipActionProps } from './CardTipAction'
import { CardTipsterAction } from './CardTipsterAction'

/**
 * @description CardAction props
 * @property {CardType} type - type
 */
type CardActionProps = {
  type: CardType
} & CardTipActionProps

/**
 * @description CardAction component
 * @param {CardActionProps} props - CardActionProps
 * @returns {JSX.Element} CardAction component
 */
export const CardAction = (props: CardActionProps): JSX.Element => {
  const { type, ...rest } = props

  const actions: Record<CardType, JSX.Element> = {
    tipster: <CardTipsterAction />,
    tip: <CardTipAction {...rest} />
  }

  const actionComponent = useMemo(() => actions[type], [props])

  return actionComponent
}

export default CardAction

/**
 * @description CardAction component props default values
 * @property {CardType} type - type
 */
CardAction.propTypes = {
  type: PropTypes.oneOf<CardType>(['tipster', 'tip']).isRequired
}
