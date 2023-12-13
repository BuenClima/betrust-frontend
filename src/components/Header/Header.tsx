import { Grid } from '@mui/material'

import { BetsHeader } from './Headers/BetsHeader'
import { TipsterHeader } from './Headers/TipsterHeader'
import { TipstersHeader } from './Headers/TipstersHeader'

export type HeaderType = 'tipsters' | 'bets' | 'tipster' | 'bet'

type HeaderProps = {
  type: HeaderType
}

export const Header = ({ type }: HeaderProps) => {
  const headers: Record<HeaderType, JSX.Element> = {
    tipsters: <TipstersHeader key={type} />,
    bets: <BetsHeader key={type} />,
    tipster: <TipsterHeader key={type} />,
    bet: <div>Bet Header</div>
  }

  return (
    <Grid
      container
      sx={{
        backgroundImage: `linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.8),
      rgba(255, 255, 255, 0.9)
    ),url("https://picsum.photos/1200/300")`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: { xs: '100vh', sm: '20vh' }
      }}
    >
      {headers[type]}
    </Grid>
  )
}
