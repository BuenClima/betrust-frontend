import { Box, Container, Grid, Typography } from '@mui/material'

/**
 * @description Footer component
 * @returns {JSX.Element} Footer component
 */
export const Footer = (): JSX.Element => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '5vh',
        backgroundColor: '#fff',
        paddingTop: '1rem',
        paddingBottom: '1rem'
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="primary.main" variant="subtitle1">
              {`${new Date().getFullYear()} @ BeTrust`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
