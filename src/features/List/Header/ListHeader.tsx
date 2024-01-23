import { Grid, Typography } from '@mui/material'
import PropTypes from 'prop-types'
/**
 * @description ListHeader props
 * @property {string} title - List title
 * @property {string} body - List body
 */
type ListHeaderProps = {
  title: string
  body?: string
}

/**
 * @description ListHeader component
 * @returns {JSX.Element} ListHeader component
 */
export const ListHeader = (props: ListHeaderProps): JSX.Element => {
  const { title, body } = props
  return (
    <Grid container justifyContent="center" alignItems="center" data-testid="list-header">
      <Grid item xs={10} container justifyContent="center" alignItems="center">
        <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#fff' }}>
          {title}
        </Typography>
      </Grid>
      <Grid item xs={10} container justifyContent="center" alignItems="center">
        <Typography
          variant="subtitle1"
          component="h1"
          gutterBottom
          sx={{ color: '#fff' }}
        >
          {body}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default ListHeader

/**
 * @description ListHeader prop types
 * @property {string} title - List title
 * @property {string} body - List body
 */
ListHeader.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string
}
