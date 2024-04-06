import { Grid } from '@mui/material'
import PropTypes from 'prop-types'
import { useMemo } from 'react'
import { useAuthUser } from 'react-auth-kit'

import { AccountHeader } from '../../features/Account/components/Header/AccountHeader'
import { ListHeader } from '../../features/List/Header/ListHeader'

const loreIpsum = `Vestibulum dapibus ipsum lorem, in sollicitudin enim fermentum ac. Duis sagittis
lobortis justo. Aliquam id lorem posuere, lobortis sem quis, eleifend nunc.
Pellentesque at vulputate libero. Nullam tempor viverra bibendum. Mauris gravida
malesuada eros, id placerat turpis interdum ut. Donec ut interdum risus.
Pellentesque tincidunt elementum purus, quis finibus erat interdum quis. Integer
ut purus ut massa scelerisque feugiat facilisis sed velit. Cras diam urna,
hendrerit eget egestas a, fringilla at mi.`

/**
 * @description HeaderType type
 */
export type HeaderType = 'tipsters' | 'tips' | 'user'

/**
 * @description HeaderProps interface
 * @property {HeaderType} type - HeaderType
 * @property {boolean} self - Self
 */
type HeaderProps = {
  type: HeaderType
  self: boolean
}

/**
 * @description Header component
 * @param {HeaderProps} { type } - HeaderProps
 * @returns {JSX.Element} Header component
 */
export const Header = (props: HeaderProps): JSX.Element => {
  const { type, self } = props
  const user = useAuthUser()

  /**
   * @description Tipster
   */
  const tipster = useMemo(() => user()?.role?.name === 'tipster', [user])

  const headers: Record<HeaderType, JSX.Element> = {
    tipsters: <ListHeader key={type} title="Our Tipsters" body={loreIpsum} />,
    tips: <ListHeader key={type} title="Our Tipsters Tips" body={loreIpsum} />,
    user: <AccountHeader key={type} self={self} tipster={tipster} />
  }

  return (
    <Grid
      container
      sx={{
        backgroundImage: `linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.9),
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
 * @property {boolean} self - Self
 */
Header.propTypes = {
  type: PropTypes.oneOf(['tipsters', 'tips', 'user']).isRequired,
  self: PropTypes.bool.isRequired
}
