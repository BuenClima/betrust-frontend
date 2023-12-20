import { Grid } from '@mui/material'

import { AccountHeader } from './Headers/AccountHeader'
import { TipsHeader } from './Headers/TipsHeader'
import { TipsterHeader } from './Headers/TipsterHeader'
import { TipstersHeader } from './Headers/TipstersHeader'

export type HeaderType = 'tipsters' | 'tips' | 'tipster' | 'account'

type HeaderProps = {
  type: HeaderType
}

export const Header = ({ type }: HeaderProps) => {
  const headers: Record<HeaderType, JSX.Element> = {
    tipsters: <TipstersHeader key={type} />,
    tips: <TipsHeader key={type} />,
    tipster: <TipsterHeader key={type} />,
    account: <AccountHeader key={type} />
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
        height: { xs: '100vh', sm: '25vh' }
      }}
    >
      {headers[type]}
    </Grid>
  )
}
