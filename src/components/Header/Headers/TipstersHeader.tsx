import { Grid, Typography } from '@mui/material'

/**
 * @description TipstersHeader component
 * @returns {JSX.Element} TipstersHeader component
 */
export const TipstersHeader = (): JSX.Element => {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={10} container justifyContent="center" alignItems="center">
        <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#fff' }}>
          Our Tipsters
        </Typography>
      </Grid>
      <Grid item xs={10} container justifyContent="center" alignItems="center">
        <Typography
          variant="subtitle1"
          component="h1"
          gutterBottom
          sx={{ color: '#fff' }}
        >
          Vestibulum dapibus ipsum lorem, in sollicitudin enim fermentum ac. Duis sagittis
          lobortis justo. Aliquam id lorem posuere, lobortis sem quis, eleifend nunc.
          Pellentesque at vulputate libero. Nullam tempor viverra bibendum. Mauris gravida
          malesuada eros, id placerat turpis interdum ut. Donec ut interdum risus.
          Pellentesque tincidunt elementum purus, quis finibus erat interdum quis. Integer
          ut purus ut massa scelerisque feugiat facilisis sed velit. Cras diam urna,
          hendrerit eget egestas a, fringilla at mi.
        </Typography>
      </Grid>
    </Grid>
  )
}

export default TipstersHeader
