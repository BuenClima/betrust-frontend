import { Avatar, Card, CardContent, CardHeader, Grid, Typography } from '@mui/material'
import dayjs from 'dayjs'

import { useAppDispatch } from '@/app/store'
import { show } from '@/services/modalSlice'

/**
 * @description TipCard component
 * @returns {JSX.Element} TipCard component
 */
export const TipCard = (): JSX.Element => {
  const dispatch = useAppDispatch()

  const handleCardHeaderClick = () => {
    dispatch(show('tipDetails'))
  }

  return (
    <Card
      sx={{ width: '100%', my: 1, cursor: 'pointer' }}
      onClick={handleCardHeaderClick}
    >
      <CardHeader
        sx={{ cursor: 'pointer' }}
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
        title="#1 Football"
        subheader={`${dayjs().format('DD/MM/YYYY HH:mm:ss')} | Spain | La Liga`}
        titleTypographyProps={{ variant: 'h6' }}
      />
      <CardContent>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} container justifyContent="center" alignItems="center">
            <Typography variant={'h6'}>Real Madrid vs Barcelona</Typography>
          </Grid>
          <Grid item xs={12} container justifyContent="center" alignItems="center">
            <Typography variant={'subtitle1'}>Real Madrid to win</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default TipCard
