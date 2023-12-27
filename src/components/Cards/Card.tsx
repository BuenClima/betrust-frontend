import { Avatar, Card as MuiCard, CardHeader } from '@mui/material'
import dayjs from 'dayjs'
import PropTypes from 'prop-types'
import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch } from '@/app/store'
import { hide, show } from '@/services/modalSlice'

import CardAction from './Action/CardAction'
import CardContent from './Content/CardContent'
import CardSubTitle from './SubTitle/CardSubTitle'
import { CardTitle } from './Title/CardTitle'

export type CardType = 'tipster' | 'tip'

/**
 * @description Card component props
 * @property {boolean} extended - extended
 * @property {boolean} owner - owner
 */
type CardProps = {
  extended: boolean
  owner?: boolean
  type: CardType
}

/**
 * @description Card component
 * @param {CardProps} props - CardProps
 * @returns {JSX.Element} Card component
 */
export const Card = (props: CardProps): JSX.Element => {
  const { type, extended, owner } = props
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const cardStyle = useMemo(
    () => ({ cursor: `${extended ? '' : 'pointer'}` }),
    [extended]
  )

  const handleCardHeaderClick = () => {
    if (type === 'tip') handleTipHeaderClick()
    else handleTipsterHeaderClick()
  }

  const handleTipHeaderClick = () => {
    if (extended) return
    if (owner) dispatch(show('createTip'))
    else dispatch(show('tipDetails'))
  }

  const handleTipsterHeaderClick = () => {
    navigate('/tipsters/1')
  }

  const handleTipsterClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.stopPropagation()
    navigate('/tipsters/1')
    if (extended) dispatch(hide())
  }

  const avatarSrc: Record<CardType, string> = {
    tipster: 'https://i.pravatar.cc/300',
    tip: 'https://i.pinimg.com/originals/42/77/ae/4277ae71a295e64b2148519aca4042cd.png'
  }

  const titleText: Record<CardType, string> = {
    tipster: 'Tipster',
    tip: 'Real Madrid vs Barcelona'
  }

  return (
    <MuiCard sx={{ width: '100%', my: 1, ...cardStyle }} elevation={extended ? 0 : 1}>
      <CardHeader
        onClick={handleCardHeaderClick}
        sx={{ ...cardStyle }}
        avatar={
          <Avatar
            sx={{
              border: '2px solid #ffd700',
              width: 56,
              height: 56,
              '&:hover': {
                opacity: 0.9
              }
            }}
            src={avatarSrc[type]}
          />
        }
        title={
          <CardTitle
            type={type}
            title={titleText[type]}
            tipster="Tipster"
            handleTipsterCallback={handleTipsterClick}
          />
        }
        subheader={
          <CardSubTitle type={type} subtitle={dayjs().format('DD/MM/YYYY HH:mm')} />
        }
        action={<CardAction type={type} status="Active" />}
      />
      <CardContent
        type={type}
        extended={extended}
        handleTipClick={handleTipHeaderClick}
      />
    </MuiCard>
  )
}

export default Card

/**
 * @description Card component props default values
 * @property {boolean} extended - extended
 * @property {boolean} owner - owner
 */
Card.propTypes = {
  extended: PropTypes.bool.isRequired,
  owner: PropTypes.bool
}
