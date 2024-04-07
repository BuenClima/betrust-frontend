import { Link, Typography, TypographyProps } from '@mui/material'
import PropTypes from 'prop-types'
/**
 * @description CopyRight component
 * @param {TypographyProps} props - props
 * @returns {JSX.Element} CopyRight component
 */
export const Copyright = ({ ...props }: TypographyProps): JSX.Element => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://betrust.com">
        BETRUST
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

/**
 * @description PropTypes
 */
Copyright.propTypes = {
  props: PropTypes.any
}

export default Copyright
