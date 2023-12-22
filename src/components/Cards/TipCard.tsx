import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Grid,
  IconButton,
  Stack,
  Typography
} from '@mui/material'
import dayjs from 'dayjs'
import PropTypes from 'prop-types'
import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch } from '@/app/store'
import { hide, show } from '@/services/modalSlice'

/**
 * @description TipCard component props
 * @property {boolean} extended - extended
 */
type TipCardProps = {
  extended: boolean
}

/**
 * @description TipCard component
 * @returns {JSX.Element} TipCard component
 */
export const TipCard = ({ extended }: TipCardProps): JSX.Element => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const cardStyle = useMemo(
    () => ({ cursor: `${extended ? '' : 'pointer'}` }),
    [extended]
  )

  const cardHeader = useMemo(
    () => (extended ? <Typography variant={'h6'}>Active</Typography> : undefined),
    [extended]
  )

  const extendedCardContent = useMemo(
    () => (
      <Stack direction="row" spacing={2}>
        <Chip
          label="Bet365"
          color="success"
          component="a"
          href="#basic-chip"
          clickable
          variant="outlined"
        />
        <Chip label="Odds 1" color="warning" variant="outlined" />
        <Chip label="SKT 1" color="primary" variant="outlined" />
        <Chip label="Result" color="primary" variant="outlined" />
      </Stack>
    ),
    [extended]
  )

  const handleCardHeaderClick = () => {
    if (extended) return
    dispatch(show('tipDetails'))
  }

  const handleTipsterClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.stopPropagation()
    navigate('/tipsters/1')
    if (extended) dispatch(hide())
  }

  return (
    <Card
      sx={{ width: '100%', my: 1, ...cardStyle }}
      onClick={handleCardHeaderClick}
      elevation={extended ? 0 : 1}
    >
      <CardHeader
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
            src="https://i.pinimg.com/originals/42/77/ae/4277ae71a295e64b2148519aca4042cd.png"
          />
        }
        title={
          <Grid container gap={1} alignItems="center">
            <Typography variant="h6">Real Madrid vs Barcelona by</Typography>

            <IconButton onClick={handleTipsterClick} sx={{ borderRadius: 0.3 }}>
              <Typography>Tipster Name</Typography>
            </IconButton>
          </Grid>
        }
        subheader={`Football | Spain | La Liga @ ${dayjs().format('DD MMMM YYYY HH:mm')}`}
        action={cardHeader}
      />
      <CardContent>
        <Grid container justifyContent="center" alignItems="center" spacing={1}>
          <Grid item xs={12} container justifyContent="center" alignItems="center">
            <Typography variant={'h6'}>Real Madrid vs Barcelona</Typography>
          </Grid>
          <Grid item xs={12} container justifyContent="center" alignItems="center">
            <Typography variant={'subtitle1'}>Real Madrid to win</Typography>
          </Grid>
          <Grid item xs={12} container justifyContent="center" alignItems="center">
            {extended && extendedCardContent}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default TipCard

/**
 * @description TipCard component props default values
 * @property {boolean} extended - extended
 */
TipCard.propTypes = {
  extended: PropTypes.bool.isRequired
}
