import { Grid } from '@mui/material'
import PropTypes from 'prop-types'

import { AccountType } from '@/types/account'

import { AccountHeader } from './Headers/AccountHeader'
import { TipsHeader } from './Headers/TipsHeader'
import { TipstersHeader } from './Headers/TipstersHeader'

/**
 * @description HeaderType type
 */
export type HeaderType = 'tipsters' | 'tips' | 'tipster' | 'user' | 'admin'

/**
 * @description HeaderProps interface
 * @property {HeaderType} type - HeaderType
 */
type HeaderProps = {
  type: HeaderType
}

/**
 * @description Header component
 * @param {HeaderProps} { type } - HeaderProps
 * @returns {JSX.Element} Header component
 */
export const Header = ({ type }: HeaderProps): JSX.Element => {
  const headers: Record<HeaderType, JSX.Element> = {
    tipsters: <TipstersHeader key={type} />,
    tips: <TipsHeader key={type} />,
    tipster: <AccountHeader key={type} type={type as AccountType} permission="read" />,
    user: <AccountHeader key={type} type={type as AccountType} permission="write" />,
    admin: <></>
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

export default Header

/**
 * @description Header props types
 * @property {HeaderType} type - HeaderType
 */
Header.propTypes = {
  type: PropTypes.string.isRequired
}
